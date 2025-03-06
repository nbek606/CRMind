import {lazy} from "react";

const RegisterForm = lazy(() => import('@/features/register'))

export const RegisterWidget = () => {
    return (
        <div className="register__widget">
            <RegisterForm />
        </div>
    )
}