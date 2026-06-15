'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import {
  getAllCategoryProducts,
  getCategoryMeta,
  type CategoryId,
} from '@/lib/catalog';

type CategoryViewProps = {
  categoryId: CategoryId;
  onBack: () => void;
};

export function CategoryView({ categoryId, onBack }: CategoryViewProps) {
  const meta = getCategoryMeta(categoryId);
  const allProducts = useMemo(() => getAllCategoryProducts(categoryId), [categoryId]);
  const [activeSub, setActiveSub] = useState<string>('all');

  const filtered =
    activeSub === 'all'
      ? allProducts
      : allProducts.filter((p) => p.subcategory === activeSub);

  return (
    <div className="w-full">
      <div className="bg-black text-white section-x py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={onBack}
            className="touch-target text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#DFFF00] mb-6"
          >
            ← Back to Home
          </button>
          <span className="inline-block bg-[#DFFF00] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
            {meta.label}
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter mb-4">
            {meta.headline}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            {meta.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-x py-10 sm:py-14">
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-6 border-b-2 border-black">
          <button
            type="button"
            onClick={() => setActiveSub('all')}
            className={`filter-pill touch-target px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 ${
              activeSub === 'all'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-black hover:bg-[#DFFF00]'
            }`}
          >
            All ({allProducts.length})
          </button>
          {meta.subcategories.map((sub) => {
            const count = allProducts.filter((p) => p.subcategory === sub.id).length;
            if (count === 0) return null;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSub(sub.id)}
                className={`filter-pill touch-target px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 ${
                  activeSub === sub.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-[#DFFF00]'
                }`}
              >
                {sub.label} ({count})
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div className="catalog-grid">
            {filtered.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-gray-200">
            <p className="font-display font-black text-xl uppercase tracking-tight text-gray-400">
              No products in this filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
