import { Button } from 'antd';
import {FC, ReactNode} from 'react';
import './BaseButton.scss';
import {SyncOutlined } from "@ant-design/icons";

interface IBaseButton {
    title: string,
    disabled?: boolean,
    onClick?: (test: string) => void;
    htmlType?: 'button' | 'submit',
    loading?: boolean,
    width?: number | string,
    icon?: ReactNode,
    type?: 'primary' | 'default'
}

export const BaseButton: FC<IBaseButton> = (
    {
        title,
        disabled = false,
        onClick,
        htmlType = 'button',
        loading = false,
        width = '100%',
        icon,
        type = 'default'
    }) => {
        return (
            <div className="base__button">
                <Button
                    style={{ width: width }}
                    disabled={disabled}
                    onClick={() => onClick ? onClick('type'): () => {}}
                    htmlType={htmlType}
                    loading={loading && { icon: <SyncOutlined spin /> }}
                    icon={icon}
                    type={type}
                >
                    {title}
                </Button>
            </div>
        )
}