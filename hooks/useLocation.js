import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLocation = async () => {
    try {
      // Request permissions to access the location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        setLoading(false);
        return;
      }

      // Fetch the last known position
      const { coords } = await Location.getLastKnownPositionAsync({});
      if (coords) {
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      } else {
        setError('Unable to fetch location');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while fetching location');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, error, loading };
}
