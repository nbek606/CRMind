import {ICrm} from "@/shared/model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCrmApi} from "./crmApi.ts";

interface IInitialState {
    crmList: ICrm[],
    error: string,
    isLoading: boolean,
    selectedCrmId: number | null,
}

const initialState: IInitialState = {
    crmList: [],
    error: '',
    isLoading: false,
    selectedCrmId: localStorage.getItem('crmId') ? Number(localStorage.getItem('crmId')) : null
}

const crmSlice = createSlice({
    name: "crmSlice",
    initialState,
    reducers: {
        changeSelectedCrmId (state, action: PayloadAction<number | null>) {
            state.selectedCrmId = action.payload;
            localStorage.setItem('crmId', JSON.stringify(action.payload))
        },
        clearSelectedCrmId (state) {
            localStorage.removeItem('crmId')
            console.log(localStorage.getItem('crmId'))
            state.selectedCrmId = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCrmApi.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchCrmApi.fulfilled, (state, action: PayloadAction<ICrm[]>) => {
                state.isLoading = false
                state.error = ''
                state.crmList = action.payload
            })
            .addCase(fetchCrmApi.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Произашла ошибка'
            })
    }
})

export const crmReducer = crmSlice.reducer;
export const {changeSelectedCrmId, clearSelectedCrmId} = crmSlice.actions;