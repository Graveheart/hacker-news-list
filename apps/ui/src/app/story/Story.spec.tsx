import { render } from '@testing-library/react';

import Story from './Story';

describe('Story', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Story />);
    expect(baseElement).toBeTruthy();
  });
});
