import './AuthForm.scss';
import {BaseTitle} from "@/shared/ui/label";
import {BaseButton} from "@/shared/ui/button";
import {fetchAuthApi} from "../model";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {Alert} from "antd";
import {FC, FormEvent} from "react";
import {useInput} from "@/shared/hooks/inputHooks.ts";
import {BaseFormInput} from "@/shared/ui/input";

interface IAuthFormProps {
    onShowRegister: () => void
}

export const AuthForm: FC<IAuthFormProps> = ({ onShowRegister })=> {
    const dispatch = useAppDispatch()
    const {error, isLoading} = useAppSelector(state => state.auth)
    const username = useInput('', { isEmail: true })
    const password = useInput('', { isEmpty: true })
{}
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(fetchAuthApi({ username: username.value, password: password.value }))
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
                <form onSubmit={onSubmit}>
                    <BaseFormInput
                        placeholder="Email*"
                        value={username.value}
                        onChange={(e) => username.onChange(e)}
                        onBLur={() => username.onBlur()}
                        error={username.isEmail && username.isDirty}
                        errorMessage={username.message.error}
                    />
                    <BaseFormInput
                        placeholder="password*"
                        value={password.value}
                        onChange={(e) => password.onChange(e)}
                        onBLur={() => password.onBlur()}
                        error={password.isEmail && password.isDirty}
                        errorMessage={password.message.error}
                        type="password"
                    />
                    <BaseButton
                        title="Войти"
                        type="submit"
                        loading={isLoading}
                        disabled={!username.inputValid || !password.inputValid}
                    />
                    <br/>
                    {
                        !error || <Alert message={error} type="error" showIcon/>
                    }
                </form>
            </div>
        </div>
    )
}
