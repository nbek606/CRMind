import {FC, useState} from "react";
import type {TBaseTab} from "@/shared/model/types";
import {BaseTabItem} from "./BaseTabItem.tsx";
import './BaseTab.scss';

interface IBaseTabProps {
    list: TBaseTab[],
    inner?: boolean
}

export const BaseTab: FC<IBaseTabProps> = ({ list, inner }) => {
    const [activeTab, setActiveTab] = useState(list[0].link)
    return (
        <div
            className={ `base__tab  ${ inner ? 'base__tab-inner' : '' }` }
        >
            <div className="base__tab-wrap">
                {
                    list.map(item =>
                        <BaseTabItem
                            item={item}
                            key={item.path}
                            activeTab={activeTab}
                            onChangeActiveTab={(v) => setActiveTab(v)}
                        />
                    )
                }
            </div>
        </div>
    )
}