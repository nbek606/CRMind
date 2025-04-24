import './BaseInput.scss';
import {FC, memo, useMemo} from "react";
import { Input } from "antd";

interface IBaseInputProps {
    label?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    type?: "password" | "text",
    value?: string,
    onChange: (v: string) => void;
    onBLur?: () => void;
}

export const BaseFormInput: FC<IBaseInputProps> = memo((
    {
        label,
        placeholder,
        errorMessage,
        error,
        onChange,
        onBLur,
        type,
        value
    }) => {

    //Проверка на поле пароль | текстовый
    const InputComponent = useMemo(() => {
        return type === "password" ? Input.Password : Input
    }, [type])

    return (
        <div className="base__input">
            {
                label &&
                <label className="base__input-label">
                    {label}
                </label>
            }
            <InputComponent
                placeholder={placeholder}
                status={ error ? "error" : ""}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                onBlur={onBLur}
            />

            <p className={`base__input-error__message ${error ? 'visible' : 'hidden'}`}>
                {errorMessage}
            </p>
        </div>
    )
})
