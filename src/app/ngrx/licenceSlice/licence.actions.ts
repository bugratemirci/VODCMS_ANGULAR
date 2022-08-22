import { createAction, props } from '@ngrx/store';
import { Licence } from 'src/app/models/licence';

export const setLicence = createAction('[Set Licence] SetLicence', props<Licence>());
export const resetLicence = createAction('[Reset Licence] ResetLicence');