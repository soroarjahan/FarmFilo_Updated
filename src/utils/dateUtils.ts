
import { formatDistance } from 'date-fns';

export function formatDistanceToNow(date: Date): string {
  try {
    return formatDistance(date, new Date(), { addSuffix: false });
  } catch (error) {
    console.error('Error formatting date', error);
    return '';
  }
}
