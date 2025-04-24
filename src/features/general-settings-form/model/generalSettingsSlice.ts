import {fetchGetGeneralSettingsApi, fetchUpdateGeneralSettingsApi} from "../model";
import type { IGeneralSetting } from "../model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    generalSettings: IGeneralSetting | null,
    isLoading: boolean,
    error: string
}

export const initialState: IInitialState = {
    generalSettings: null,
    isLoading: false,
    error: ''
}

const generalSettingsSlice = createSlice({
    name: "generalSettingsSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetGeneralSettingsApi.pending, (state) => {
            state.isLoading = true
            state.error = ''
        }).addCase(fetchGetGeneralSettingsApi.rejected, (state) => {
            state.isLoading = false
            state.error = 'Ошибка'
        }).addCase(fetchGetGeneralSettingsApi.fulfilled, (state, action: PayloadAction<IGeneralSetting | null>) => {
            state.isLoading = false
            state.generalSettings = action.payload
        }).addCase(fetchUpdateGeneralSettingsApi.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchUpdateGeneralSettingsApi.rejected, (state) => {
            state.isLoading = false
            state.error = 'Ошибка'
        }).addCase(fetchUpdateGeneralSettingsApi.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})

export const generalSettingsReducer = generalSettingsSlice.reducer