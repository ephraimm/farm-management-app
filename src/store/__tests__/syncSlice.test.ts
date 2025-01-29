import { describe, it, expect } from 'vitest';
import syncReducer, {
  setSyncing,
  setLastSync,
  incrementPendingChanges,
  decrementPendingChanges,
  resetPendingChanges,
} from '../slices/syncSlice';

describe('sync slice', () => {
  const initialState = {
    lastSync: null,
    pendingChanges: 0,
    syncing: false,
  };

  it('should handle initial state', () => {
    expect(syncReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSyncing', () => {
    const actual = syncReducer(initialState, setSyncing(true));
    expect(actual.syncing).toBe(true);
  });

  it('should handle setLastSync', () => {
    const timestamp = '2023-08-01T12:00:00Z';
    const actual = syncReducer(initialState, setLastSync(timestamp));
    expect(actual.lastSync).toEqual(timestamp);
  });

  it('should handle incrementPendingChanges', () => {
    const actual = syncReducer(initialState, incrementPendingChanges());
    expect(actual.pendingChanges).toEqual(1);
  });

  it('should handle decrementPendingChanges', () => {
    const stateWithPendingChanges = {
      ...initialState,
      pendingChanges: 2,
    };
    const actual = syncReducer(stateWithPendingChanges, decrementPendingChanges());
    expect(actual.pendingChanges).toEqual(1);
  });

  it('should not decrement below zero', () => {
    const actual = syncReducer(initialState, decrementPendingChanges());
    expect(actual.pendingChanges).toEqual(0);
  });

  it('should handle resetPendingChanges', () => {
    const stateWithPendingChanges = {
      ...initialState,
      pendingChanges: 5,
    };
    const actual = syncReducer(stateWithPendingChanges, resetPendingChanges());
    expect(actual.pendingChanges).toEqual(0);
  });
});
