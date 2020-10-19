import { FormControl } from '@angular/forms';

import { includedIn } from './validator';

describe('includedIn', () => {

  it('[1, 2, 3] should include 3', () => {
    const control = new FormControl(3);
    expect(includedIn([1, 2, 3])(control)).toBeNull();
  });

  it('["a", "b", "c"] should include "a"', () => {
    const control = new FormControl('a');
    expect(includedIn(['a', 'b', 'c'])(control)).toBeNull();
  });

  it('[1, 2, 3] should not include 5', () => {
    const control = new FormControl(5);
    expect(includedIn([1, 2, 3])(control)).toEqual({ includedIn: { value: 5, reason: [1, 2, 3] } });
  });
});
