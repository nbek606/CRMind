
import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";
import {IAuthBody} from "./authTypes.ts";
import {AUTH_ERROR_MESSAGE} from "@/shared/constant";
import {AxiosError} from "axios";


export const fetchAuthApi = createAsyncThunk(
    'auth/fetchAuthApi',
    async (authBody: IAuthBody, {rejectWithValue}) => {

        //Нужно изменить потом
        const formData = new FormData()
        formData.append('username', authBody.username)
        formData.append('password', authBody.password)

        try {
            const response = await axiosInstance.post("/auth/token", formData)
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            const status = axiosError.status as keyof typeof AUTH_ERROR_MESSAGE;
            return rejectWithValue(AUTH_ERROR_MESSAGE[status] || '')
        }
    }
)