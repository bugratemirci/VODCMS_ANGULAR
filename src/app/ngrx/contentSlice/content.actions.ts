import { createAction, props } from '@ngrx/store';
import { Content } from 'src/app/content/content';

export const setContent = createAction('[Set Content] SetContent', props<Content>());
export const resetContent = createAction('[Reset Content] ResetContent');


