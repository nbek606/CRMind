import { authReducer} from "@/features/auth";
import { registerReducer } from "@/features/register";
import { combineReducers } from "@reduxjs/toolkit";
import {baseSettingCountriesReducer} from "@/shared/model";
import {baseSettingTimezoneReducer} from "@/shared/model/base-setting-timezone";
import { crmReducer } from "@/shared/model/crm";
import { baseSettingCurrencyReducer } from "@/shared/model/base-setting-currency";
import {baseSettingDateformatReducer} from "@/shared/model/base-setting-dateformat";
import {baseSettingTimeFormatReducer} from "@/shared/model/base-setting-time-format";
import {settingsUserGroupReducer} from "@/features/settings-users-group-list/model";
import {generalSettingsReducer} from "@/features/general-settings-form/model"

export const rootReducer = combineReducers({
    auth: authReducer,
    baseSettingCountries: baseSettingCountriesReducer,
    register: registerReducer,
    crmSelection: crmReducer,
    crmGroup: settingsUserGroupReducer,
    baseSettingTimezone: baseSettingTimezoneReducer,
    baseSettingCurrency: baseSettingCurrencyReducer,
    baseSettingDateformat: baseSettingDateformatReducer,
    generalSettings: generalSettingsReducer,
    baseSettingTimeFormat: baseSettingTimeFormatReducer
})