import { ArrowRight } from 'lucide-react';

import type { NavigateToPage, Page } from '@/src/types';

export function PageCta({
  title,
  copy,
  primaryLabel,
  primaryPage,
  secondaryLabel,
  secondaryPage,
  onNavigate,
}: {
  title: string;
  copy: string;
  primaryLabel: string;
  primaryPage: Page;
  secondaryLabel: string;
  secondaryPage: Page;
  onNavigate: NavigateToPage;
}) {
  return (
    <section className="bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 leading-7 text-white/68">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => onNavigate(primaryPage)} className="btn-primary justify-center bg-sky text-ink hover:bg-white">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onNavigate(secondaryPage)} className="btn-outline justify-center border-white/30 text-white hover:bg-white hover:text-ink">
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
