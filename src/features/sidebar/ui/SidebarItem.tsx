import './Sidebar.scss';
import React, {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface SidebarItemProps {
    children?: React.ReactNode,
    title: string,
    link: string,
}

export const SidebarItem: FC<SidebarItemProps> = ({ children, title, link }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div
            className={
                `sidebar__item
                ${ location.pathname === link ? 'sidebar__item-active': ''}`
            }
            onClick={() => navigate(link)}
        >
            <div className="sidebar__item-icon">
                { children }
            </div>
            <p className="sidebar__item-title ">
                {title}
            </p>
        </div>
    )
}