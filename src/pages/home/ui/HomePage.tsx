import {useAppDispatch} from "@/app/hooks/redux.ts";
import {logout} from "@/features/auth";

export const HomePage = () => {
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="home__page">
            homed
            <button onClick={() => onLogout()}>
                Выход
            </button>
        </div>)
}