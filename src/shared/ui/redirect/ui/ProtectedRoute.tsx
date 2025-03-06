import {useEffect, ReactNode, FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppSelector} from "@/app/hooks/redux.ts";
import {ROUTES} from "@/shared/constant/routes.ts";

interface ProtectedRouteProps {
    children: ReactNode,
    path: string
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, path }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useAppSelector(state => state.auth.token)

    useEffect(() => {
        if (token && (path === ROUTES.LOGIN || path === ROUTES.REGISTER)) {
            navigate(ROUTES.HOME)
        }

        if (!token && path !== ROUTES.REGISTER) {
            navigate(ROUTES.LOGIN);
        }
    }, [token, navigate, location.pathname]);

    return <>{children}</>;
};