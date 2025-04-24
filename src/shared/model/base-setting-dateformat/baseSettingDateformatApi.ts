import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchGetDateformatApi = createAsyncThunk(
    'base-setting-dateformat/fetchGetDateformatApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting/date_format")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)