import type { ComponentType } from 'react';

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  size: string;
  guests: string;
  bed: string;
  bath: string;
  price: string;
  accent: string;
  hero: string;
  gallery: string[];
  description: string;
  longDescription: string;
  highlights: string[];
  amenities: string[];
};

export type Page = 'home' | 'experience' | 'rooms' | 'availability' | 'gallery' | 'location';

export type NavigateToPage = (page: Page) => void;

export type IconComponent = ComponentType<{ className?: string }>;
