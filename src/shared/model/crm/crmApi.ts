import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchCrmApi = createAsyncThunk(
    'crm/fetchCrmApi',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/crm')
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)