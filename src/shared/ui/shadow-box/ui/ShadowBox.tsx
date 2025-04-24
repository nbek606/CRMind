import {FC, ReactNode} from "react";
import './ShadowBox.scss';

interface IShadowBoxProps {
    width?: number | string,
    children?: ReactNode
}

export const ShadowBox: FC<IShadowBoxProps> = ({ children, width}) => {
    return (
        <div
            className="shadow__box"
            style={{width: width }}
        >
            {children}
        </div>
    )
}