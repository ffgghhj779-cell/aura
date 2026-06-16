'use client';

import { SafeImage } from '@/components/safe-image';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import {
  FEATURED_COLLECTIONS,
  NEW_ARRIVALS,
  TRENDING_PRODUCTS,
  TRUST_BRANDS,
  type CategoryId,
  type CatalogProduct,
} from '@/lib/catalog';

type HomeSectionsProps = {
  onNavigateCategory: (id: CategoryId) => void;
  onScrollToQuiz: () => void;
};

function ProductRow({
  title,
  subtitle,
  products,
  id,
}: {
  title: string;
  subtitle: string;
  products: CatalogProduct[];
  id: string;
}) {
  return (
    <section id={id} className="w-full section-y section-x scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10 border-b-2 border-black pb-4">
          <div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-2 block">
              {subtitle}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter">
              {title}
            </h2>
          </div>
        </div>
        <div className="catalog-grid">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSections({ onNavigateCategory, onScrollToQuiz }: HomeSectionsProps) {
  return (
    <>
      <div className="w-full marquee-premium py-5 sm:py-6 overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((track) => (
            <div key={track} className="marquee-group">
              {TRUST_BRANDS.map((brand) => (
                <span key={`${track}-${brand}`} className="inline-flex items-center gap-12">
                  <span className="marquee-premium__text font-display font-black text-lg sm:text-2xl uppercase whitespace-nowrap">
                    {brand}
                  </span>
                  <span className="marquee-premium__dot w-1 h-1 rounded-full shrink-0" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ProductRow
        id="trending"
        title="Trending Now"
        subtitle="Most Loved This Week"
        products={TRENDING_PRODUCTS}
      />

      <ProductRow
        id="new-arrivals"
        title="New Arrivals"
        subtitle="Just Dropped"
        products={NEW_ARRIVALS}
      />

      <section id="collections" className="w-full bg-black text-white section-y section-x scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-accent-gold mb-3 block">
              Curated Edits
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tighter">
              Featured Collections
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 stack-gap">
            {FEATURED_COLLECTIONS.map((col) => (
              <button
                key={col.id}
                type="button"
                onClick={() => onNavigateCategory(col.id)}
                className="collection-card gpu-layer group relative aspect-[4/5] overflow-hidden border border-white/10 text-left touch-target"
              >
                <SafeImage
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold mb-2">
                    {col.productCount} Products
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight mb-2">
                    {col.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium mb-4">{col.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-accent-gold transition-colors">
                    Shop Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="aura-quiz" className="w-full border-t-2 border-black scroll-mt-24">
        <div className="max-w-6xl mx-auto section-x py-8 text-center">
          <button
            type="button"
            onClick={onScrollToQuiz}
            className="btn-premium touch-target inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-black uppercase text-sm tracking-widest border border-accent-gold hover:bg-accent-gold hover:text-black transition-colors"
          >
            Take the Mood Quiz
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
