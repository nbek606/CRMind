import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchGetTimezoneApi = createAsyncThunk(
    'base-setting-timezone/fetchGetTimezoneApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting/timezone")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)