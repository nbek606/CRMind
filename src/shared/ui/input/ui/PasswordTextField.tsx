import {TextField, InputAdornment, IconButton} from "@mui/material";
import {ChangeEvent, forwardRef, useState} from "react";
import "./BaseTextField.scss";
import {VisibilityOff, Visibility} from "@mui/icons-material";

interface IBaseTextField {
    label?: string,
    placeholder?: string,
    error?: boolean,
    helperText?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PasswordTextField = forwardRef<HTMLInputElement, IBaseTextField>(({ placeholder, label, error,helperText,onChange, ...rest}, ref) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <div className="base__text-field">
            <TextField
                placeholder={placeholder}
                label={label}
                ref={ref}
                type={ passwordVisible ? 'text' : 'password' }
                error={!!error}
                helperText={helperText}
                onChange={onChange}
                slotProps={
                    {
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
                                        { passwordVisible ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }
                }
                {...rest}
            />
        </div>
    )
});