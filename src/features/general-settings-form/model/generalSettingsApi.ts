import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";
import {IGeneralSetting} from "@/features/general-settings-form";

export const fetchGetGeneralSettingsApi = createAsyncThunk(
    'base-setting-general-settings/fetchGetGeneralSettings',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get("/base_setting")
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchUpdateGeneralSettingsApi = createAsyncThunk(
    'base-setting-general-settings/fetchUpdateGeneralSettings',
    async (data: IGeneralSetting, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.patch(`/base_setting/${data.id}`, data)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)