import {useEffect, useMemo, useState} from "react";

interface IValidations {
    minLength?: number,
    isEmpty?: boolean,
    inputValid?: boolean,
    isEmail?: boolean
}

interface IMessage {
    error?: string,
    success?: string,
    warning?: string
}

export interface IReturnUseInput extends IValidations{
    value: string,
    onChange: (v:string) => void,
    onBlur: () => void,
    isDirty: boolean,
    minLength?: number,
    isEmpty: boolean,
    message: IMessage
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useInput = (initialValue: string, validations: IValidations): IReturnUseInput => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (v: string) => {
        setValue(v);
    };

    const onBlur = () => {
        setDirty(true);
    };

    const message = useMemo(() => {
        let error = ""
        if (isDirty && valid.isEmpty) error = "Поле не должен быть пустым"
        if (isDirty && valid.isEmail) error = "Некорректный Email"

        return { error }
    }, [isDirty, valid.isEmpty, valid.isEmail])

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        message,
        ...valid
    };
};

export const useValidation = (value: string, validations: IValidations) => {
    const [isEmpty, setEmpty] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)
    const [isEmail, setIsEmail] = useState<boolean>(false)
    const [inputValid, setInputValid] = useState(true)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    if (value) {
                        setEmpty(false)
                    } else if (validations[validation]){
                        setEmpty(true)
                    }
                    break;
                case "minLength":
                    if (value.length < (validations.minLength ?? 0)) {
                        setMinLengthError(true)
                    } else {
                        setMinLengthError(false)
                    }
                    break;
                case "isEmail":
                    if (emailRegex.test(value)) {
                        setIsEmail(false)
                    } else {
                        setIsEmail(true)
                    }
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || isEmail) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, isEmail]);

    return {
        isEmpty,
        isEmail,
        minLengthError,
        inputValid
    }
}