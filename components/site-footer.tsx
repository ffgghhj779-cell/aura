'use client';

import { Instagram, Twitter } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { NAV_CATEGORIES, PAYMENT_METHODS, type CategoryId, type InfoPageId } from '@/lib/catalog';

type SiteFooterProps = {
  onNavigateCategory: (id: CategoryId) => void;
  onNavigateInfo: (id: InfoPageId) => void;
  onNavigateQuiz: () => void;
};

export function SiteFooter({ onNavigateCategory, onNavigateInfo, onNavigateQuiz }: SiteFooterProps) {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white section-y section-x mt-auto border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col">
            <BrandLogo variant="footer" />
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 max-w-sm">
              Elevating the physical and mental state of the Saudi athlete with curated premium gear tailored to your exact frequency.
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="touch-target w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] text-gray-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="touch-target w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] text-gray-400"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3 block">Payment Methods</span>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 border border-gray-800 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs uppercase tracking-widest font-bold">
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 font-black">Shop</span>
              {NAV_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigateCategory(cat.id)}
                  className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1"
                >
                  {cat.label}
                </button>
              ))}
              <button type="button" onClick={onNavigateQuiz} className="text-left text-[#DFFF00] touch-target py-1">
                Mood Quiz
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 font-black">Customer Service</span>
              <button type="button" onClick={() => onNavigateInfo('shipping')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Shipping</button>
              <button type="button" onClick={() => onNavigateInfo('returns')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Returns</button>
              <button type="button" onClick={() => onNavigateInfo('faq')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">FAQ</button>
              <button type="button" onClick={() => onNavigateInfo('contact')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Contact</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 font-black">About</span>
              <button type="button" onClick={() => onNavigateInfo('about')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">About Us</button>
              <button type="button" onClick={() => onNavigateInfo('careers')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Careers</button>
              <button type="button" onClick={() => onNavigateInfo('privacy')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Privacy</button>
              <button type="button" onClick={() => onNavigateInfo('terms')} className="text-left text-gray-300 hover:text-[#DFFF00] touch-target py-1">Terms</button>
            </div>
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="text-gray-600 font-black">Newsletter</span>
              <p className="text-gray-500 normal-case tracking-normal font-medium text-[11px] leading-relaxed mb-1">
                Exclusive drops, mood tips, and early access for Saudi athletes.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="touch-target bg-white/5 border border-gray-800 px-4 py-3 outline-none focus:border-[#DFFF00] w-full text-white placeholder-gray-600 font-sans normal-case tracking-normal text-sm"
                />
                <button type="button" className="btn-premium touch-target bg-[#DFFF00] text-black px-6 py-3 font-black hover:bg-white w-full text-xs tracking-widest">
                  Join the Aura
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Motivation Aura. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <button type="button" onClick={() => onNavigateInfo('privacy')} className="hover:text-white touch-target py-1">Privacy Policy</button>
            <button type="button" onClick={() => onNavigateInfo('terms')} className="hover:text-white touch-target py-1">Terms of Service</button>
            <button type="button" onClick={() => onNavigateInfo('shipping')} className="hover:text-white touch-target py-1">Shipping Info</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
