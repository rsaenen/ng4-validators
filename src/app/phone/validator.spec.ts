import { FormControl } from '@angular/forms';

import { phone } from './validator';

describe('Phone', () => {
  let control: FormControl;

  it('"0668744565" should equal to "null"', () => {
    control = new FormControl('0668744565');
    expect(phone('FR')(control)).toBeNull();
  });

  it('"+33668744565" should equal to "null"', () => {
    control = new FormControl('+33668744565');
    expect(phone('FR')(control)).toBeNull();
  });

  it('"+33 6 68 74 45 65" should equal to "null"', () => {
    control = new FormControl('+33 6 68 74 45 65');
    expect(phone('FR')(control)).toBeNull();
  });

  it('"(541) 754-3010" should equal to "null"', () => {
    control = new FormControl('(541) 754-3010');
    expect(phone('US')(control)).toBeNull();
  });

  it('"57984236445" should equal to "{phone: true}"', () => {
    control = new FormControl('57984236445');
    expect(phone('FR')(control)).toEqual({ phone: true });
  });

  it('"(541) 74 754-3010." should equal to "{phone: true}"', () => {
    control = new FormControl('(541) 74 754-3010');
    expect(phone('US')(control)).toEqual({ phone: true });
  });
});
