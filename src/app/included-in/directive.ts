import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { includedIn } from './validator';

const INCLUDED_IN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IncludedInValidator),
  multi: true
};

@Directive({
  selector: '[includedIn][formControlName],[includedIn][formControl],[includedIn][ngModel]',
  providers: [INCLUDED_IN_VALIDATOR]
})
export class IncludedInValidator implements Validator, OnInit, OnChanges {
  @Input() includedIn: Array<any>;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = includedIn(this.includedIn);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'includedIn') {
        this.validator = includedIn(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
