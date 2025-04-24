import './GeneralSettingsForm.scss';
import {
    useBaseSettingCountries,
    useBaseSettingCurrency,
    useBaseSettingDateformat, useBaseSettingTimeFormat,
    useBaseSettingTimeZone
} from "@/shared/hooks";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {useLayoutEffect, useState} from "react";
import {ShadowBox} from "@/shared/ui/shadow-box";
import {BaseSelect} from "@/shared/ui/select";
import {BaseButton} from "@/shared/ui/button";
import {
    fetchGetGeneralSettingsApi,
    IGeneralSetting,
    fetchUpdateGeneralSettingsApi
} from "../model";

export const GeneralSettingsForm = () => {
    const [country, setCountry] = useState<number | null>(0)
    const [currency, setCurrency] = useState<number | null>(0)
    const [dateFormat, setDateFormat] = useState<number | null>(0)
    const [timeZone, setTimeZone] = useState<number | null>(0)
    const [timeFormat, setTimeFormat] = useState<number | null>(0)

    const { loadTimezoneList } = useBaseSettingTimeZone()
    const { loadCountries } = useBaseSettingCountries()
    const { loadCurrencyList } = useBaseSettingCurrency()
    const { loadDateFormatList } = useBaseSettingDateformat()
    const { loadTimeFormatList } = useBaseSettingTimeFormat()
    const timezoneList = useAppSelector(state => state.baseSettingTimezone.list)
    const countries = useAppSelector(state => state.baseSettingCountries.list)
    const currencyList = useAppSelector(state => state.baseSettingCurrency.list)
    const dateFormatList = useAppSelector(state => state.baseSettingDateformat.list)
    const timeFormatList = useAppSelector(state => state.baseSettingTimeFormat.list)
    const crmId = useAppSelector(state => state.crmSelection.selectedCrmId)

    const { generalSettings: generalSettingsData } = useAppSelector(state => state.generalSettings)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        loadTimezoneList()
        loadCountries()
        loadCurrencyList()
        loadDateFormatList()
        loadTimeFormatList()
    }, [])

    useLayoutEffect(() => {
        setSettings()
    }, [generalSettingsData]);

    useLayoutEffect(() => {
        if (generalSettingsData === null) {
            dispatch(fetchGetGeneralSettingsApi())
        }
    }, [generalSettingsData, dispatch]);

    const onUpdate = () => {
        if (generalSettingsData === null) {
            return
        }
        const generalSetting: IGeneralSetting = {
            id: generalSettingsData.id,
            crm_id: crmId,
            country_id: country,
            date_format_id: dateFormat,
            time_format_id: timeFormat,
            timezone_id: timeZone,
            currency_id: currency
        }

        dispatch(fetchUpdateGeneralSettingsApi(generalSetting))
    }

    const setSettings = () => {
        if (generalSettingsData === null) {
            return
        }

        setCountry(generalSettingsData.country_id)
        setCurrency(generalSettingsData.currency_id)
        setDateFormat(generalSettingsData.date_format_id)
        setTimeFormat(generalSettingsData.time_format_id)
        setTimeZone(generalSettingsData.timezone_id)
    }

    return (
        <ShadowBox>
            {
                generalSettingsData !== null ?
                <div className="general__settings-form">
                    <BaseSelect
                        label="Страна"
                        items={countries}
                        value={country}
                        onChange={(v) => setCountry(v)}
                    />
                    <BaseSelect
                        label="Валюта"
                        items={currencyList}
                        value={currency}
                        onChange={(v) => setCurrency(v)}
                    />
                    <BaseSelect
                        label="Часовый пояс"
                        items={timezoneList}
                        value={timeZone}
                        onChange={(v) => setTimeZone(v)}
                    />
                    <BaseSelect
                        label="Формат даты"
                        items={dateFormatList}
                        value={dateFormat}
                        onChange={(v) => setDateFormat(v)}
                    />
                    <BaseSelect
                        label="Формат времени"
                        items={timeFormatList}
                        value={timeFormat}
                        onChange={(v) => setTimeFormat(v)}
                    />
                    <div className="general__settings-form__btns">
                        <BaseButton
                            title="Сохранить"
                            type="primary"
                            onClick={() => onUpdate()}
                        />
                        <BaseButton
                            title="Отмена"
                            type="default"
                            onClick={() => setSettings()}
                        />
                    </div>
                </div> : null
            }
        </ShadowBox>
    )
}