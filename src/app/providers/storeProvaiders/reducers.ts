import { authReducer} from "@/features/auth";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    auth: authReducer
})