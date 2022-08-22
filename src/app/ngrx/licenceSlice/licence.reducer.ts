import { createReducer, on } from "@ngrx/store";
import { Content } from "src/app/content/content";
import { Licence } from "src/app/models/licence";
import { setLicence, resetLicence } from "./licence.actions";

export interface IState {
    licence: any,
}

export const initialLicence: IState = {
    licence: {
        id: -1,
        licenceName: "",
        endTime: Date,
        startTime: Date,
    },
}

export const licenceReducer = createReducer(initialLicence,
    on(setLicence, (state, licence) => {
        const newState: IState = {
            licence: licence,
        }
        return newState.licence;
    }),
    on(resetLicence, (state, licence) => {
        const newState: IState = {
            licence: {
                id: -1,
                licenceName: "",
                endTime: Date,
                startTime: Date,
            },
        }
        return newState.licence
    }),
)