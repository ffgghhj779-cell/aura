'use client';

import { memo, useCallback, useRef, useState } from 'react';
import { BrandLogo } from '@/components/brand-logo';
import { SafeImage } from '@/components/safe-image';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, BatteryCharging, Focus, Waves, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HomeSections } from '@/components/home-sections';
import { CategoryView } from '@/components/category-view';
import { InfoPageView } from '@/components/info-page-view';
import { ProductCard } from '@/components/product-card';
import type { CategoryId, InfoPageId } from '@/lib/catalog';
import { IMAGES } from '@/lib/images';

type MoodId = 'tense' | 'energetic' | 'steady' | 'tired';

type Product = {
  name: string;
  desc: string;
  image: string;
  price: string;
};

type MoodResult = {
  phrase: string;
  products: Product[];
};

type AppView =
  | { type: 'home' }
  | { type: 'category'; id: CategoryId }
  | { type: 'info'; id: InfoPageId };

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;
const ONBOARDING_TRANSITION = { duration: 0.5, ease: PREMIUM_EASE };
const RESULT_TRANSITION = { duration: 0.6, ease: PREMIUM_EASE };

const MOODS: { id: MoodId; title: string; subtitle: string; icon: React.ReactNode }[] = [
  { id: 'tense', title: 'Tense', subtitle: 'I need calm and grounding', icon: <Waves className="w-8 h-8" /> },
  { id: 'energetic', title: 'Energetic', subtitle: 'I want to channel this power', icon: <Activity className="w-8 h-8" /> },
  { id: 'steady', title: 'Steady', subtitle: 'I need focus and discipline', icon: <Focus className="w-8 h-8" /> },
  { id: 'tired', title: 'Tired', subtitle: 'I need recovery and renewal', icon: <BatteryCharging className="w-8 h-8" /> },
];

const AURA_PILLARS = [
  { title: 'Mind First', body: 'Your mental state drives every rep. Motivation Aura reads your frequency before recommending a single piece of gear.' },
  { title: 'Built for KSA', body: 'Curated for Saudi athletes — climate-aware fabrics, regional sizing, and brands trusted across the Kingdom.' },
  { title: 'Elite Curation', body: 'No endless scrolling. Three precision picks per mood, hand-selected from the world\'s most premium performance labels.' },
];

const PRODUCT_ENGINE: Record<MoodId, MoodResult> = {
  tense: {
    phrase: "To ground your energy\nand restore inner balance.",
    products: [
      { name: 'Nike Pro Dri-FIT Crew Socks (3-Pack)', desc: 'Anatomical compression and strategic cushioning anchor every rep — engineered for athletes who need calm, grounded stability under pressure.', image: IMAGES.socks, price: 'SAR 89' },
      { name: 'Lululemon Align™ High-Rise Legging 25"', desc: 'Buttery-soft Nulu™ fabric with a weightless second-skin feel — the gold standard for restorative movement and deep recovery sessions.', image: IMAGES.leggingsFabric, price: 'SAR 450' },
      { name: 'BSN Syntha-6 Protein Powder — 2.27kg', desc: 'Ultra-premium multi-source protein matrix with 22g per serving — rebuild depleted muscle and restore balance after high-stress training blocks.', image: IMAGES.proteinBSN, price: 'SAR 299' },
    ],
  },
  energetic: {
    phrase: "To fuel your fire\nwithout burnout.",
    products: [
      { name: 'Adidas Ultraboost Light — Running Shoe', desc: 'Maximum energy return for your explosive runs — Lightstrike+ cushioning and a Continental™ rubber outsole built for Saudi heat and long pavement sessions.', image: IMAGES.shoesUltraboost, price: 'SAR 750' },
      { name: 'Gymshark Vital Seamless 2.0 Leggings', desc: 'Engineered for maximum breathability, four-way stretch, and sculpted support — the uniform for athletes who train with relentless intensity.', image: IMAGES.leggingsFabric, price: 'SAR 280' },
      { name: 'Optimum Nutrition Gold Standard Whey — 2.27kg', desc: '24g of pure whey isolate per scoop for rapid post-session recovery — the world\'s best-selling protein, trusted by elite performers globally.', image: IMAGES.proteinGold, price: 'SAR 350' },
    ],
  },
  steady: {
    phrase: "To sustain your discipline\nwith quiet strength.",
    products: [
      { name: 'SKDK Performance Training Set', desc: 'Durable, moisture-wicking construction built for brutal daily consistency — the reliable uniform for athletes who show up regardless of mood.', image: IMAGES.gymEmpty, price: 'SAR 180' },
      { name: 'Bells of Steel Resistance Band Set', desc: 'Five progressive resistance levels mapped to your strength evolution — portable, gym-grade tension for disciplined home and travel training.', image: IMAGES.resistanceBands, price: 'SAR 120' },
      { name: 'MyProtein Micellar Casein — 1kg', desc: 'Slow-release protein formula delivering amino acids over 7 hours — fuel overnight muscle repair for athletes committed to the long game.', image: IMAGES.proteinCasein, price: 'SAR 220' },
    ],
  },
  tired: {
    phrase: "To honor rest as part\nof your performance.",
    products: [
      { name: 'Nike Victori One Recovery Slides', desc: 'Cloud-like foam cushioning with a contoured footbed — immediate post-game comfort that lets your body reset between sessions.', image: IMAGES.slides, price: 'SAR 199' },
      { name: 'Reebok Premium Yoga Mat — 6mm', desc: 'Extra-thick, non-slip cushioning with a textured grip surface — supports deep stretching, mobility work, and intentional rest days.', image: IMAGES.yogaMat, price: 'SAR 150' },
      { name: 'TNH Sleep Support Blend — 60 Capsules', desc: 'Restorative deep-night formula with magnesium and adaptogens — engineered for central nervous system reset and true athletic recovery.', image: IMAGES.capsules, price: 'SAR 185' },
    ],
  },
};

const MoodResults = memo(function MoodResults({
  result,
  onReset,
}: {
  result: MoodResult;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={RESULT_TRANSITION}
      className="w-full gpu-layer"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="bg-black text-white section-x section-y w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block bg-[#DFFF00] text-black px-4 py-1 font-bold text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-8">
            Your Rx
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-[1.05] whitespace-pre-line max-w-4xl mx-auto">
            {result.phrase}
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto section-x py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 sm:mb-12 border-b-2 border-black pb-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
            Recommended Equipment
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Curated for your mood
          </span>
        </div>
        <div className="product-stack">
          {result.products.map((product, idx) => (
            <ProductCard
              key={product.name}
              product={{ ...product, badge: idx === 0 ? 'Top Pick' : undefined }}
              index={idx}
            />
          ))}
        </div>
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            type="button"
            onClick={onReset}
            className="btn-premium touch-target group relative flex items-center gap-3 bg-black text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase text-sm tracking-widest border-2 border-black hover:bg-[#DFFF00] hover:text-black"
          >
            <svg className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Retake Quiz
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default function AppPage() {
  const [view, setView] = useState<AppView>({ type: 'home' });
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = useCallback(() => {
    setView({ type: 'home' });
    setSelectedMood(null);
    scrollTop();
  }, [scrollTop]);

  const goCategory = useCallback((id: CategoryId) => {
    setView({ type: 'category', id });
    setSelectedMood(null);
    scrollTop();
  }, [scrollTop]);

  const goInfo = useCallback((id: InfoPageId) => {
    setView({ type: 'info', id });
    setSelectedMood(null);
    scrollTop();
  }, [scrollTop]);

  const goQuiz = useCallback(() => {
    setView({ type: 'home' });
    setSelectedMood(null);
    scrollTop();
    requestAnimationFrame(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [scrollTop]);

  const handleReset = useCallback(() => {
    setSelectedMood(null);
    scrollTop();
  }, [scrollTop]);

  const handleMoodSelect = useCallback((moodId: MoodId) => {
    setSelectedMood(moodId);
    scrollTop();
  }, [scrollTop]);

  const currentResult = selectedMood ? PRODUCT_ENGINE[selectedMood] : null;

  return (
    <div className="min-h-screen flex flex-col bg-white retina-sharp">
      <SiteHeader
        onNavigateHome={goHome}
        onNavigateCategory={goCategory}
        onNavigateQuiz={goQuiz}
      />

      <main className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          {selectedMood && currentResult ? (
            <MoodResults key="result" result={currentResult} onReset={handleReset} />
          ) : view.type === 'category' ? (
            <motion.div key={`cat-${view.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <CategoryView categoryId={view.id} onBack={goHome} />
            </motion.div>
          ) : view.type === 'info' ? (
            <motion.div key={`info-${view.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <InfoPageView pageId={view.id} onBack={goHome} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={ONBOARDING_TRANSITION}
              className="w-full gpu-layer"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Hero */}
              <div className="relative w-full hero-min-h sm:h-[60vh] flex items-center justify-center bg-black overflow-hidden">
                <SafeImage
                  src={IMAGES.heroMaleAthlete}
                  alt="Saudi athlete training at elite performance level"
                  className="opacity-35 object-cover object-center"
                  fill
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
                  <BrandLogo variant="hero" priority />
                  <h2 className="hero-headline font-display font-black uppercase tracking-tighter mb-5 sm:mb-6 leading-[1.05]">
                    Train Your Mind.<br className="hidden sm:block" /> Elevate Your Game.
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                    The first mood-intelligent gear platform for Saudi athletes — where mental frequency meets world-class equipment.
                  </p>
                </div>
              </div>

              <HomeSections onNavigateCategory={goCategory} onScrollToQuiz={goQuiz} />

              {/* Philosophy */}
              <section id="about" className="w-full bg-black text-white section-y section-x scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12 sm:mb-16">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#DFFF00] mb-4 block">The Philosophy</span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter">Performance Starts Within</h3>
                  </div>
                  <div className="flex flex-col md:grid md:grid-cols-3 stack-gap">
                    {AURA_PILLARS.map((pillar, idx) => (
                      <div key={pillar.title} className="pillar-card border border-white/10 p-6 sm:p-8">
                        <span className="pillar-card__accent" aria-hidden="true" />
                        <span className="pillar-card__number font-display font-black text-5xl text-[#DFFF00]/20 block">0{idx + 1}</span>
                        <h4 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-3">{pillar.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">{pillar.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Stats */}
              <div className="w-full border-b-2 border-black bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10">
                  {[
                    { value: '12K+', label: 'Saudi Athletes' },
                    { value: '50+', label: 'Premium Brands' },
                    { value: '4', label: 'Mood Profiles' },
                    { value: '24/7', label: 'Expert Support' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 text-center">
                      <span className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter text-black">{stat.value}</span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiz */}
              <div ref={quizRef} id="quiz" className="max-w-6xl w-full mx-auto section-x flex flex-col items-center text-center section-y scroll-mt-24">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-6 block">Your Mental Check-In</span>
                <h1 className="quiz-headline font-display font-black leading-[0.9] uppercase tracking-tighter text-black flex flex-col">
                  <span className="block mb-2 text-gray-400">How do you</span>
                  <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-800">Feel Today?</span>
                </h1>
                <p className="mt-6 sm:mt-8 text-sm sm:text-lg font-medium text-gray-500 uppercase tracking-[0.15em] relative inline-block px-4">
                  Select your mental state
                  <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#DFFF00]" />
                </p>
                <div className="mood-stack mt-12 sm:mt-20">
                  {MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => handleMoodSelect(mood.id)}
                      className="mood-btn gpu-layer group relative flex items-center p-5 sm:p-6 lg:p-8 border-2 border-black bg-white text-left w-full"
                    >
                      <span className="mood-btn__yellow" aria-hidden="true" />
                      <span className="mood-btn__dark" aria-hidden="true" />
                      <div className="mood-btn__content flex w-full items-center gap-4 sm:gap-6 group-hover:text-white group-focus-visible:text-white">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 group-hover:bg-white group-focus-visible:bg-white text-black flex items-center justify-center shrink-0">
                          {mood.icon}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <span className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight block">I&apos;m {mood.title}</span>
                          <p className="text-gray-500 group-hover:text-white/80 group-focus-visible:text-white/80 font-semibold uppercase tracking-wider text-xs mt-1">
                            — {mood.subtitle}
                          </p>
                        </div>
                        <div className="mood-btn__arrow w-12 h-12 flex items-center justify-center shrink-0">
                          <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <SiteFooter
        onNavigateCategory={goCategory}
        onNavigateInfo={goInfo}
        onNavigateQuiz={goQuiz}
      />
    </div>
  );
}
