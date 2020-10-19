import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const includedIn = (includedInArr: Array<any>): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (!isPresent(includedInArr)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (includedInArr.indexOf(control.value) < 0) {
        return { includedIn: {value: control.value, reason: includedInArr}};
    }
    return null;
  };
};
