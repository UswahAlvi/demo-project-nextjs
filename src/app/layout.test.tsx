// __tests__/layout.test.tsx

import { render } from '@testing-library/react';
import Layout from './Applayout';
import Page from './page';
import React from 'react';

jest.mock('./_Components/TimerWrapper', () => () => (
  <div data-testid="mock-timer">12 : 34 : 56</div>
));

describe('Layout component', () => {
  it('matches snapshot with mocked TimerWrapper', () => {
    const { container } = render(
      <Layout>
        <Page />
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
