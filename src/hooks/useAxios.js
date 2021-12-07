import { useState, useEffect } from 'react';

import axios from '../utils/axios';

const defaultOptions = { manual: false };

export const useAxios = (axiosParams, { manual } = defaultOptions) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sendRequest = async (requestParams = {}) => {
    try {
      setLoading(true);
      const result = await axios.request({ ...axiosParams, ...requestParams });
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!manual) {
      sendRequest();
    }
  }, [manual]);

  return [{ response, error, loading }, sendRequest];
};
