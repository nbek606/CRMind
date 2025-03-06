import {AuthForm} from '@/features/auth';
import { RegisterForm } from "@/features/register";
import {useState} from "react";

export const AuthWidget = ()=> {
    const [isVisibleRegister, setIsVisibleRegister] = useState(true)
    const onChangeIsVisibleRegister = () => setIsVisibleRegister(prev => !prev)

    return (
        <div className="auth__widget">
            {
                isVisibleRegister ?
                  <AuthForm
                      onShowRegister={onChangeIsVisibleRegister}
                  />
                : <RegisterForm
                      onShowAuth={onChangeIsVisibleRegister}
                  />
            }
        </div>
    )
}