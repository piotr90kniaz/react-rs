import { createContext, useCallback, useEffect, useState } from 'react';

const initialValue = {
  notification: null,
  setNotification: ({ type, title, message }) => {},
  hideNotification: () => {},
};

export const NotificationContext = createContext(initialValue);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotification();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideNotification, notification]);

  return (
    <NotificationContext.Provider
      value={{ notification, setNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
