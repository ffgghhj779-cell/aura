'use client';

import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
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
    <header className="site-header sticky top-0 z-50 w-full bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto section-x">
        <div className="flex items-center justify-between min-h-[4.5rem] gap-4">
          <button
            type="button"
            onClick={() => { setMobileOpen(false); onNavigateHome(); }}
            className="flex items-center gap-3 shrink-0 text-left touch-target"
            aria-label="Motivation Aura home"
          >
            <svg className="w-8 h-8 text-[#DFFF00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="6" r="3" />
              <path d="M12 9v4" />
              <path d="M9 13l3 3 3-3" />
              <path d="M7 17l4-2 4 2" />
              <path d="M5 21h14" />
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-black text-xl lg:text-2xl tracking-tighter uppercase leading-none">
                Motivation Aura
              </span>
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase leading-none mt-1">
                Mental Coach For The Saudi Athlete
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main categories">
            {NAV_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategory(cat.id)}
                className="nav-link touch-target px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-[#DFFF00]"
              >
                {cat.label}
              </button>
            ))}
            <span className="w-px h-5 bg-white/15 mx-1" aria-hidden="true" />
            <button
              type="button"
              onClick={() => { setMobileOpen(false); onNavigateQuiz(); }}
              className="nav-link touch-target px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-black uppercase tracking-[0.15em] text-[#DFFF00]"
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
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#DFFF00] text-black text-[10px] font-black rounded-full flex items-center justify-center">
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
                className="touch-target text-left px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-200 hover:text-[#DFFF00] border-b border-white/5"
              >
                {cat.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); onNavigateQuiz(); }}
              className="touch-target text-left px-4 py-3 text-sm font-black uppercase tracking-widest text-[#DFFF00]"
            >
              Mood Quiz
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
