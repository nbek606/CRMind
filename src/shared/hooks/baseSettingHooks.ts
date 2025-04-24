import {fetchGetCountriesApi} from "@/shared/model";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {fetchGetTimezoneApi} from "@/shared/model/base-setting-timezone";
import {fetchGetCurrencyApi} from "@/shared/model/base-setting-currency";
import {fetchGetDateformatApi} from "@/shared/model/base-setting-dateformat";
import {fetchGetTimeFormatApi} from "@/shared/model/base-setting-time-format";
export const useBaseSettingCountries = () => {
    const { list: countries } = useAppSelector(state => state.baseSettingCountries)
    const dispatch = useAppDispatch()

    const loadCountries = () => {
        if (countries.length === 0) {
            dispatch(fetchGetCountriesApi())
        }
    }

    return {countries, loadCountries}
}

export const useBaseSettingTimeZone = () => {
    const { list: timezoneList } = useAppSelector(state => state.baseSettingTimezone)
    const dispatch = useAppDispatch()

    const loadTimezoneList = () => {
        if (timezoneList.length === 0) {
            dispatch(fetchGetTimezoneApi())
        }
    }

    return {timezoneList, loadTimezoneList}
}

export const useBaseSettingCurrency = () => {
    const { list: currencyList } = useAppSelector(state => state.baseSettingCurrency)
    const dispatch = useAppDispatch()

    const loadCurrencyList = () => {
        if (currencyList.length === 0) {
            dispatch(fetchGetCurrencyApi())
        }
    }

    return {currencyList, loadCurrencyList}
}

export const useBaseSettingDateformat = () => {
    const { list: dateFormatList } = useAppSelector(state => state.baseSettingCurrency)
    const dispatch = useAppDispatch()

    const loadDateFormatList = () => {
        if (dateFormatList.length === 0) {
            dispatch(fetchGetDateformatApi())
        }
    }

    return {dateFormatList, loadDateFormatList}
}

export const useBaseSettingTimeFormat = () => {
    const { list: timeFormatList } = useAppSelector(state => state.baseSettingTimeFormat)
    const dispatch = useAppDispatch()

    const loadTimeFormatList = () => {
        if (timeFormatList.length === 0) {
            dispatch(fetchGetTimeFormatApi())
        }
    }

    return {timeFormatList,  loadTimeFormatList}
}