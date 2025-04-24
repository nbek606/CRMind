import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchGetTimeFormatApi = createAsyncThunk(
    'base-setting-time-format/fetchGetTimeFormatApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting/time_format")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)