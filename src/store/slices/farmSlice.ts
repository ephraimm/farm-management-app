import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Farm, Paddock, GrazingRecord, WeatherRecord } from '../../types';

interface FarmState {
  currentFarm: Farm | null;
  paddocks: Paddock[];
  grazingRecords: GrazingRecord[];
  weatherRecords: WeatherRecord[];
}

const initialState: FarmState = {
  currentFarm: null,
  paddocks: [],
  grazingRecords: [],
  weatherRecords: [],
};

const farmSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    setCurrentFarm: (state, action: PayloadAction<Farm | null>) => {
      state.currentFarm = action.payload;
    },
    setPaddocks: (state, action: PayloadAction<Paddock[]>) => {
      state.paddocks = action.payload;
    },
    addPaddock: (state, action: PayloadAction<Paddock>) => {
      state.paddocks.push(action.payload);
    },
    updatePaddock: (state, action: PayloadAction<Paddock>) => {
      const index = state.paddocks.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.paddocks[index] = action.payload;
      }
    },
    addGrazingRecord: (state, action: PayloadAction<GrazingRecord>) => {
      state.grazingRecords.push(action.payload);
    },
    addWeatherRecord: (state, action: PayloadAction<WeatherRecord>) => {
      state.weatherRecords.push(action.payload);
    },
  },
});

export const {
  setCurrentFarm,
  setPaddocks,
  addPaddock,
  updatePaddock,
  addGrazingRecord,
  addWeatherRecord,
} = farmSlice.actions;
export default farmSlice.reducer;
