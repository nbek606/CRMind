import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchGetCurrencyApi = createAsyncThunk(
    'base-setting-currency/fetchGetCurrencyApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting/currency")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)