/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppContext } from '../../../providers';
import Repos from '../index';
import { initialState } from '../../../reducers';

const AppContainerComponent = (state) =>
  render(
    <AppContext.Provider value={{ state }}>
      <Repos repos={state.repos.data} error={state.repos.error} />
    </AppContext.Provider>,
  );

describe('Repos component', () => {
  test('should not display repos if no data available', () => {
    const { queryByTestId } = AppContainerComponent(initialState);

    const repos = queryByTestId('repos');

    expect(repos).toBeFalsy();
  });
  test('should hide details modal if no active repo selected', () => {
    const { queryByTestId } = AppContainerComponent(initialState);
    const repos = queryByTestId('repos-modal');

    expect(repos).toBeFalsy();
  });
});
