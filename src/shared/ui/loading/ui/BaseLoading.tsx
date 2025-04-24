import './BaseLoading.scss';
import {Flex, Spin} from "antd";
import {FC} from "react";

interface IBaseLoadingProps {
    isLoading: boolean,
}

export const BaseLoading: FC<IBaseLoadingProps> = ({ isLoading }) => {
    return (
            isLoading ?
                <>
                    <div className="base__loading-bg"></div>
                    <div className="base__loading">
                        <Flex align="center" gap="middle">
                            <Spin size="large" />
                        </Flex>
                    </div>
                </>
                : null
    )
}