import { authReducer} from "@/features/auth";
import { registerReducer } from "@/features/register";
import { combineReducers } from "@reduxjs/toolkit";
import {baseSettingCountriesReducer} from "@/shared/model";
import { crmReducer } from "@/shared/model/crm";

export const rootReducer = combineReducers({
    auth: authReducer,
    baseSettingCountries: baseSettingCountriesReducer,
    register: registerReducer,
    crmSelection: crmReducer
})