import { render } from '@testing-library/react';

import StoryList from './StoryList';

describe('StoryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoryList />);
    expect(baseElement).toBeTruthy();
  });
});
