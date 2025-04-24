
import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchSettingsUsersGetGroupApi = createAsyncThunk(
    'settings/fetchSettingsUsersGetGroupApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/crm/group")
            return response.data
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)

export const fetchSettingsUsersCreateGroupApi = createAsyncThunk(
    'settings/fetchSettingsUsersCreateGroupApi',
    async (name: string, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post("/crm/group", { name })
            return response.data
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)
