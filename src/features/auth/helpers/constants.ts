import {z} from "zod";

export const schema = z.object({
    username: z.string().min(4, "Поле не должно быть пустым"),
    password: z.string().min(2, "Поле не должно быть пустым"),
});
