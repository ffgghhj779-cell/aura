'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, BatteryCharging, Focus, Waves, ShoppingBag, ArrowRight } from 'lucide-react';

type MoodId = 'tense' | 'energetic' | 'steady' | 'tired';

const SSS_YELLOW = '#DFFF00'; 
const SSS_BLACK = '#000000';

const MOODS: { id: MoodId; title: string; subtitle: string; icon: React.ReactNode }[] = [
  { 
    id: 'tense', 
    title: 'Tense', 
    subtitle: 'I need calm and grounding',
    icon: <Waves className="w-8 h-8" />
  },
  { 
    id: 'energetic', 
    title: 'Energetic', 
    subtitle: 'I want to channel this power',
    icon: <Activity className="w-8 h-8" />
  },
  { 
    id: 'steady', 
    title: 'Steady', 
    subtitle: 'I need focus and discipline',
    icon: <Focus className="w-8 h-8" />
  },
  { 
    id: 'tired', 
    title: 'Tired', 
    subtitle: 'I need recovery and renewal',
    icon: <BatteryCharging className="w-8 h-8" />
  }
];

const TRUST_BRANDS = ['Nike', 'Adidas', 'Lululemon', 'Gymshark'];

const AURA_PILLARS = [
  {
    title: 'Mind First',
    body: 'Your mental state drives every rep. Motivation Aura reads your frequency before recommending a single piece of gear.',
  },
  {
    title: 'Built for KSA',
    body: 'Curated for Saudi athletes — climate-aware fabrics, regional sizing, and brands trusted across the Kingdom.',
  },
  {
    title: 'Elite Curation',
    body: 'No endless scrolling. Three precision picks per mood, hand-selected from the world\'s most premium performance labels.',
  },
];

const PRODUCT_ENGINE = {
  tense: {
    phrase: "To ground your energy\nand restore inner balance.",
    products: [
      {
        name: 'Nike Pro Dri-FIT Crew Socks (3-Pack)',
        desc: 'Anatomical compression and strategic cushioning anchor every rep — engineered for athletes who need calm, grounded stability under pressure.',
        image: 'https://images.unsplash.com/photo-1586350977774-b3b936166608?w=800&q=85',
        price: 'SAR 89',
      },
      {
        name: 'Lululemon Align™ High-Rise Legging 25"',
        desc: 'Buttery-soft Nulu™ fabric with a weightless second-skin feel — the gold standard for restorative movement and deep recovery sessions.',
        image: 'https://images.unsplash.com/photo-1506624106511-92b8ea346fa0?w=800&q=85',
        price: 'SAR 450',
      },
      {
        name: 'BSN Syntha-6 Protein Powder — 2.27kg',
        desc: 'Ultra-premium multi-source protein matrix with 22g per serving — rebuild depleted muscle and restore balance after high-stress training blocks.',
        image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&q=85',
        price: 'SAR 299',
      },
    ],
  },
  energetic: {
    phrase: "To fuel your fire\nwithout burnout.",
    products: [
      {
        name: 'Adidas Ultraboost Light — Running Shoe',
        desc: 'Maximum energy return for your explosive runs — Lightstrike+ cushioning and a Continental™ rubber outsole built for Saudi heat and long pavement sessions.',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=85',
        price: 'SAR 750',
      },
      {
        name: 'Gymshark Vital Seamless 2.0 Leggings',
        desc: 'Engineered for maximum breathability, four-way stretch, and sculpted support — the uniform for athletes who train with relentless intensity.',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=85',
        price: 'SAR 280',
      },
      {
        name: 'Optimum Nutrition Gold Standard Whey — 2.27kg',
        desc: '24g of pure whey isolate per scoop for rapid post-session recovery — the world\'s best-selling protein, trusted by elite performers globally.',
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=85',
        price: 'SAR 350',
      },
    ],
  },
  steady: {
    phrase: "To sustain your discipline\nwith quiet strength.",
    products: [
      {
        name: 'SKDK Performance Training Set',
        desc: 'Durable, moisture-wicking construction built for brutal daily consistency — the reliable uniform for athletes who show up regardless of mood.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85',
        price: 'SAR 180',
      },
      {
        name: 'Bells of Steel Resistance Band Set',
        desc: 'Five progressive resistance levels mapped to your strength evolution — portable, gym-grade tension for disciplined home and travel training.',
        image: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&q=85',
        price: 'SAR 120',
      },
      {
        name: 'MyProtein Micellar Casein — 1kg',
        desc: 'Slow-release protein formula delivering amino acids over 7 hours — fuel overnight muscle repair for athletes committed to the long game.',
        image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&q=85',
        price: 'SAR 220',
      },
    ],
  },
  tired: {
    phrase: "To honor rest as part\nof your performance.",
    products: [
      {
        name: 'Nike Victori One Recovery Slides',
        desc: 'Cloud-like foam cushioning with a contoured footbed — immediate post-game comfort that lets your body reset between sessions.',
        image: 'https://images.unsplash.com/photo-1563223770-bcfa6b4618e0?w=800&q=85',
        price: 'SAR 199',
      },
      {
        name: 'Reebok Premium Yoga Mat — 6mm',
        desc: 'Extra-thick, non-slip cushioning with a textured grip surface — supports deep stretching, mobility work, and intentional rest days.',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=85',
        price: 'SAR 150',
      },
      {
        name: 'TNH Sleep Support Blend — 60 Capsules',
        desc: 'Restorative deep-night formula with magnesium and adaptogens — engineered for central nervous system reset and true athletic recovery.',
        image: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=800&q=85',
        price: 'SAR 185',
      },
    ],
  },
};

export default function AppPage() {
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);

  const handleReset = () => {
    setSelectedMood(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentResult = selectedMood ? PRODUCT_ENGINE[selectedMood] : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Premium Athletic Navigation Bar */}
      <nav className="w-full bg-black text-white h-[72px] flex items-center justify-between px-6 lg:px-12 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-[#DFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="6" r="3" />
            <path d="M12 9v4" />
            <path d="M9 13l3 3 3-3" />
            <path d="M7 17l4-2 4 2" />
            <path d="M5 21h14" />
          </svg>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl lg:text-2xl tracking-tighter uppercase leading-none">
              Motivation Aura
            </span>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase leading-none mt-1">
              Mental Coach For The Saudi Athlete
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button type="button" aria-label="Shopping cart" className="relative group p-1">
            <ShoppingBag className="w-6 h-6 transition-all duration-300 group-hover:text-[#DFFF00] group-hover:scale-110" />
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!selectedMood && (
            <motion.div 
              key="onboarding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col items-center"
            >
              {/* Premium Hero Section */}
              <div className="relative w-full h-[55vh] sm:h-[60vh] min-h-[420px] sm:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1920&q=85"
                  alt="Saudi athlete training at elite performance level"
                  className="opacity-35 object-cover object-center scale-105"
                  fill
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                  <span className="inline-block px-4 py-1.5 mb-5 sm:mb-6 text-[10px] sm:text-xs font-black tracking-[0.25em] sm:tracking-[0.3em] text-black uppercase bg-[#DFFF00]">
                    Motivation Aura
                  </span>
                  <h2 className="hero-headline font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter mb-5 sm:mb-6 leading-[1.05]">
                    Train Your Mind.<br className="hidden sm:block" /> Elevate Your Game.
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed px-2">
                    The first mood-intelligent gear platform for Saudi athletes — where mental frequency meets world-class equipment from Nike, Adidas, Lululemon, and beyond.
                  </p>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator hidden sm:flex flex-col items-center gap-2 text-gray-500">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover</span>
                  <div className="w-px h-8 bg-gradient-to-b from-[#DFFF00] to-transparent" />
                </div>
              </div>

              {/* Brand Trust Bar */}
              <div className="w-full bg-[#DFFF00] py-5 sm:py-6 border-y-2 border-black overflow-hidden mb-0">
                <div className="marquee-track">
                  {[0, 1].map((track) => (
                    <div key={track} className="marquee-group">
                      {TRUST_BRANDS.map((brand) => (
                        <span key={`${track}-${brand}`} className="inline-flex items-center gap-12">
                          <span className="font-display font-black text-lg sm:text-2xl uppercase tracking-wider text-black whitespace-nowrap">
                            {brand}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Aura Philosophy */}
              <section className="w-full bg-black text-white py-16 sm:py-20 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12 sm:mb-16">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#DFFF00] mb-4 block">
                      The Philosophy
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter">
                      Performance Starts Within
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {AURA_PILLARS.map((pillar, idx) => (
                      <div
                        key={pillar.title}
                        className="group border border-white/10 p-6 sm:p-8 hover:border-[#DFFF00]/50 transition-colors duration-500"
                      >
                        <span className="font-display font-black text-5xl text-white/10 group-hover:text-[#DFFF00]/30 transition-colors duration-500">
                          0{idx + 1}
                        </span>
                        <h4 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-3">
                          {pillar.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                          {pillar.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Trust Stats Strip */}
              <div className="w-full border-b-2 border-black bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10">
                  {[
                    { value: '12K+', label: 'Saudi Athletes' },
                    { value: '50+', label: 'Premium Brands' },
                    { value: '4', label: 'Mood Profiles' },
                    { value: '24/7', label: 'Expert Support' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 text-center">
                      <span className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter text-black">
                        {stat.value}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-6xl w-full mx-auto px-6 lg:px-12 flex flex-col items-center text-center pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-6 block">
                  Your Mental Check-In
                </span>
                <h1 className="quiz-headline font-display font-black text-5xl md:text-8xl lg:text-[110px] leading-[0.9] uppercase tracking-tighter text-black flex flex-col">
                  <span className="block mb-2 text-gray-400">How do you</span>
                  <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-800">Feel Today?</span>
                </h1>

                <p className="mt-6 sm:mt-8 text-sm sm:text-lg font-medium text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] relative inline-block px-4">
                  Select your mental state
                  <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#DFFF00]" />
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-20">
                  {MOODS.map((mood, idx) => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setSelectedMood(mood.id)}
                      className="group relative flex items-center p-5 sm:p-6 lg:p-8 border-2 border-black bg-white text-left transition-all duration-300 hover:bg-black hover:text-white active:scale-[0.99]"
                    >
                     <div className="absolute top-0 left-0 w-full h-full bg-[#DFFF00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.22,1,0.36,1] z-0"></div>
                     <div className="relative z-10 flex w-full items-center gap-6">
                        <div className="w-16 h-16 bg-gray-100 group-hover:bg-white text-black flex items-center justify-center shrink-0 transition-colors">
                          {mood.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="font-display font-black text-3xl uppercase tracking-tight">I&apos;m {mood.title}</span>
                          </div>
                          <p className="text-gray-500 group-hover:text-black font-semibold uppercase tracking-wider text-xs">
                            — {mood.subtitle}
                          </p>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           <ArrowRight className="w-8 h-8 text-black" />
                        </div>
                     </div>
                  </button>
                ))}
              </div>
              </div>
            </motion.div>
          )}

          {selectedMood && currentResult && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Premium Hero Section */}
              <div className="bg-black text-white px-6 py-16 sm:py-24 lg:py-32 w-full">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                  <div className="inline-block bg-[#DFFF00] text-black px-4 py-1 font-bold text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-8">
                    Your Rx
                  </div>
                  <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-[1.05] whitespace-pre-line max-w-4xl mx-auto">
                    {currentResult.phrase}
                  </h2>
                </div>
              </div>

              {/* Product Shelf */}
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-20">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 sm:mb-12 border-b-2 border-black pb-4">
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                    Recommended Equipment
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Curated for your mood
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                  {currentResult.products.map((product, idx) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="product-card group flex flex-col border border-gray-200 hover:border-black bg-white"
                    >
                      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {idx === 0 && (
                          <div className="absolute top-4 left-4 bg-[#DFFF00] text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 shadow-sm">
                            Top Pick
                          </div>
                        )}
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white">
                        <div className="flex justify-between items-start gap-3 mb-3">
                          <h4 className="font-display font-black text-base sm:text-xl uppercase tracking-tight leading-tight text-left">
                            {product.name}
                          </h4>
                          <span className="font-bold whitespace-nowrap text-sm sm:text-base shrink-0">{product.price}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mb-6 leading-relaxed text-left">
                          {product.desc}
                        </p>

                        <div className="mt-auto">
                          <button
                            type="button"
                            className="btn-premium w-full relative overflow-hidden bg-black text-white font-black text-xs sm:text-sm uppercase tracking-widest py-4 border-2 border-black group/btn hover:text-black transition-colors duration-300"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/btn:scale-105">
                              Add to Cart
                              <ShoppingBag className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-[#DFFF00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 sm:mt-16 flex justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-premium group relative flex items-center gap-3 bg-black text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase text-sm tracking-widest border-2 border-black hover:bg-[#DFFF00] hover:text-black transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Retake Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Ultra-Premium Footer */}
      <footer className="w-full bg-[#0a0a0a] text-white py-16 sm:py-20 px-6 lg:px-12 mt-auto border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          <div className="flex flex-col max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-[#DFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="6" r="3" />
                <path d="M12 9v4" />
                <path d="M9 13l3 3 3-3" />
                <path d="M7 17l4-2 4 2" />
                <path d="M5 21h14" />
              </svg>
              <span className="font-display font-black text-2xl uppercase tracking-tighter">Motivation Aura</span>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
              Elevating the physical and mental state of the Saudi athlete with curated premium gear tailored to your exact frequency.
            </p>
            <div className="flex gap-3">
              <button type="button" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-all duration-300 cursor-pointer text-gray-400 text-[10px] font-black">
                IG
              </button>
              <button type="button" aria-label="Twitter" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-all duration-300 cursor-pointer text-gray-400 text-[10px] font-black">
                X
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-10 w-full lg:w-auto text-xs uppercase tracking-widest font-bold">
            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="text-gray-600 mb-1 font-black">Company</span>
              <a href="#about" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">About Us</a>
              <a href="#contact" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Contact</a>
              <a href="#careers" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Careers</a>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="text-gray-600 mb-1 font-black">Shop</span>
              <a href="#footwear" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Footwear</a>
              <a href="#apparel" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Apparel</a>
              <a href="#nutrition" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Nutrition</a>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="text-gray-600 mb-1 font-black">Support</span>
              <a href="#shipping" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Shipping</a>
              <a href="#returns" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">Returns</a>
              <a href="#faq" className="text-gray-300 hover:text-[#DFFF00] transition-colors duration-300">FAQ</a>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 col-span-2 sm:col-span-1">
              <span className="text-gray-600 mb-1 font-black">Stay Connected</span>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="bg-white/5 border border-gray-800 px-4 py-3 outline-none focus:border-[#DFFF00] transition-colors duration-300 w-full text-white placeholder-gray-600 font-sans normal-case tracking-normal text-sm"
                />
                <button type="button" className="btn-premium bg-[#DFFF00] text-black px-6 py-3 font-black hover:bg-white transition-colors duration-300 w-full text-xs tracking-widest">
                  Join the Aura
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 sm:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Motivation Aura. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#shipping" className="hover:text-white transition-colors duration-300">Shipping Info</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
