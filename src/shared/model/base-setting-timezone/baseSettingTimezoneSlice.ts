import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITimezone} from "@/shared/model";
import {fetchGetTimezoneApi} from "@/shared/model/base-setting-timezone/baseSettingTimezoneApi.ts";

interface IInitialState {
    list: ITimezone[],
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    error: ''
}

export const baseSettingCountriesSlice = createSlice({
    name: "baseSettingTimezoneSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetTimezoneApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchGetTimezoneApi.fulfilled, (state, action: PayloadAction<ITimezone[]>) => {
                state.isLoading = false
                state.list = action.payload
            })
            .addCase(fetchGetTimezoneApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка при получении'
            })
    }
})

export const baseSettingTimezoneReducer = baseSettingCountriesSlice.reducer