'use client';

import { INFO_PAGES, type InfoPageId } from '@/lib/catalog';

type InfoPageViewProps = {
  pageId: InfoPageId;
  onBack: () => void;
};

export function InfoPageView({ pageId, onBack }: InfoPageViewProps) {
  const page = INFO_PAGES[pageId];

  return (
    <div className="w-full">
      <div className="bg-black text-white section-x py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            onClick={onBack}
            className="touch-target text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#DFFF00] mb-6"
          >
            ← Back to Home
          </button>
          <span className="inline-block bg-[#DFFF00] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
            {page.title}
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tighter">
            {page.headline}
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto section-x py-12 sm:py-16">
        <div className="flex flex-col gap-6">
          {page.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
