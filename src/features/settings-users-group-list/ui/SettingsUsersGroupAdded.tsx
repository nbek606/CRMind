import {BaseButton} from "@/shared/ui/button";
import {PlusOutlined} from "@ant-design/icons"
import {useState} from "react";
import {BaseFormInput} from "@/shared/ui/input";
import './SettingsUsersGroupList.scss';
import {fetchSettingsUsersCreateGroupApi} from "@/features/settings-users-group-list";
import {useAppDispatch} from "@/app/hooks/redux.ts";

export const SettingsUsersGroupListAdded = () => {
    const [isAdded, setIsAdded] = useState<boolean>(false)
    const [groupName, setGroupName] = useState<string>('')
    const dispatch = useAppDispatch()

    const onCreateGroup = () => {
        dispatch(fetchSettingsUsersCreateGroupApi(groupName))
        setIsAdded(false)
    }

    return (
        <div className="settings__users-groups__list-added">
            {
                !isAdded ?
                    <BaseButton
                        title="Добавить группу"
                        type="primary"
                        icon={<PlusOutlined/>}
                        onClick={() => setIsAdded(true)}
                    />
                    :
                    <div className="settings__users-groups__list-create">
                        <BaseFormInput
                            placeholder="Введите название группы"
                            onChange={(v) => setGroupName(v)}
                            value={groupName}
                        />

                        <div className="settings__users-groups__list-buttons">
                            <BaseButton title="Добавить" type="primary" onClick={() => onCreateGroup()} />
                            <BaseButton title="Отмена" onClick={() => setIsAdded(false)}/>
                        </div>
                    </div>
            }
        </div>
    )
}
