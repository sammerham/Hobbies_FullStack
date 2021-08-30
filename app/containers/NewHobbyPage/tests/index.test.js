import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { memoryHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from '../../../configureStore';

import NewHobbyPage from '../index';

const store = configureStore({}, memoryHistory);

describe('<NewHobbyPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <NewHobbyPage />
        </Provider>
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should display input field value', () => {
    const { getByPlaceholderText } = render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <NewHobbyPage />
        </Provider>
      </IntlProvider>,
    );
    const input = getByPlaceholderText('Enter a new hobby');
    fireEvent.change(input, { target: { value: 'test hobby' } });
    expect(input.value).toBe('test hobby');
  });
});
