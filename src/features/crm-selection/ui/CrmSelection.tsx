import './CrmSelection.scss';
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {useEffect, useLayoutEffect} from "react";
import {fetchCrmApi} from "@/shared/model/crm";
import {BaseTitle} from "@/shared/ui/label";
import {RadioButtonGroup} from "@/shared/ui/radio";
import {changeSelectedCrmId} from "@/shared/model/crm/crmSlice.ts";

export const CrmSelection = () => {
    const { crmList, isLoading, selectedCrmId: crmId } = useAppSelector(state => state.crmSelection)
    const {token} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        if (!crmId && token) {
            dispatch(fetchCrmApi())
        }
    }, [crmId]);

    useEffect(() => {
        if (crmList.length === 1) {
            dispatch(changeSelectedCrmId(crmList[0].id))
        }
    }, [crmList]);

    const onSelectedCrm = (crmId: number) => {
        dispatch(changeSelectedCrmId(crmId))
    }

    return (
        <div className="crm__selection">
            {!isLoading &&
                <div className="crm__selection-wrap">
                    <BaseTitle
                        text="Выберите CRM"
                    />
                    <div className="crm__selection-list">
                        {
                            <RadioButtonGroup
                                options={crmList}
                                onChange={(v) => onSelectedCrm(v)}
                            />
                        }
                    </div>
                </div>
            }
        </div>
    )
}