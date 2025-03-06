import "./RegisterForm.scss"
import {BaseTextField, PasswordTextField} from "@/shared/ui/input";
import {BaseTitle} from "@/shared/ui/label";
import {ArrowBack} from "@mui/icons-material";
import {BaseButton} from "@/shared/ui/button";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {schema} from "../helpers";
import {BaseSelect} from "@/shared/ui/select";

interface IRegisterFormProps {
    onShowAuth: () => void;
}

export const RegisterForm: FC<IRegisterFormProps> = ({onShowAuth}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    type FormData = z.infer<typeof schema>

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="register">
            <form
                className="register__form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="register__header">
                    <div className="register__header">
                        <div className="register__header-title">
                            <BaseTitle text="Регистрация Нурлана"/>
                        </div>
                    </div>
                </div>
                <BaseTextField
                    label="Имя пользователя"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <BaseTextField
                    label="Имя"
                    {...register("first_name")}
                    error={!!errors.first_name}
                    helperText={errors.first_name?.message}
                />
                <BaseTextField
                    label="Фамилия"
                    {...register("last_name")}
                    error={!!errors.last_name}
                    helperText={errors.last_name?.message}
                />
                <BaseTextField
                    label="Номер телефона"
                    {...register("phone_number")}
                    error={!!errors.phone_number}
                    helperText={errors.phone_number?.message}
                />
                <BaseTextField
                    label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <BaseSelect
                    label="Страна"
                    items={[{ id: 1, name: "Кыргызстан" }]}
                />
                <PasswordTextField
                    label="Пароль"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <div className="register__buttons">
                    <ArrowBack fontSize="inherit"
                               onClick={onShowAuth}
                    />
                    <BaseButton
                        title="Зарегистрироваться"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}