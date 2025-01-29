import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../index';
import StateVerification from '../../components/StateVerification';

describe('StateVerification', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <StateVerification />
      </Provider>
    );
  });

  it('should render all state sections', () => {
    expect(screen.getByText('App State')).toBeInTheDocument();
    expect(screen.getByText('Auth State')).toBeInTheDocument();
    expect(screen.getByText('Farm State')).toBeInTheDocument();
    expect(screen.getByText('Sync State')).toBeInTheDocument();
  });

  it('should update state correctly', () => {
    const state = store.getState();
    
    // Verify app state
    expect(state.app.loading).toBe(true);
    expect(state.app.offline).toBe(false);

    // Verify auth state
    expect(state.auth.user).toBeTruthy();
    expect(state.auth.user?.name).toBe('Test User');
    expect(state.auth.authenticated).toBe(true);

    // Verify farm state
    expect(state.farm.currentFarm).toBeTruthy();
    expect(state.farm.currentFarm?.name).toBe('Test Farm');
    expect(state.farm.paddocks).toHaveLength(1);
    expect(state.farm.paddocks[0].name).toBe('Test Paddock');

    // Verify sync state
    expect(state.sync.syncing).toBe(true);
  });
});
