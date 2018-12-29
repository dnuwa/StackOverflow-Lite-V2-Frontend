import { notify } from 'react-notify-toast';

export const NotificationSuccess = message => notify.show(message, 'success', 5000);
export const NotificationFailure = message => notify.show(message, 'error', 5000);
