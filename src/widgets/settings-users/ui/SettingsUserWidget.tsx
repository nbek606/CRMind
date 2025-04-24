import './SettingsUserWidget.scss';
import {settingsUserRoute} from "../constants"
import {BaseTab} from "@/shared/ui/base-tab/ui/BaseTab.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const SettingsUserWidget = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(settingsUserRoute[0].link)
    }, []);

    return (
        <div className="settings__users-widget">
            <div className="settings__users-widget__wrap">
                <BaseTab inner={true} list={settingsUserRoute} />

                <Routes>
                    {
                        settingsUserRoute.map(item =>
                            <Route
                                element={<item.element />}
                                path={item.path}
                                key={item.path}
                            />
                        )
                    }
                </Routes>
            </div>
        </div>
    )
}