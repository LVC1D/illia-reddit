import React, { useState, useEffect } from 'react';

function useErrorBoundary() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (error) => {
      setError(error);
    };
    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return error;
}

export default useErrorBoundary;