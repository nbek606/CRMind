import {ICountry} from "@/shared/model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetCountriesApi} from "@/shared/model";

interface IInitialState {
    list: ICountry[],
    isLoading: boolean,
    error: string
}

const initialState: IInitialState = {
    list: [],
    isLoading: false,
    error: ''
}

export const baseSettingCountriesSlice = createSlice({
    name: "baseSettingCountriesSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCountriesApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchGetCountriesApi.fulfilled, (state, action: PayloadAction<ICountry[]>) => {
                state.isLoading = false
                state.list = action.payload
            })
            .addCase(fetchGetCountriesApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка при получении'
            })
    }
})

export const baseSettingCountriesReducer = baseSettingCountriesSlice.reducer