import { render } from '@testing-library/react';
import Page from './page';

describe('Page component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
