import { isPresent } from '../util/lang';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';

export const phone = (country: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        if (isPresent(Validators.required(control))) {
            return null;
        }

        const phoneNumber = parsePhoneNumberFromString(control.value, country as CountryCode);

        if (phoneNumber && phoneNumber.isValid()) {
            return null;
        }

        return { phone: true };
    };
};
