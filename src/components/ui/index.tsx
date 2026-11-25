import { Minus, Plus } from 'lucide-react';

import type { IconComponent } from '@/src/types';

export function Counter({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-xl border border-sea/15 bg-cream p-3">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <div className="mt-2 flex items-center justify-between">
        <button type="button" className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink shadow-sm disabled:opacity-35" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label} azalt`}>
          <Minus className="h-4 w-4" />
        </button>
        <strong className="font-serif text-2xl">{value}</strong>
        <button type="button" className="grid h-8 w-8 place-items-center rounded-full bg-white text-ink shadow-sm disabled:opacity-35" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} artır`}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-h-16 items-center gap-2 rounded-2xl bg-cream px-3">
      <strong className="font-serif text-3xl text-sea">{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/18 bg-white/12 px-4 py-4 backdrop-blur-xl">
      <strong className="block font-serif text-3xl text-sky">{value}</strong>
      <span className="mt-1 block text-sm font-semibold text-white/78">{label}</span>
    </div>
  );
}

export function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-surface px-3 py-4">
      <strong className="block font-serif text-2xl text-sea">{value}</strong>
      <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

export function RoomFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-b-0 last:pb-0">
      <dt className="font-semibold text-muted">{label}</dt>
      <dd className="text-right font-bold text-ink">{value}</dd>
    </div>
  );
}

export function Badge({ icon: Icon, text }: { icon: IconComponent; text: string }) {
  return (
    <span className="inline-flex min-h-12 items-center gap-3 rounded-full border border-sea/10 bg-white px-4 text-sm font-semibold text-ink shadow-sm">
      <Icon className="h-4 w-4 text-aqua" />
      {text}
    </span>
  );
}

export function InfoPill({ icon: Icon, text }: { icon: IconComponent; text: string }) {
  return (
    <span className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-3 font-semibold">
      <Icon className="h-4 w-4 text-aqua" />
      {text}
    </span>
  );
}

export function ContactLink({ icon: Icon, label, href }: { icon: IconComponent; label: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-4 font-semibold text-ink transition-colors hover:bg-sky">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-aqua">
        <Icon className="h-4 w-4" />
      </span>
      <span>{label}</span>
    </a>
  );
}

export function InfoPanel({ icon: Icon, title, subtitle }: { icon: IconComponent; title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl bg-cream p-5">
      <Icon className="mb-5 h-6 w-6 text-aqua" />
      <strong className="block font-serif text-2xl text-ink">{title}</strong>
      <span className="mt-1 block text-sm text-muted">{subtitle}</span>
    </div>
  );
}

export function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.25rem] bg-white p-5 shadow-sm">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-muted">
            <span className="h-2 w-2 rounded-full bg-aqua" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
