import './BaseTab.scss';
import {TBaseTab} from "@/shared/model";
import {FC} from "react";

import {NavLink, useLocation} from "react-router-dom";

interface IBaseTabItemProps {
    item: TBaseTab
}

export const BaseTabItem: FC<IBaseTabItemProps> = ({ item }) => {
    const location = useLocation()

    return (
        <div
            className={`base__tab-item ${location.pathname === item.link && 'base__tab-item__active'}`}
        >
            <NavLink to={item.link}>
                {item.title}
            </NavLink>
        </div>
    )
}