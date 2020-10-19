import { FormControl } from '@angular/forms';

import { notMatching } from './validator';

describe('notMatching', () => {
  it('abc should not match /x+/', () => {
    const control = new FormControl('abc');
    expect(notMatching(/x+/)(control)).toBeNull();
  });

  it('abc should match /a+bc/', () => {
    const control = new FormControl('abc');
    expect(notMatching(/a+bc/)(control)).toEqual({ notMatching: { value: 'abc', reason: /a+bc/ } });
  });
});
