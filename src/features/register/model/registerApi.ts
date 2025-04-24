
import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";
import {REGISTER_ERROR_MESSAGE} from "@/shared/constant";
import {AxiosError} from "axios";
import {IRegisterBody} from "@/features/register";

export const fetchRegisterApi = createAsyncThunk(
    'register/fetchRegisterApi',
    async (registerBody: IRegisterBody, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post("/crm/register", registerBody)
            return response.data
        } catch (error) {
            const axiosError = error as AxiosError;
            const status = axiosError.status as keyof typeof REGISTER_ERROR_MESSAGE;
            return rejectWithValue(REGISTER_ERROR_MESSAGE[status] || '')
        }
    }
)