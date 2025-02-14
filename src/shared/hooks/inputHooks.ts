import {useEffect, useState} from "react";
import type {THtmlEvent} from '@/shared/model/HTMLTypes';

interface IValidations {
    minLength?: number,
    isEmpty?: boolean,
}

export interface IReturnUseInput {
    value: string,
    onChange: (e:THtmlEvent) => void,
    onBlur: () => void,
    isDirty: boolean,
    minLength?: number,
    isEmpty?: boolean
}

export const useInput = (initialValue: string, validations: IValidations): IReturnUseInput => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e:THtmlEvent) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    };
};

export const useValidation = (value: string, validations: IValidations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    if (value) {
                        setEmpty(false)
                    } else {
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
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
    }
}