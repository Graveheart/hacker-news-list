import { render } from '@testing-library/react';

import RelativeScoreCircle from './RelativeScoreCircle';

describe('RelativeScoreCircle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelativeScoreCircle />);
    expect(baseElement).toBeTruthy();
  });
});
