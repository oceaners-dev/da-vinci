import React, { useCallback } from 'react';
import { Alert } from '../alert/Alert';
import { ToastProps } from './Provider';
import { NotificationIcons } from './svg';

export function NotificationCard({
  data,
  id,
}: {
  data: ToastProps;
  id: string;
}) {
  const closeNotification = useCallback(() => {
    return document.querySelector('[data-id="' + id + '"]')?.remove();
  }, []);

  return (
    <Alert
      content={data.content}
      title={data.title}
      className={data.className}
      icon={data.icon ? data.icon : NotificationIcons[data.type]}
      onClose={closeNotification}
      withCloseButton={true}
      color={
        data.type === 'success'
          ? '#4BB543'
          : data.type === 'error'
          ? '#DC2626'
          : data.type === 'warning'
          ? '#FFCC00'
          : '#0284c7'
      }
    />
  );
}
