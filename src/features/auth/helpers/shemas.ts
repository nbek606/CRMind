import {z} from "zod";

export const authFormSchema = z.object({
    username: z.string().min(1, "Поле не должно быть пустым"),
    password: z.string().min(1, "Поле не должно быть пустым"),
});

export type TAuthFormSchema = typeof authFormSchema
export type TAuthFormData = z.infer<TAuthFormSchema>
