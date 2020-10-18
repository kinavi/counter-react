import { IErrors } from '../types';

export interface IValidateResult {
    isValide: boolean;
    errors: IErrors;
}
