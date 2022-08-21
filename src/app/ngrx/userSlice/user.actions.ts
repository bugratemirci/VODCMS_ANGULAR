import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/login/user';
export const setUser = createAction('[Set User] SetUser', props<User>());
export const resetUser = createAction('[Reset User] ResetUser'); 
