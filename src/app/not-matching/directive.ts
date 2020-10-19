import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { notMatching } from './validator';

const NOT_MATCHING_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotMatchingValidator),
  multi: true
};

@Directive({
  selector: '[notMatching][formControlName],[notMatching][formControl],[notMatching][ngModel]',
  providers: [NOT_MATCHING_VALIDATOR]
})
export class NotMatchingValidator implements Validator, OnInit, OnChanges {
  @Input() notMatching: string | RegExp;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = notMatching(this.notMatching);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'notMatching') {
        this.validator = notMatching(changes[key].currentValue);
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
