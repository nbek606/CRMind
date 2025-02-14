import { useForm } from "react-hook-form";
import {BaseTextField} from "@/shared/ui/input";
import {useState} from "react";

interface IFormData {
    email: string,
    password: string
}

export const AuthForm = ()=> {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<IFormData>()

    const [formData, setFormData] = useState<IFormData>({ email: "", password: "" });

    const handleInputChange = (field: keyof IFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        console.log("Обновлённые данные:", formData);
    };

    const onSubmit = (data: IFormData) => {
        console.log("Форма отправлена:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <BaseTextField
               label="Email"
               {...register("email", { required: false })}
               error={errors.email?.message}
               onInput={(e) => handleInputChange("email", e.target.value)}
           />


            <input type="submit" />
        </form>
    )
}