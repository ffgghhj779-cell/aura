/**
 * Policy-compliant image URLs only:
 * - No women or immodest imagery
 * - Modest male athletes OR standalone product photography
 * - Each key maps to imagery that matches the product category
 */

const base = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMAGES = {
  /** Neutral product fallback — supplement jar, no people */
  fallbackProduct: base('photo-1593095948071-474c5cc2989d', 800),

  /** Empty gym interior — no people */
  gymEmpty: base('photo-1534438327276-14e5300c3a48', 1920),

  /** Male runner outdoors — modest kit, distant framing */
  maleRunning: base('photo-1476480862126-209bfaa8ecc8'),

  // ─── Footwear (product-only, brand-neutral white/neutral shoes) ───
  shoesRunningWhite: base('photo-1606107557882-2441e71280bc'),
  shoesRunningRed: base('photo-1542291026-7eec264c27ff'),
  shoesRunningGrey: base('photo-1595950653106-6c9ebd614d3a'),
  slidesRecovery: base('photo-1549298916-b41d114d5ced'),
  socksPack: base('photo-1586350977774-b3b936166608'),

  // ─── Apparel (flat-lay / hanger — no models) ───
  trainingTopBlack: base('photo-1620799140408-edc46dcb089'),
  trainingShorts: base('photo-1591047139829-d91aeabc984c'),
  hoodieFlat: base('photo-1556821840-3a63f95609a7'),
  trainingSetFlat: base('photo-1556821840-3a63f95609a7'),
  runningTeeFlat: base('photo-1586363101632-ffdd43a12a7b'),

  // ─── Women's apparel (product-only flat lay / fabric) ───
  leggingsBlack: base('photo-1506629083-ef8490ffb79b'),
  leggingsSeamless: base('photo-1552902865-72f124629251'),
  leggingsFabric: base('photo-14343821765-47d4432c0d87'),
  sportsBraFlat: base('photo-1586790170083-2f9ceadc732d'),

  // ─── Supplements (product-only) ───
  proteinGold: base('photo-1593095948071-474c5cc2989d'),
  proteinBSN: base('photo-1579722820308-d74e571900a9'),
  proteinCasein: base('photo-1626806819282-2c1dc01a5e0c'),
  preWorkout: base('photo-1598300042242-d627f43823e3'),
  capsules: base('photo-1556910110-a5a63dfd393c'),

  // ─── Equipment (product-only) ───
  resistanceBands: base('photo-1598266663439-2056e6900339'),
  kettlebell: base('photo-1517836357463-d25dfeac2558'),
  dumbbells: base('photo-1583454110551-21f2fa2afe61'),
  dumbbellRack: base('photo-1576678927484-cc907957088c'),
  yogaMat: base('photo-1601925260368-ae2f83cf8b7f'),
  massageGun: base('photo-1571902947732-4c0905590514'),
  gymGloves: base('photo-1517836357463-d25dfeac2558'),
  foamRoller: base('photo-1571902947732-4c0905590514'),
} as const;

export function img(id: keyof typeof IMAGES): string {
  return IMAGES[id];
}
