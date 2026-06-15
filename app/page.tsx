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

const PRODUCT_ENGINE = {
  tense: {
    phrase: "To ground your energy\nand restore inner balance.",
    products: [
      { name: "Nike Pro socks", desc: "Premium grip and anatomical compression for grounded stability.", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80", price: "SAR 89" },
      { name: "Lululemon Align™", desc: "Buttery soft, weightless Nulu™ fabric for unrestricted calm.", image: "https://images.unsplash.com/photo-1506624106511-92b8ea346fa0?w=800&q=80", price: "SAR 450" },
      { name: "BSN Syntha-6", desc: "Ultra-premium protein matrix to rebuild and restore muscle tension.", image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&q=80", price: "SAR 299" }
    ]
  },
  energetic: {
    phrase: "To fuel your fire\nwithout burnout.",
    products: [
      { name: "Adidas Ultraboost", desc: "Maximum energy return for your explosive runs and high-impact sessions.", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", price: "SAR 750" },
      { name: "Gymshark Vital Seamless", desc: "Engineered for maximum breathability, stretch, and unparalleled support.", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80", price: "SAR 280" },
      { name: "Optimum Nutrition Gold Standard", desc: "100% Whey Protein for rapid, explosive muscle recovery.", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80", price: "SAR 350" }
    ]
  },
  steady: {
    phrase: "To sustain your discipline\nwith quiet strength.",
    products: [
      { name: "SKDK training set", desc: "Durable, reliable, and crafted for brutal daily consistency.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", price: "SAR 180" },
      { name: "Bells of Steel resistance bands", desc: "Progressive overload mapped to your steady strength evolution.", image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=800&q=80", price: "SAR 120" },
      { name: "MyProtein Casein", desc: "Slow-release protein formula to fuel muscle growth overnight.", image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&q=80", price: "SAR 220" }
    ]
  },
  tired: {
    phrase: "To honor rest as part\nof your performance.",
    products: [
      { name: "Nike Recovery slides", desc: "Cloud-like foam cushioning for immediate post-game comfort.", image: "https://images.unsplash.com/photo-1563223770-bcfa6b4618e0?w=800&q=80", price: "SAR 199" },
      { name: "Reebok Yoga Mat", desc: "Extra-thick premium cushioning to support deep stretching and rest.", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80", price: "SAR 150" },
      { name: "TNH Sleep Support blend", desc: "Restorative deep-night formula for central nervous system reset.", image: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=800&q=80", price: "SAR 185" }
    ]
  }
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
          <button aria-label="Cart" className="relative group">
            <ShoppingBag className="w-6 h-6 hover:text-[#DFFF00] transition-colors" />
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
              <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden mb-12">
                <Image 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1920&q=80" 
                  alt="Premium Athletic Background" 
                  className="opacity-40 object-cover object-center" 
                  fill 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-12">
                  <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] text-black uppercase bg-[#DFFF00]">
                    Elite Performance Gear
                  </span>
                  <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[1.05]">
                    Elevate Your <br /> Training Standard
                  </h2>
                  <p className="text-gray-300 md:text-xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                    Curated premium equipment and mental conditioning tailored exclusively for the modern Saudi athlete. Find the tools that match your frequency.
                  </p>
                </div>
              </div>

              {/* Brand Trust Bar */}
              <div className="w-full bg-[#DFFF00] py-6 border-y-2 border-black overflow-hidden flex whitespace-nowrap mb-16 lg:mb-24">
                <div className="flex animate-marquee items-center text-black font-display font-black text-2xl uppercase tracking-wider space-x-12 px-6">
                  <span>Nike</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Adidas</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Lululemon</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Gymshark</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Under Armour</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Optimum Nutrition</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Nike</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Adidas</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Lululemon</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Gymshark</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Under Armour</span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>Optimum Nutrition</span>
                </div>
              </div>

              <div className="max-w-6xl w-full mx-auto px-6 lg:px-12 flex flex-col items-center text-center pb-24">
                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[110px] leading-[0.9] uppercase tracking-tighter text-black flex flex-col">
                  <span className="block mb-2 text-gray-400">How do you</span>
                  <span className="block italic text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-800">Feel Today?</span>
                </h1>
              
              <p className="mt-8 text-lg font-medium text-gray-500 uppercase tracking-[0.2em] relative inline-block">
                Select your mental state
                <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#DFFF00]"></span>
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-20">
                {MOODS.map((mood, idx) => (
                  <button 
                    key={mood.id} 
                    onClick={() => setSelectedMood(mood.id)}
                    className="group relative flex items-center p-6 lg:p-8 border-2 border-black bg-white text-left transition-all duration-300 hover:bg-black hover:text-white"
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
              <div className="bg-black text-white px-6 py-24 lg:py-32 w-full mt-[-2rem]">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                  <div className="inline-block bg-[#DFFF00] text-black px-4 py-1 font-bold text-sm tracking-widest uppercase mb-8">
                    Your Rx
                  </div>
                  <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[1.05] whitespace-pre-line max-w-4xl mx-auto">
                    {currentResult.phrase}
                  </h2>
                </div>
              </div>

              {/* Product Shelf */}
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-4">
                  <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight">Recommended Equipment</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {currentResult.products.map((product, idx) => (
                    <motion.div 
                      key={product.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col border border-gray-200 hover:border-black hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 bg-white"
                    >
                      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                         <Image 
                           src={product.image} 
                           alt={product.name} 
                           fill 
                           className="object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110" 
                           referrerPolicy="no-referrer"
                         />
                         {/* Badge */}
                         {idx === 0 && (
                            <div className="absolute top-4 left-4 bg-[#DFFF00] text-black text-xs font-black uppercase tracking-widest px-3 py-1 shadow-sm">
                              Top Pick
                            </div>
                         )}
                      </div>
                      <div className="p-5 flex flex-col flex-1 bg-white">
                        <div className="flex justify-between items-start gap-4 mb-2">
                           <h4 className="font-display font-black text-xl uppercase tracking-tight leading-tight">{product.name}</h4>
                           <span className="font-bold whitespace-nowrap">{product.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">{product.desc}</p>
                        
                        <div className="mt-auto">
                          <button className="w-full relative overflow-hidden bg-black text-white font-black text-sm uppercase tracking-widest py-4 border-2 border-black group/btn hover:text-black transition-colors">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Add to Cart
                              <ShoppingBag className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-[#DFFF00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 flex justify-center">
                  <button 
                    onClick={handleReset} 
                    className="group relative flex items-center gap-3 bg-black text-white px-10 py-5 font-black uppercase text-sm tracking-widest border-2 border-black hover:bg-[#DFFF00] hover:text-black transition-colors"
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
              <footer className="w-full bg-[#0a0a0a] text-white py-20 px-6 lg:px-12 mt-auto border-t border-gray-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
                  <div className="flex flex-col max-w-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <svg className="w-8 h-8 text-[#DFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <div className="flex gap-4">
                      {/* Social placeholers */}
                      <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-colors cursor-pointer text-gray-400">
                        IG
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-colors cursor-pointer text-gray-400">
                        TW
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 w-full lg:w-auto text-xs uppercase tracking-widest font-bold">
                    <div className="flex flex-col gap-5">
                      <span className="text-gray-600 mb-2 font-black">Shop</span>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Footwear</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Apparel</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Equipment</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Nutrition</a>
                    </div>
                    <div className="flex flex-col gap-5">
                      <span className="text-gray-600 mb-2 font-black">Support</span>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Contact Us</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Shipping</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">Returns</a>
                      <a href="#" className="text-gray-300 hover:text-[#DFFF00] transition-colors">FAQ</a>
                    </div>
                    <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                       <span className="text-gray-600 mb-2 font-black">Stay Connected</span>
                       <div className="flex flex-col gap-3">
                         <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-white/5 border border-gray-800 px-4 py-3 outline-none focus:border-white transition-colors w-full text-white placeholder-gray-600 font-sans normal-case tracking-normal" />
                         <button className="bg-[#DFFF00] text-black px-6 py-3 font-black hover:bg-white transition-colors w-full">JOIN THE AURA</button>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  <span>© {new Date().getFullYear()} Motivation Aura. All Rights Reserved.</span>
                  <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
              </footer>
            </div>
          );
        }
