import './BaseSelect.scss';
import {ICountry} from "@/shared/model";
import {Select} from "antd";
import {memo, useMemo, FC} from "react";

interface IBaseSelectProps {
    items: ICountry[];
    value?: number | null;
    label?: string;
    selectLabelName?: string,
    selectValueName?: string,
    placeholder?: string,
    onChange?: (e: number) => void;
}

export const BaseSelect: FC<IBaseSelectProps> = memo((
    {
        label,
        value,
        items,
        selectValueName = "id",
        selectLabelName = "name",
        placeholder,
        ...rest
    }) => {

    // Переобразуем items в options для select
    const options = useMemo(() => items.map(item => ({
        label: item[selectLabelName as keyof ICountry],
        value: item[selectValueName as keyof ICountry]
    })), [items, selectLabelName, selectValueName])

    return (
        <div className="base__select">
            {label && <label className="base__select-label">{label}</label>}
            <Select
                placeholder={placeholder}
                value={ value }
                options={options}
                {...rest}
            />
        </div>
    );
});