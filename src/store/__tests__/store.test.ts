import { describe, it, expect } from 'vitest';
import { store } from '../index';
import { setOffline } from '../slices/appSlice';
import { setUser } from '../slices/authSlice';
import { setCurrentFarm } from '../slices/farmSlice';
import { setSyncing } from '../slices/syncSlice';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    const state = store.getState();
    
    expect(state.app).toEqual({
      offline: false,
      loading: false,
      error: null,
    });

    expect(state.auth).toEqual({
      user: null,
      token: null,
      authenticated: false,
    });

    expect(state.farm).toEqual({
      currentFarm: null,
      paddocks: [],
      grazingRecords: [],
      weatherRecords: [],
    });

    expect(state.sync).toEqual({
      lastSync: null,
      pendingChanges: 0,
      syncing: false,
    });
  });

  it('should handle dispatched actions', () => {
    store.dispatch(setOffline(true));
    store.dispatch(setSyncing(true));
    
    const state = store.getState();
    expect(state.app.offline).toBe(true);
    expect(state.sync.syncing).toBe(true);
  });

  it('should handle complex state changes', () => {
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      farmName: 'Test Farm',
    };

    const mockFarm = {
      id: '1',
      name: 'Test Farm',
      location: 'Test Location',
      size: 100,
      units: 'hectares' as const,
    };

    store.dispatch(setUser(mockUser));
    store.dispatch(setCurrentFarm(mockFarm));

    const state = store.getState();
    expect(state.auth.user).toEqual(mockUser);
    expect(state.auth.authenticated).toBe(true);
    expect(state.farm.currentFarm).toEqual(mockFarm);
  });
});
