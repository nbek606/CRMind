import './BaseSelect.scss';
import {ICountry} from "@/shared/model";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FC, memo} from "react";

interface IBaseSelectProps {
    items: ICountry[],
    value?: string,
    label?: string
}

export const BaseSelect: FC<IBaseSelectProps> = memo(({items, value, label}) => {
    return (
        <div className="base__select">
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select
                    variant="outlined"
                    value={value}
                    label={label}
                >
                    {
                        items.map(item =>
                            <MenuItem
                                value={item.id}
                                key={item.id}
                            >
                                {item.name}
                            </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    )
})