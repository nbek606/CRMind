import './CrmSelection.scss';
import {useAppDispatch, useAppSelector} from "@/app/hooks/redux.ts";
import {useEffect, useLayoutEffect, useState} from "react";
import {fetchCrmApi} from "@/shared/model/crm";
import {BaseTitle} from "@/shared/ui/label";
import {RadioButtonGroup} from "@/shared/ui/radio";
import {BaseButton} from "@/shared/ui/button";
import {changeSelectedCrmId} from "@/shared/model/crm/crmSlice.ts";

export const CrmSelection = () => {
    const { crmList, isLoading, selectedCrmId: crmId } = useAppSelector(state => state.crmSelection)
    const {token} = useAppSelector(state => state.auth)
    const [selectedCrmId, setSelectedCrmId] = useState<number | null>(null)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        if (!crmId && token) {
            dispatch(fetchCrmApi())
        }
    }, [crmId]);

    useEffect(() => {
        if (crmList.length > 0) {
            setSelectedCrmId(crmList[0]?.id || null)
        }
    }, [crmList]);

    const onSelectedCrm = () => {
        dispatch(changeSelectedCrmId(selectedCrmId))
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
                                value={selectedCrmId}
                                onChange={(v) => setSelectedCrmId(v)}
                            />
                        }
                    </div>
                    <div className="crm__selection-btn">
                        <BaseButton
                            title="Далее"
                            onClick={() => onSelectedCrm()}
                        />
                    </div>
                </div>
            }
        </div>
    )
}