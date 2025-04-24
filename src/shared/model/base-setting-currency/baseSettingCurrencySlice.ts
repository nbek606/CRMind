import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICurrency} from "@/shared/model";
import {fetchGetCurrencyApi} from "./baseSettingCurrencyApi.ts";

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

export const baseSettingCurrencySlice = createSlice({
    name: "baseSettingCurrencySlice",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCurrencyApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchGetCurrencyApi.fulfilled, (state, action: PayloadAction<ICurrency[]>) => {
                state.isLoading = false
                state.list = action.payload
            })
            .addCase(fetchGetCurrencyApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка при получении'
            })
    }
})

export const baseSettingCurrencyReducer = baseSettingCurrencySlice.reducer