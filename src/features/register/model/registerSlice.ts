import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRegisterApi} from "@/features/register/model/registerApi.ts";

interface IInitialState {
    error: string,
    success: boolean,
    isLoading: boolean,
}

const initialState: IInitialState = {
    error: '',
    success: false,
    isLoading: false,
}

export const registerSlice = createSlice({
    name: "registerSlice",
    initialState: initialState,
    reducers: {
        changeSuccess: (state, action: PayloadAction<boolean>) => {
            state.success = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegisterApi.pending, (state) => {
                state.success = false
                state.isLoading = true
            })
            .addCase(fetchRegisterApi.fulfilled, (state) => {
                state.isLoading = false
                state.success = true
            })
            .addCase(fetchRegisterApi.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    }
})

export const { changeSuccess } = registerSlice.actions;
export const registerReducer = registerSlice.reducer