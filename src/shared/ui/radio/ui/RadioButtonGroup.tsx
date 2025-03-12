import './RadioButtonGroup.scss';
import {Radio} from "antd";
import {ICrm} from "@/shared/model";
import {RightCircleOutlined} from "@ant-design/icons";
import {FC} from "react";

interface IRadioButtonGroupProps {
    options: ICrm[],
    value: number | null,
    onChange: (value: number) => void
}

export const RadioButtonGroup: FC<IRadioButtonGroupProps> = ({ options, value, onChange }) => {
    return (
        <div className="radio__button-group">
           <Radio.Group
               value={value}
               onChange={(e) => onChange(e.target.value)}
           >
               {
                   options.map(item =>
                       <Radio.Button
                           value={item.id}
                           key={item.id}
                       >
                           {item.name}
                           <RightCircleOutlined />
                       </Radio.Button>
                   )
               }
           </Radio.Group>
        </div>
    )
}