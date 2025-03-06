import './BaseTitle.scss';
import {FC, memo} from "react";

interface IBaseLabelProps {
    text: string,
    size?: number
}

export const BaseTitle: FC<IBaseLabelProps> = memo(({ text, size = 24 }) => {
    return (
        <h1
            className="base__title"
            style={{ fontSize: size }}
        >
            {text}
        </h1>
    )
})