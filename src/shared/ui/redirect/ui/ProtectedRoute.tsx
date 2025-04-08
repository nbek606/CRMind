import {useEffect, ReactNode, FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppSelector} from "@/app/hooks/redux.ts";
import {ROUTES} from "@/shared/constant/routes.ts";
import {CrmSelection} from "@/features/crm-selection";
import {Sidebar} from "@/features/sidebar";

interface ProtectedRouteProps {
    children: ReactNode,
    path: string
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, path }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useAppSelector(state => state.auth.token)
    const { selectedCrmId } = useAppSelector(state => state.crmSelection)

    useEffect(() => {
        if (token && (path === ROUTES.LOGIN)) {
            navigate(ROUTES.HOME)
        }

        if (!token && path) {
            navigate(ROUTES.LOGIN);
        }
    }, [token, navigate, location.pathname]);

    return (
        <>
            {
                !selectedCrmId && path !== ROUTES.LOGIN ?
                    <CrmSelection></CrmSelection>
                    : <div className="page__content">{children}</div>
            }
            {
                selectedCrmId && <Sidebar />
            }
        </>
    );
};