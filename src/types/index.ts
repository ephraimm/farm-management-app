// Entity Types
export interface User {
  id: string;
  name: string;
  email: string;
  farmName: string;
}

export interface Farm {
  id: string;
  name: string;
  location: string;
  size: number;
  units: 'hectares' | 'acres';
}

export interface Paddock {
  id: string;
  farmId: string;
  name: string;
  size: number;
  lastGrazed?: string;
  status: 'available' | 'in-use' | 'resting';
  health: 'good' | 'fair' | 'poor';
}

export interface GrazingRecord {
  id: string;
  paddockId: string;
  startDate: string;
  endDate?: string;
  livestockCount: number;
  notes?: string;
}

export interface WeatherRecord {
  id: string;
  farmId: string;
  date: string;
  rainfall: number;
  temperature: number;
  conditions: string;
  notes?: string;
}

// State Types
export interface AppState {
  offline: boolean;
  loading: boolean;
  error: string | null;
}

export interface SyncState {
  lastSync: string | null;
  pendingChanges: number;
  syncing: boolean;
}
