import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICurrency, IDateformat} from "@/shared/model";
import {fetchGetDateformatApi} from "./baseSettingDateformatApi.ts";

interface IInitialState {
    list: ICurrency[],
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    error: ''
}

export const baseSettingDateformatSlice = createSlice({
    name: "baseSettingDateformatSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetDateformatApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchGetDateformatApi.fulfilled, (state, action: PayloadAction<IDateformat[]>) => {
                state.isLoading = false
                state.list = action.payload.map(item => ({ id: item.id, name: item.date_format }))
            })
            .addCase(fetchGetDateformatApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка при получении'
            })
    }
})

export const baseSettingDateformatReducer = baseSettingDateformatSlice.reducer