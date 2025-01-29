import { describe, it, expect } from 'vitest';
import farmReducer, {
  setCurrentFarm,
  setPaddocks,
  addPaddock,
  updatePaddock,
  addGrazingRecord,
  addWeatherRecord,
} from '../slices/farmSlice';

describe('farm slice', () => {
  const initialState = {
    currentFarm: null,
    paddocks: [],
    grazingRecords: [],
    weatherRecords: [],
  };

  const mockFarm = {
    id: '1',
    name: 'Test Farm',
    location: 'Test Location',
    size: 100,
    units: 'hectares' as const,
  };

  const mockPaddock = {
    id: '1',
    farmId: '1',
    name: 'Test Paddock',
    size: 10,
    status: 'available' as const,
    health: 'good' as const,
  };

  it('should handle initial state', () => {
    expect(farmReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setCurrentFarm', () => {
    const actual = farmReducer(initialState, setCurrentFarm(mockFarm));
    expect(actual.currentFarm).toEqual(mockFarm);
  });

  it('should handle setPaddocks', () => {
    const paddocks = [mockPaddock];
    const actual = farmReducer(initialState, setPaddocks(paddocks));
    expect(actual.paddocks).toEqual(paddocks);
  });

  it('should handle addPaddock', () => {
    const actual = farmReducer(initialState, addPaddock(mockPaddock));
    expect(actual.paddocks).toHaveLength(1);
    expect(actual.paddocks[0]).toEqual(mockPaddock);
  });

  it('should handle updatePaddock', () => {
    const stateWithPaddock = {
      ...initialState,
      paddocks: [mockPaddock],
    };
    const updatedPaddock = {
      ...mockPaddock,
      name: 'Updated Paddock',
    };
    const actual = farmReducer(stateWithPaddock, updatePaddock(updatedPaddock));
    expect(actual.paddocks[0].name).toEqual('Updated Paddock');
  });

  it('should handle addGrazingRecord', () => {
    const mockGrazingRecord = {
      id: '1',
      paddockId: '1',
      startDate: '2023-08-01',
      livestockCount: 50,
    };
    const actual = farmReducer(initialState, addGrazingRecord(mockGrazingRecord));
    expect(actual.grazingRecords).toHaveLength(1);
    expect(actual.grazingRecords[0]).toEqual(mockGrazingRecord);
  });

  it('should handle addWeatherRecord', () => {
    const mockWeatherRecord = {
      id: '1',
      farmId: '1',
      date: '2023-08-01',
      rainfall: 25,
      temperature: 20,
      conditions: 'sunny',
    };
    const actual = farmReducer(initialState, addWeatherRecord(mockWeatherRecord));
    expect(actual.weatherRecords).toHaveLength(1);
    expect(actual.weatherRecords[0]).toEqual(mockWeatherRecord);
  });
});
