import {useEffect, useLayoutEffect, useState} from "react";
import './SettingsUsersGroupList.scss';
import {fetchSettingsUsersGetGroupApi} from "@/features/settings-users-group-list";
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {ICRMGroup} from "@/shared/model";
import {SettingsUsersGroupListAdded} from "@/features/settings-users-group-list/ui/SettingsUsersGroupAdded.tsx";

export const SettingsUsersGroupList = () => {
    const dispatch = useAppDispatch()
    const { list: groupList } = useAppSelector(state => state.crmGroup)
    const [groupItemActive, setGroupItemActive] = useState<ICRMGroup | null>(null)

    useEffect(() => {
        if (groupList.length === 0) {
            dispatch(fetchSettingsUsersGetGroupApi())
        }
    }, [groupList]);

    useEffect(() => {
        setGroupItemActive(groupList[0])
    }, []);

    const onGroupItem = (group: ICRMGroup) => {
        setGroupItemActive(group)
    }

    return (
        <div className="settings__users-groups__list">
            <SettingsUsersGroupListAdded />
            <div className="settings__users-groups__list-content">
                {
                    groupList && groupList.map((group) => (
                        <div
                            className={
                            `settings__users-groups__list-item 
                            ${ groupItemActive && groupItemActive.id === group.id ? 'settings__users-groups__list-item__active' : '' }` }
                            key={group.id}
                            onClick={() => onGroupItem(group)}
                        >
                            <p className="settings__users-groups__list-name">
                                {group.name}
                            </p>
                            <p className="settings__users-groups__list-order">
                                {group.users_count} пользователей
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
