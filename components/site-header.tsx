'use client';

import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { NAV_CATEGORIES, type CategoryId } from '@/lib/catalog';

type SiteHeaderProps = {
  onNavigateHome: () => void;
  onNavigateCategory: (id: CategoryId) => void;
  onNavigateQuiz: () => void;
  cartCount?: number;
};

export function SiteHeader({
  onNavigateHome,
  onNavigateCategory,
  onNavigateQuiz,
  cartCount = 0,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCategory = (id: CategoryId) => {
    setMobileOpen(false);
    onNavigateCategory(id);
  };

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-black text-white">
      <div className="max-w-7xl mx-auto section-x">
        <div className="flex items-center justify-between min-h-[5.75rem] sm:min-h-[6.75rem] lg:min-h-[7.25rem] gap-3 sm:gap-4 py-2.5 sm:py-3">
          <button
            type="button"
            onClick={() => { setMobileOpen(false); onNavigateHome(); }}
            className="flex items-center shrink-0 text-left touch-target py-0.5 pr-1 sm:pr-2"
            aria-label="Motivation Aura home"
          >
            <BrandLogo variant="header" priority />
          </button>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main categories">
            {NAV_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategory(cat.id)}
                className="nav-link touch-target px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-accent-gold"
              >
                {cat.label}
              </button>
            ))}
            <span className="w-px h-5 bg-white/15 mx-1" aria-hidden="true" />
            <button
              type="button"
              onClick={() => { setMobileOpen(false); onNavigateQuiz(); }}
              className="nav-link touch-target px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-black uppercase tracking-[0.15em] text-accent-gold"
            >
              Mood Quiz
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label={`Shopping cart${cartCount ? `, ${cartCount} items` : ''}`}
              className="touch-target relative flex items-center justify-center p-2"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent-gold text-black text-[10px] font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden touch-target flex items-center justify-center p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-black section-x py-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {NAV_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategory(cat.id)}
                className="touch-target text-left px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-200 hover:text-accent-gold border-b border-white/5"
              >
                {cat.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); onNavigateQuiz(); }}
              className="touch-target text-left px-4 py-3 text-sm font-black uppercase tracking-widest text-accent-gold"
            >
              Mood Quiz
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
