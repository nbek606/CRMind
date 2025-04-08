import './Sidebar.scss';
import {SidebarItem} from "./SidebarItem.tsx";
import {sidebarList} from "@/features/sidebar/constants";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                sidebarList.map((item) =>
                    <SidebarItem
                        title={item.title}
                        key={item.link}
                        children={
                            <img
                                className="sidebar__icon"
                                src={item.icon} alt={item.title}
                            />
                        }
                        link={item.link}
                    />
                )
            }
        </div>
    )
}