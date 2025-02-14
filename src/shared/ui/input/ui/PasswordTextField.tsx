import {InputAdornment, IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FC, useState} from "react";
import './BaseTextField.scss';
import {BaseTextField} from "@/shared/ui/input";
import {THtmlEvent} from "@/shared/model/HTMLTypes";

interface IBaseTextField {
    label?: string,
    placeholder?: string,
    onInput?: (event: THtmlEvent) => void,
    name: string,
}

export const PasswordTextField: FC<IBaseTextField> = ({placeholder, label, onInput, name}) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    const changePasswordVisible = () => setPasswordVisible(!passwordVisible)

    return (
        <div className="password__text-field">
            <BaseTextField
                placeholder={placeholder}
                variant="outlined"
                label={label}
                type={passwordVisible ? "password" : "text"}
                onInput={onInput}
                name={name}
                required={true}
                slotProps={
                    {
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={changePasswordVisible}>
                                        { passwordVisible ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }
                }
            />
        </div>
    )
}