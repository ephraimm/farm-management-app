import { describe, it, expect } from 'vitest';
import authReducer, { setUser, setToken, logout } from '../slices/authSlice';

describe('auth slice', () => {
  const initialState = {
    user: null,
    token: null,
    authenticated: false,
  };

  const mockUser = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    farmName: 'Test Farm',
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setUser', () => {
    const actual = authReducer(initialState, setUser(mockUser));
    expect(actual.user).toEqual(mockUser);
    expect(actual.authenticated).toBe(true);
  });

  it('should handle setToken', () => {
    const mockToken = 'test-token';
    const actual = authReducer(initialState, setToken(mockToken));
    expect(actual.token).toEqual(mockToken);
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: mockUser,
      token: 'test-token',
      authenticated: true,
    };
    const actual = authReducer(loggedInState, logout());
    expect(actual).toEqual(initialState);
  });
});
