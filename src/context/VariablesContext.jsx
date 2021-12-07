import { createContext, useEffect, useState } from 'react';

import { useAxios } from '../hooks';

const initialValue = {
  variables: [],
  setVariables: (variables) => {},
  selectedVariables: [],
  setSelectedVariables: (variables) => {},
  fetchVariables: (params = {}) => {
    return { response: '', error: '', loading: false };
  },
};

export const VariablesContext = createContext(initialValue);

export const VariablesProvider = ({ children }) => {
  const [variables, setVariables] = useState([]);
  const [selectedVariables, setSelectedVariables] = useState([]);

  const [{ response }, fetchVariables] = useAxios(
    {
      method: 'GET',
      url: '/variables.json',
    },
    { manual: false }
  );

  useEffect(() => {
    if (response) {
      setVariables(response);
    }
  }, [response]);

  return (
    <VariablesContext.Provider
      value={{
        variables,
        selectedVariables,
        setVariables,
        setSelectedVariables,
        fetchVariables,
      }}
    >
      {children}
    </VariablesContext.Provider>
  );
};
