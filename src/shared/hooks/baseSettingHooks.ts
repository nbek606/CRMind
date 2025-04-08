import {fetchGetCountriesApi} from "@/shared/model";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {fetchGetTimezoneApi} from "@/shared/model/base-setting-timezone/baseSettingTimezoneApi.ts";

export const useBaseSettingCountries = () => {
    const { list: countries } = useAppSelector(state => state.baseSettingCountries)
    const dispatch = useAppDispatch()

    const loadCountries = () => {
        dispatch(fetchGetCountriesApi())
    }

    return {countries, loadCountries}
}

export const useBaseSettingTimeZone = () => {
    const { list: timezoneList } = useAppSelector(state => state.baseSettingTimezone)
    const dispatch = useAppDispatch()

    const loadTimezoneList = () => {
        console.log('loadTime')
        dispatch(fetchGetTimezoneApi())
    }

    return {timezoneList, loadTimezoneList}
}