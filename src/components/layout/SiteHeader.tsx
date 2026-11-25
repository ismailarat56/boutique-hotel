import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

import { navItems } from '@/src/data/hotel';
import type { NavigateToPage, Page } from '@/src/types';

const headerNavItems = navItems.filter((item) => item.page !== 'availability');

export function SiteHeader({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  activePage,
  onNavigate,
}: {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  activePage: Page;
  onNavigate: NavigateToPage;
}) {
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white text-ink transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_14px_40px_rgba(11,41,49,.1)]' : 'shadow-none'
        }`}
      >
        {activePage === 'home' && (
          <div className="bg-ink px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[.18em] text-white sm:text-xs">
            Direkt rezervasyonda kahvaltı ve concierge planlama dahildir
          </div>
        )}
        <div className="border-b border-ink/10">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
            <button type="button" onClick={() => onNavigate('home')} className="flex min-w-0 items-center gap-3 text-left text-ink" aria-label="Iresine Hotel ana sayfa">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-ink bg-ink font-serif text-lg font-bold text-white">IH</span>
              <span>
                <span className="block font-serif text-2xl leading-none tracking-normal">Iresine Hotel</span>
                <span className="mt-1 block text-[11px] font-bold uppercase tracking-[.28em] text-muted">Alaçatı Boutique</span>
              </span>
            </button>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
              {headerNavItems.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => onNavigate(item.page)}
                  className={`relative py-3 text-xs font-extrabold uppercase tracking-[.16em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-aqua after:transition-transform hover:text-aqua hover:after:scale-x-100 ${
                    activePage === item.page
                      ? 'text-aqua after:scale-x-100'
                      : 'text-ink'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <button type="button" onClick={() => onNavigate('availability')} className="min-h-11 bg-ink px-5 text-xs font-extrabold uppercase tracking-[.16em] text-white transition-colors hover:bg-aqua">
                Müsaitlik
              </button>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-ink/15 text-ink lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menüyü aç"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-white px-5 py-5">
            <div className="flex items-center justify-between border-b border-ink/10 pb-5">
              <span>
                <span className="block font-serif text-2xl text-ink">Iresine Hotel</span>
                <span className="mt-1 block text-[11px] font-bold uppercase tracking-[.28em] text-muted">Alaçatı Boutique</span>
              </span>
              <button type="button" className="grid h-11 w-11 place-items-center border border-ink/15 bg-white text-ink" onClick={() => setMobileMenuOpen(false)} aria-label="Menüyü kapat">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 grid border-t border-ink/10" aria-label="Mobil menü">
              {headerNavItems.map((item) => (
                <button key={item.page} type="button" onClick={() => onNavigate(item.page)} className="flex items-center justify-between border-b border-ink/10 py-5 text-left text-sm font-extrabold uppercase tracking-[.16em] text-ink">
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-aqua" />
                </button>
              ))}
            </nav>
            <div className="fixed inset-x-5 bottom-5">
              <button type="button" onClick={() => onNavigate('availability')} className="btn-primary w-full justify-center bg-aqua text-white">
                Müsaitlik
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
