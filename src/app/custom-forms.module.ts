import { ArrayLengthValidator } from './array-length/directive';
import { arrayLength } from './array-length/validator';
import { Base64Validator } from './base64/directive';
import { base64 } from './base64/validator';
import { CreditCardValidator } from './credit-card/directive';
import { creditCard } from './credit-card/validator';
import { DateISOValidator } from './date-iso/directive';
import { dateISO } from './date-iso/validator';
import { DateValidator } from './date/directive';
import { date } from './date/validator';
import { DigitsValidator } from './digits/directive';
import { digits } from './digits/validator';
import { EmailValidator } from './email/directive';
import { email } from './email/validator';
import { EqualToValidator } from './equal-to/directive';
import { equalTo } from './equal-to/validator';
import { EqualValidator } from './equal/directive';
import { equal } from './equal/validator';
import { GreaterThanEqualValidator } from './greater-than-equal/directive';
import { gte } from './greater-than-equal/validator';
import { GreaterThanValidator } from './greater-than/directive';
import { gt } from './greater-than/validator';
import { IncludedInValidator } from './included-in/directive';
import { includedIn } from './included-in/validator';
import { JSONValidator } from './json/directive';
import { json } from './json/validator';
import { LessThanEqualValidator } from './less-than-equal/directive';
import { lte } from './less-than-equal/validator';
import { LessThanValidator } from './less-than/directive';
import { lt } from './less-than/validator';
import { MaxDateValidator } from './max-date/directive';
import { maxDate } from './max-date/validator';
import { MaxValidator } from './max/directive';
import { max } from './max/validator';
import { MinDateValidator } from './min-date/directive';
import { minDate } from './min-date/validator';
import { MinValidator } from './min/directive';
import { min } from './min/validator';
import { NotEqualToValidator } from './not-equal-to/directive';
import { notEqualTo } from './not-equal-to/validator';
import { NotEqualValidator } from './not-equal/directive';
import { notEqual } from './not-equal/validator';
import { NotIncludedInValidator } from './not-included-in/directive';
import { notIncludedIn } from './not-included-in/validator';
import { NotMatchingValidator } from './not-matching/directive';
import { notMatching } from './not-matching/validator';
import { NumberValidator } from './number/directive';
import { number } from './number/validator';
import { PropertyValidator } from './property/directive';
import { property } from './property/validator';
import { RangeLengthValidator } from './range-length/directive';
import { rangeLength } from './range-length/validator';
import { RangeValidator } from './range/directive';
import { range } from './range/validator';
import { UrlValidator } from './url/directive';
import { url } from './url/validator';
import { UUIDValidator } from './uuid/directive';
import { uuid } from './uuid/validator';
import { NgModule } from '@angular/core';

export const CustomValidators = {
  arrayLength,
  base64,
  creditCard,
  date,
  dateISO,
  digits,
  email,
  equal,
  equalTo,
  gt,
  gte,
  includedIn,
  json,
  lt,
  lte,
  max,
  maxDate,
  min,
  minDate,
  notEqual,
  notEqualTo,
  notIncludedIn,
  notMatching,
  number,
  property,
  range,
  rangeLength,
  url,
  uuid
};

const CustomDirectives = [
  ArrayLengthValidator,
  Base64Validator,
  CreditCardValidator,
  DateValidator,
  DateISOValidator,
  DigitsValidator,
  EmailValidator,
  EqualValidator,
  EqualToValidator,
  GreaterThanValidator,
  GreaterThanEqualValidator,
  IncludedInValidator,
  JSONValidator,
  LessThanValidator,
  LessThanEqualValidator,
  MaxValidator,
  MaxDateValidator,
  MinValidator,
  MinDateValidator,
  NotEqualValidator,
  NotEqualToValidator,
  NotIncludedInValidator,
  NotMatchingValidator,
  NumberValidator,
  PropertyValidator,
  RangeValidator,
  RangeLengthValidator,
  UrlValidator,
  UUIDValidator
];

@NgModule({
  declarations: [CustomDirectives],
  exports: [CustomDirectives]
})
export class CustomFormsModule { }
