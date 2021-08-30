import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { memoryHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';

import HomePage from '../index';
const store = configureStore({}, memoryHistory);

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <HomePage />
        </Provider>
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
