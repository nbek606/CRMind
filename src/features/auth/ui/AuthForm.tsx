import './AuthForm.scss';
import {BaseTextField, PasswordTextField} from "@/shared/ui/input";
import {BaseTitle} from "@/shared/ui/label";
import {BaseButton} from "@/shared/ui/button";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {schema} from "@/features/auth/helpers/constants.ts";
import {z} from "zod";
import {fetchAuthApi} from "../model";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {Alert} from "@mui/material";
import {FC} from "react";

interface IAuthFormProps {
    onShowRegister: () => void
}

export const AuthForm: FC<IAuthFormProps> = ({ onShowRegister })=> {
    const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    type FormData = z.infer<typeof schema>

    const onSubmit = (data: FormData) => {
        dispatch(fetchAuthApi(data))
    }

    return (
        <div className="auth">
            <div className="auth__form">
                <div className="auth__form-header">
                    <BaseTitle text="Вход"/>
                    <div className="auth__form-no__account">
                     <span>
                        Еще нет аккаунта?
                     </span>
                        <a onClick={onShowRegister}>
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <BaseTextField
                        label="Email"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <PasswordTextField
                        label="Пароль"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <BaseButton
                        title="Войти"
                        type="submit"
                        loading={isLoading}
                    />
                    {
                        error &&
                        <Alert severity="error">
                            {error}
                        </Alert>
                    }
                </form>
            </div>
        </div>
    )
}
