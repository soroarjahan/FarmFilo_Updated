
import { formatDistance, format, differenceInDays, parseISO, isValid } from 'date-fns';

export function formatDistanceToNow(date: Date): string {
  try {
    return formatDistance(date, new Date(), { addSuffix: false });
  } catch (error) {
    console.error('Error formatting date', error);
    return '';
  }
}

export function formatDate(dateString: string, formatStr: string = 'MMM d, yyyy'): string {
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
    if (!isValid(date)) {
      return 'Invalid date';
    }
    return format(date, formatStr);
  } catch (error) {
    console.error('Error formatting date', error);
    return 'Invalid date';
  }
}

export function getRemainingDays(dateString: string): number {
  try {
    const targetDate = parseISO(dateString);
    if (!isValid(targetDate)) {
      return 0;
    }
    const today = new Date();
    const diff = differenceInDays(targetDate, today);
    return diff > 0 ? diff : 0;
  } catch (error) {
    console.error('Error calculating remaining days', error);
    return 0;
  }
}

export function isDatePast(dateString: string): boolean {
  try {
    const targetDate = parseISO(dateString);
    if (!isValid(targetDate)) {
      return false;
    }
    return targetDate < new Date();
  } catch (error) {
    console.error('Error checking if date is past', error);
    return false;
  }
}
