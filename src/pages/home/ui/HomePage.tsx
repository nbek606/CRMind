import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {logout} from "@/features/auth";
import {clearSelectedCrmId} from "@/shared/model";

export const HomePage = () => {
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(logout())
        dispatch(clearSelectedCrmId())
    }

    const {selectedCrmId, crmList} = useAppSelector(state => state.crmSelection)

    return (
        <div className="home__page">
            <h1>
                {JSON.stringify(crmList.find(item => item.id === selectedCrmId))}
            </h1>
            <button onClick={() => onLogout()}>
                Выход
            </button>
        </div>)
}