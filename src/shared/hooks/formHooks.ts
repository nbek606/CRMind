/* eslint-disable @typescript-eslint/no-explicit-any */

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z, ZodType} from "zod";

export const useCustomForm = <T extends ZodType<any, any, any>>(schema: T) => {
    return useForm<z.infer<T>>({
        resolver: zodResolver(schema)
    })
}