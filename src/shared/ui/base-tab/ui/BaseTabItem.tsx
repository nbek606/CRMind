import './BaseTab.scss';
import {TBaseTab} from "@/shared/model";
import {FC} from "react";

import {NavLink} from "react-router-dom";

interface IBaseTabItemProps {
    item: TBaseTab,
    activeTab: string,
    onChangeActiveTab: (tab: string) => void
}

export const BaseTabItem: FC<IBaseTabItemProps> = ({ item, activeTab, onChangeActiveTab }) => {
    return (
        <NavLink to={item.link} onClick={() => onChangeActiveTab(item.link)}>
            <div
                className={`base__tab-item ${ activeTab === item.link && 'base__tab-item__active'}`}
            >

                    {item.title}
            </div>
        </NavLink>
    )
}