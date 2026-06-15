'use client';

import { memo } from 'react';
import { SafeImage } from '@/components/safe-image';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import type { CatalogProduct } from '@/lib/catalog';

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

type ProductCardProps = {
  product: CatalogProduct | { name: string; desc: string; image: string; price: string; badge?: string };
  index?: number;
  animate?: boolean;
  compact?: boolean;
};

export const ProductCard = memo(function ProductCard({
  product,
  index = 0,
  animate = true,
  compact = false,
}: ProductCardProps) {
  const badge = 'badge' in product ? product.badge : undefined;

  const card = (
    <article className="product-card gpu-layer group relative flex flex-col border border-gray-200 bg-white h-full">
      <div className="product-card__border-glow" aria-hidden="true" />
      <div className="product-card__image-wrap relative">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          loading="lazy"
          sizes={compact ? '(max-width: 640px) 45vw, 280px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          className="product-card__image object-cover"
          referrerPolicy="no-referrer"
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-[#DFFF00] text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1">
            {badge}
          </div>
        )}
      </div>
      <div className={`flex flex-col flex-1 bg-white ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className={`font-display font-black uppercase tracking-tight leading-tight text-left ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>
            {product.name}
          </h4>
          <span className="font-bold whitespace-nowrap text-sm shrink-0">{product.price}</span>
        </div>
        {!compact && (
          <p className="text-xs sm:text-sm text-gray-500 font-medium mb-5 leading-relaxed text-left line-clamp-3">
            {product.desc}
          </p>
        )}
        <div className="mt-auto">
          <button
            type="button"
            className="btn-premium touch-target w-full relative overflow-hidden bg-black text-white font-black text-[10px] sm:text-xs uppercase tracking-widest py-3.5 sm:py-4 border-2 border-black hover:text-black"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Add to Cart
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            <span className="btn-premium__fill" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );

  if (!animate) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: PREMIUM_EASE }}
      className="h-full"
      style={{ willChange: 'transform, opacity' }}
    >
      {card}
    </motion.div>
  );
});
