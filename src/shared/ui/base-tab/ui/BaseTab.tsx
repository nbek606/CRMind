import {FC} from "react";
import type {TBaseTab} from "@/shared/model/types";
import {BaseTabItem} from "./BaseTabItem.tsx";
import './BaseTab.scss';

interface IBaseTabProps {
    list: TBaseTab[]
}

export const BaseTab: FC<IBaseTabProps> = ({ list }) => {

    return (
        <div className="base__tab">
            <div className="base__tab-wrap">
                {
                    list.map(item =>
                        <BaseTabItem
                            item={item}
                            key={item.path}
                        />
                    )
                }
            </div>
        </div>
    )
}