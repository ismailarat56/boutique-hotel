import { unavailableDates } from '@/src/data/hotel';

export function getAvailability(roomSlug: string, checkIn: string, nights: number) {
  const stayDates = getStayDates(checkIn, nights);
  const blockedDates = new Set(unavailableDates[roomSlug] ?? []);
  const conflicts = stayDates.filter((date) => blockedDates.has(date));

  return {
    available: conflicts.length === 0,
    conflicts,
  };
}

export function getStayDates(checkIn: string, nights: number) {
  return Array.from({ length: nights }, (_, index) => addDaysIso(checkIn, index));
}

export function addDaysIso(date: string, days: number) {
  const value = parseIsoDate(date);
  value.setDate(value.getDate() + days);
  return toIsoDate(value);
}

export function addMonthsIso(date: string, months: number) {
  const value = parseIsoDate(date);
  value.setDate(1);
  value.setMonth(value.getMonth() + months);
  return toIsoDate(value);
}

export function getMonthStartIso(date: string) {
  const value = parseIsoDate(date);
  value.setDate(1);
  return toIsoDate(value);
}

export function getCalendarMonthDays(monthIso: string) {
  const monthStart = parseIsoDate(getMonthStartIso(monthIso));
  const calendarStart = new Date(monthStart);
  const mondayOffset = (monthStart.getDay() + 6) % 7;

  calendarStart.setDate(monthStart.getDate() - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const value = new Date(calendarStart);
    value.setDate(calendarStart.getDate() + index);
    return toIsoDate(value);
  });
}

export function isBeforeIso(date: string, compareTo: string) {
  return date < compareTo;
}

export function isSameMonthIso(date: string, monthIso: string) {
  return date.slice(0, 7) === monthIso.slice(0, 7);
}

export function formatMonthTitle(date: string) {
  return new Intl.DateTimeFormat('tr-TR', { month: 'long', year: 'numeric' }).format(parseIsoDate(date));
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long' }).format(parseIsoDate(date));
}

function parseIsoDate(date: string) {
  return new Date(`${date}T12:00:00`);
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  return `${year}-${month}-${day}`;
}
