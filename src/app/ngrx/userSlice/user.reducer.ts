import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/login/user";
import { setUser, resetUser } from "./user.actions";

export interface IState {
    user: any
}

export const initialUserState: IState = {
    user: {
        username: "",
        password: "",
        id: 0,
        email: "",
        isAdmin: false
    }
}

export const userReducer = createReducer(initialUserState,
    on(setUser, (state, user) => {
        const { username, password, id, email, isAdmin } = user;
        console.log(username);
        console.log(password);


        const newState: IState = {
            user: {
                username,
                password,
                id,
                email,
                isAdmin
            }
        }
        return newState.user;
    }),
    on(resetUser, (state, user) => {
        const newState: IState = {
            user: new User
        }
        return newState.user;
    }))