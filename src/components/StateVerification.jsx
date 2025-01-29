import React from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { setOffline, setLoading } from '../store/slices/appSlice';
import { setUser } from '../store/slices/authSlice';
import { setCurrentFarm, addPaddock } from '../store/slices/farmSlice';
import { setSyncing } from '../store/slices/syncSlice';

export default function StateVerification({ onClose }) {
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);
  const authState = useAppSelector((state) => state.auth);
  const farmState = useAppSelector((state) => state.farm);
  const syncState = useAppSelector((state) => state.sync);

  React.useEffect(() => {
    dispatch(setOffline(false));
    dispatch(setLoading(true));
    
    dispatch(setUser({
      id: '1',
      name: 'Test User',
      email: 'test@farm.com',
      farmName: 'Test Farm'
    }));

    dispatch(setCurrentFarm({
      id: '1',
      name: 'Test Farm',
      location: 'Test Location',
      size: 100,
      units: 'hectares'
    }));

    dispatch(addPaddock({
      id: '1',
      farmId: '1',
      name: 'Test Paddock',
      size: 10,
      status: 'available',
      health: 'good'
    }));

    dispatch(setSyncing(true));
  }, [dispatch]);

  return (
    <div className="fixed inset-0 bg-white/95 z-50 overflow-auto">
      <div className="p-4">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
        
        <h2 className="text-xl font-bold mb-4">State Verification</h2>
        
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-bold">App State</h3>
            <pre className="mt-2 text-sm">
              {JSON.stringify(appState, null, 2)}
            </pre>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold">Auth State</h3>
            <pre className="mt-2 text-sm">
              {JSON.stringify(authState, null, 2)}
            </pre>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold">Farm State</h3>
            <pre className="mt-2 text-sm">
              {JSON.stringify(farmState, null, 2)}
            </pre>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold">Sync State</h3>
            <pre className="mt-2 text-sm">
              {JSON.stringify(syncState, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
