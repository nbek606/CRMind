import {Button} from "@mui/material";
import {FC} from 'react';
import './BaseButton.scss';

interface IBaseButton {
    title: string,
    variant?: 'outlined' | 'text' | 'contained',
    color?: 'error' | 'success' | 'primary',
    disabled?: boolean,
    onClick?: (test: string) => void;
    type?: 'button' | 'submit'
}

export const BaseButton: FC<IBaseButton> = ({title, variant="contained", color="primary", disabled = false, onClick, type='button'}) => {
    return (
        <div className="base__button">
            <Button
                variant={variant}
                color={color}
                disabled={disabled}
                onClick={() => onClick ? onClick('type'): () => {}}
                type={type}
            >
                {title}
            </Button>
        </div>
    )
}