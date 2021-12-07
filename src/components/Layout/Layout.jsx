import { useContext } from 'react';
import { createPortal } from 'react-dom';

import Container from 'react-bootstrap/Container';

import { NotificationContext } from '../../context';
import { Notification } from '../UI/Notification';
import { TopBar } from './';

export const Layout = ({ children }) => {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      <TopBar />
      <Container as="main" className="mt-3">
        {children}
      </Container>
      {notification &&
        createPortal(
          <Notification
            type={notification.type}
            title={notification.title}
            message={notification.message}
          />,
          document.getElementById('notification')
        )}
    </>
  );
};
