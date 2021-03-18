import { useState, useCallback } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method='GET', body=null, headers={}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        setLoading(false);

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        return data;

      } catch (err) {
        setError(err.message);
        throw err;
      }
    }, []
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    loading,
    error,
    request,
    clearError,
  };
};

export default useHttp;
