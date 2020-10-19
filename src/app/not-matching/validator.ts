import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const notMatching = (p: string | RegExp): ValidatorFn => {
  if (!isPresent(p)) {
    return (control) => null;
  }
  const patternValidator = Validators.pattern(p);
  return (control: AbstractControl): ValidationErrors | null => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!patternValidator(control)) {
        return { notMatching: {value: control.value, reason: p}};
    }
    return null;
  };
};
