
import { formatDistanceToNow as formatDistance, format } from 'date-fns';

export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'MMM d, yyyy');
  } catch (error) {
    return 'Invalid date';
  }
};

export const formatDistanceToNow = (dateString: string): string => {
  try {
    return formatDistance(new Date(dateString), { addSuffix: true });
  } catch (error) {
    return 'Unknown time';
  }
};

export const daysRemaining = (dateString: string): number => {
  try {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  } catch (error) {
    return 0;
  }
};

export const getMonthName = (monthNumber: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthNumber - 1] || '';
};
