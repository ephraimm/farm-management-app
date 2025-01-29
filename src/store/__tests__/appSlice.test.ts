import { describe, it, expect } from 'vitest';
import appReducer, { setOffline, setLoading, setError } from '../slices/appSlice';

describe('app slice', () => {
  const initialState = {
    offline: false,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(appReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setOffline', () => {
    const actual = appReducer(initialState, setOffline(true));
    expect(actual.offline).toEqual(true);
  });

  it('should handle setLoading', () => {
    const actual = appReducer(initialState, setLoading(true));
    expect(actual.loading).toEqual(true);
  });

  it('should handle setError', () => {
    const errorMessage = 'Test error';
    const actual = appReducer(initialState, setError(errorMessage));
    expect(actual.error).toEqual(errorMessage);
  });

  it('should handle error clearing', () => {
    const stateWithError = {
      ...initialState,
      error: 'Test error',
    };
    const actual = appReducer(stateWithError, setError(null));
    expect(actual.error).toBeNull();
  });
});
