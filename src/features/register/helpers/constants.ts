import {z} from "zod";

export const schema = z.object({
    name: z.string().min(4, "Поле не должно быть пустым"),
    first_name: z.string().min(4, "Поле не должно быть пустым"),
    last_name: z.string().min(4, "Поле не должно быть пустым"),
    phone_number: z.string().min(4, "Поле не должно быть пустым"),
    email: z.string().min(4, "Поле не должно быть пустым"),
    country_id: z.string().min(4, "Поле не должно быть пустым"),
    password: z.string().min(2, "Поле не должно быть пустым"),
});
