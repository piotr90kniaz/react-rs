import { useContext } from 'react';

import Alert from 'react-bootstrap/Alert';

import { NotificationContext } from '../../../context';
import styles from './Notification.module.scss';

export const Notification = ({ type, title, message }) => {
  const { hideNotification } = useContext(NotificationContext);
  return (
    <Alert
      variant={type}
      onClose={hideNotification}
      dismissible
      className={styles.notification}
    >
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
