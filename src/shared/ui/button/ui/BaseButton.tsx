import { Button } from 'antd';
import {FC} from 'react';
import './BaseButton.scss';
import {SyncOutlined } from "@ant-design/icons";

interface IBaseButton {
    title: string,
    disabled?: boolean,
    onClick?: (test: string) => void;
    type?: 'button' | 'submit',
    loading?: boolean
}

export const BaseButton: FC<IBaseButton> = (
    {
        title,
        disabled = false,
        onClick,
        type='button',
        loading = false
    }) => {
        return (
            <div className="base__button">
                <Button
                    disabled={disabled}
                    onClick={() => onClick ? onClick('type'): () => {}}
                    htmlType={type}
                    loading={loading && { icon: <SyncOutlined spin /> }}
                >
                    {title}
                </Button>
            </div>
        )
}