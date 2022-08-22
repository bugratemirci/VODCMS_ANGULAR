import { createReducer, on } from "@ngrx/store";
import { Content } from "src/app/content/content";
import { Licence } from "src/app/models/licence";
import { setContent, resetContent } from "./content.actions";

export interface IState {
    content: any
}

export const initialContent: IState = {
    content: {
        contentName: "",
        contentStatus: "",
        id: -1,
        contentPosterUrl: "",
        contentVideoUrl: "",
        contentDescription: "",
        licences: []
    },
}

export const contentReducer = createReducer(initialContent,
    on(setContent, (state, content) => {
        const newState: IState = {
            content: content,
        }
        return newState.content;
    }),
    on(resetContent, (state, content) => {
        const newState: IState = {
            content: {
                contentName: "",
                contentStatus: "",
                id: -1,
                contentPosterUrl: "",
                contentVideoUrl: "",
                contentDescription: "",
                licences: []
            },
        }
        return newState.content;
    }),
)