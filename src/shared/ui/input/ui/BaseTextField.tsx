import {TextField} from "@mui/material";
import {forwardRef} from "react";
import "./BaseTextField.scss";
import {THtmlEvent} from "@/shared/model/HTMLTypes";

interface IBaseTextField {
    label?: string,
    placeholder?: string,
    variant?: 'outlined' | 'standard' | 'filled',
    type?: 'text' | 'password' | 'number',
    onInput?: (event: THtmlEvent) => void,
    onBlur?: (event: THtmlEvent) => void,
    name: string,
    required?: boolean,
    value?: string,
    slotProps?: object,
    error?: string,
}

export const BaseTextField = forwardRef<HTMLInputElement, IBaseTextField>(({
    placeholder,
    variant = 'outlined',
    label,
    type = 'text',
    onInput,
    name,
    required,
    value,
    slotProps,
    error
}, ref) => {
    return (
        <div className="base__text-field">
            <TextField
                ref={ref}
                placeholder={placeholder}
                variant={variant}
                label={label}
                type={type}
                onChange={onInput}
                name={name}
                required={required}
                value={value}
                slotProps={slotProps}
                error={!!error}
                helperText={error}
            />
        </div>
    )
});