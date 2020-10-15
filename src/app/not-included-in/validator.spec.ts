import { FormControl } from '@angular/forms';

import { notIncludedIn } from './validator';

describe('notIncludedIn', () => {

  it('[1, 2, 3] should not include 5', () => {
    const control = new FormControl(5);
    expect(notIncludedIn([1, 2, 3])(control)).toBeNull();
  });

  it('["a", "b", "c"] should not include "x"', () => {
    const control = new FormControl('x');
    expect(notIncludedIn(['a', 'b', 'c'])(control)).toBeNull();
  });

  it('[1, 2, 3] should include 3', () => {
    const control = new FormControl(3);
    expect(notIncludedIn([1, 2, 3])(control)).toEqual({ notIncludedIn: { value: 3, reason: [1, 2, 3] } });
  });
});
