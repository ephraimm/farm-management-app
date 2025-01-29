import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SyncState } from '../../types';

const initialState: SyncState = {
  lastSync: null,
  pendingChanges: 0,
  syncing: false,
};

const syncSlice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    setSyncing: (state, action: PayloadAction<boolean>) => {
      state.syncing = action.payload;
    },
    setLastSync: (state, action: PayloadAction<string>) => {
      state.lastSync = action.payload;
    },
    incrementPendingChanges: (state) => {
      state.pendingChanges += 1;
    },
    decrementPendingChanges: (state) => {
      state.pendingChanges = Math.max(0, state.pendingChanges - 1);
    },
    resetPendingChanges: (state) => {
      state.pendingChanges = 0;
    },
  },
});

export const {
  setSyncing,
  setLastSync,
  incrementPendingChanges,
  decrementPendingChanges,
  resetPendingChanges,
} = syncSlice.actions;
export default syncSlice.reducer;
