import "./RegisterForm.scss"
import {BaseFormInput} from "@/shared/ui/input";
import {BaseTitle} from "@/shared/ui/label";
import {BaseButton} from "@/shared/ui/button";
import {FC, FormEvent, memo, useEffect, useMemo, useState} from "react";
import {useBaseSettingCountries} from "@/shared/hooks";
import {useInput} from "@/shared/hooks/inputHooks.ts";
import {BaseSelect} from "@/shared/ui/select";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {changeSuccess, fetchRegisterApi} from "@/features/register";
import {Alert} from "antd";

interface IRegisterFormProps {
    onShowAuth: () => void;
}

export const RegisterForm: FC<IRegisterFormProps> = memo(({onShowAuth}) => {
    const {loadCountries} = useBaseSettingCountries()
    const countries = useAppSelector(state => state.baseSettingCountries.list)
    const { success, isLoading, error } = useAppSelector(state => state.register)

    const dispatch = useAppDispatch()

    const name = useInput('', { isEmpty: true })
    const firstName = useInput('', { isEmpty: true })
    const lastName = useInput('', { isEmpty: true })
    const phoneNumber = useInput('', { isEmpty: true })
    const email = useInput('', { isEmail: true })
    const [countryId, setCountryId] = useState<null | number>(null)
    const password = useInput('', { isEmpty: true })

    useEffect(() => {
        loadCountries()
    }, []);

    useEffect(() => {
        if (countries.length > 0) {
            setCountryId(countries[0].id)
        }
    }, [countries]);

    //При успешной регистрации отправляем на авторизацию
    useEffect(() => {
        if (success) {
            onShowAuth()
            dispatch(changeSuccess(false))
        }
    }, [success]);

    //Условие для отображение кнопки
    const isValidForm = useMemo(() => {
        return [name, firstName, lastName, phoneNumber, email, password].every(field => field.inputValid)
    }, [name, firstName, lastName, phoneNumber, email, password])

    //Отправляем запрос
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(fetchRegisterApi({
            name: name.value,
            first_name: firstName.value,
            last_name: lastName.value,
            phone_number: phoneNumber.value,
            email: email.value,
            country_id: countryId,
            password: password.value
        }))
    }

    return (
        <div className="register">
            <div
                className="register__form"
            >
                <div className="register__header">
                    <div className="register__header">
                        <div className="register__header-title">
                            <BaseTitle text="Регистрация"/>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={onSubmit}
                >
                    <BaseFormInput
                        placeholder="Имя пользователя*"
                        value={name.value}
                        error={name.isDirty && name.isEmpty}
                        errorMessage={name.message.error}
                        onBLur={() => name.onBlur()}
                        onChange={(e) => name.onChange(e)}
                    />
                    <BaseFormInput
                        placeholder="Имя*"
                        value={firstName.value}
                        error={firstName.isDirty && firstName.isEmpty}
                        errorMessage={firstName.message.error}
                        onBLur={() => firstName.onBlur()}
                        onChange={(e) => firstName.onChange(e)}
                    />
                    <BaseFormInput
                        placeholder="Фамилия*"
                        value={lastName.value}
                        error={lastName.isDirty && lastName.isEmpty}
                        errorMessage={lastName.message.error}
                        onBLur={() => lastName.onBlur()}
                        onChange={(e) => lastName.onChange(e)}
                    />
                    <BaseFormInput
                        placeholder="Номер телефона*"
                        value={phoneNumber.value}
                        error={phoneNumber.isDirty && phoneNumber.isEmpty}
                        errorMessage={phoneNumber.message.error}
                        onBLur={() => phoneNumber.onBlur()}
                        onChange={(e) => phoneNumber.onChange(e)}
                    />
                    <BaseFormInput
                        placeholder="Email*"
                        value={email.value}
                        error={email.isDirty && email.isEmail}
                        errorMessage={email.message.error}
                        onBLur={() => email.onBlur()}
                        onChange={(e) => email.onChange(e)}
                    />
                    <BaseSelect
                        items={countries}
                        value={countryId}
                        onChange={(e) => setCountryId(e)}
                    />
                    <BaseFormInput
                        placeholder="Пароль*"
                        value={password.value}
                        error={password.isDirty && password.isEmpty}
                        errorMessage={password.message.error}
                        onBLur={() => password.onBlur()}
                        onChange={(e) => password.onChange(e)}
                        type="password"
                    />

                    <div className="register__buttons">
                        <ArrowLeftOutlined
                            onClick={onShowAuth}
                        />
                        <BaseButton
                            title="Зарегистрироваться"
                            htmlType="submit"
                            type="primary"
                            loading={isLoading}
                            disabled={!isValidForm}
                        />
                    </div>
                    <br/>
                    {
                        !error || <Alert message={error} type="error" showIcon/>
                    }
                </form>
            </div>
        </div>
    )
});