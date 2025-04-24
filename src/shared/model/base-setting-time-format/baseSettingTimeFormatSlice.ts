import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITimeFormat} from "@/shared/model";
import {fetchGetTimeFormatApi} from "./baseSettingTimeFormatApi.ts";

interface IInitialState {
    list: ITimeFormat[],
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    error: ''
}

export const baseSettingTimeFormatSlice = createSlice({
    name: "baseSettingTimeFormatSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetTimeFormatApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchGetTimeFormatApi.fulfilled, (state, action: PayloadAction<ITimeFormat[]>) => {
                state.isLoading = false
                state.list = action.payload.map(item => ({ id: item.id, name: item.time_format }))
            })
            .addCase(fetchGetTimeFormatApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка при получении'
            })
    }
})

export const baseSettingTimeFormatReducer = baseSettingTimeFormatSlice.reducer