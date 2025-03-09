import {fetchGetCountriesApi} from "@/shared/model";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";

export const useBaseSettingCountries = () => {
    const { list: countries } = useAppSelector(state => state.baseSettingCountries)
    const dispatch = useAppDispatch()

    const loadCountries = () => {
        dispatch(fetchGetCountriesApi())
    }

    return {countries, loadCountries}
}