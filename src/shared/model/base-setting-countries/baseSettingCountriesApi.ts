import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchGetCountriesApi = createAsyncThunk(
    'base-setting-countries/fetchGetCountriesApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting/country")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)