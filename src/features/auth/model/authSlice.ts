import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAuthApi} from "@/features/auth";

interface IInitialState {
    error: string,
    isLoading: boolean,
    token: string | null,
    expiresToken: number
}

const initialState: IInitialState = {
    error: '',
    isLoading: false,
    token: localStorage.getItem('token') || '',
    expiresToken: 100000
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthApi.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchAuthApi.fulfilled, (state, action: PayloadAction<{ access_token: string, token_type: string }>) => {
                state.isLoading = false
                state.token = action.payload.access_token;
                localStorage.setItem('token',action.payload.access_token)
            })
            .addCase(fetchAuthApi.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
                state.token = null
                localStorage.removeItem('token')
            })
    }
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer