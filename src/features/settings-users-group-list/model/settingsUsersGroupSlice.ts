import {ICRMGroup} from "@/shared/model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchSettingsUsersCreateGroupApi, fetchSettingsUsersGetGroupApi} from "@/features/settings-users-group-list";

interface IInitialState {
    list: ICRMGroup[],
    error: string,
    isLoading: boolean
}

const initialState: IInitialState = {
    list: [],
    error: '',
    isLoading: false
}

const settingsUserGroupSlice = createSlice({
    name: "settingsUserGroupSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSettingsUsersGetGroupApi.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchSettingsUsersGetGroupApi.fulfilled, (state, action: PayloadAction<ICRMGroup[]>) => {
                state.isLoading = false
                state.error = ''
                state.list = action.payload
            })
            .addCase(fetchSettingsUsersGetGroupApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка'
            })
            .addCase(fetchSettingsUsersCreateGroupApi.pending, (state) => {
                state.isLoading = true
                state.error = 'error'
            })
            .addCase(fetchSettingsUsersCreateGroupApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'error'
            })
            .addCase(fetchSettingsUsersCreateGroupApi.fulfilled, (state, action: PayloadAction<ICRMGroup>) => {
                state.isLoading = false
                state.error = ''
                state.list.unshift(action.payload)
            })
    }
})

export const settingsUserGroupReducer = settingsUserGroupSlice.reducer;