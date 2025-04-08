import {useBaseSettingTimeZone} from "@/shared/hooks";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {useLayoutEffect} from "react";

export const GeneralSettingsForm = () => {
    const { loadTimezoneList } = useBaseSettingTimeZone()
    const timezoneList = useAppSelector(state => state.baseSettingTimezone.list)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        loadTimezoneList()
    }, [dispatch])

    return (
        <div className="general__settings-form">
            {JSON.stringify(timezoneList)}
        </div>
    )
}