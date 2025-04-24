import './GeneralSettingsWidget.scss';
import {GeneralSettingsForm} from "@/features/general-settings-form";
import {useAppSelector} from "@/app/hooks/redux.ts";
import {BaseLoading} from "@/shared/ui/loading";

export const GeneralSettingsWidget = () => {
    const isLoading = useAppSelector(state => state.generalSettings.isLoading)

    return (
        <div className="general__settings">
            <BaseLoading isLoading={isLoading}/>
            <GeneralSettingsForm />
        </div>
    )
}