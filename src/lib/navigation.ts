import type { Page } from '@/src/types';

export const pagePaths: Record<Page, string> = {
  home: '/',
  experience: '/experience',
  rooms: '/rooms',
  availability: '/availability',
  gallery: '/gallery',
  location: '/location',
};

export function getPageFromPath(pathname: string): Page {
  const match = Object.entries(pagePaths).find(([, path]) => path === pathname);
  return (match?.[0] as Page | undefined) ?? 'home';
}
