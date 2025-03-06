import {TextField} from "@mui/material";
import {ChangeEvent, forwardRef, memo} from "react";
import "./BaseTextField.scss";

type TBaseTextField = {
    label?: string,
    placeholder?: string,
    error?: boolean,
    helperText?: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const BaseTextField = memo(forwardRef<HTMLInputElement, TBaseTextField>(({
    placeholder,
    label,
    error,
    helperText,
    onChange,
    value,
    ...rest
}, ref) => {
    return (
        <div className="base__text-field">
            <TextField
                placeholder={placeholder}
                label={label}
                ref={ref}
                error={!!error}
                helperText={helperText}
                onChange={onChange}
                value={value}
                {...rest}
            />
        </div>
    )
}));