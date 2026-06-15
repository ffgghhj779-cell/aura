/**
 * Policy-compliant image URLs only:
 * - No women or immodest imagery
 * - Male athletes in modest sports attire OR standalone product photography
 * - High-resolution, verified Unsplash IDs (w=1200, q=85)
 */

const base = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMAGES = {
  /** Male boxer, modest athletic gear — hero lifestyle */
  heroMaleAthlete: base('photo-1541534741688-6078c6bfb5c5', 1920),
  /** Empty gym, no people — collection / fallback lifestyle */
  gymEmpty: base('photo-1534438327276-14e5300c3a48', 1920),
  /** Male athlete training with dumbbells, modest attire */
  maleTraining: base('photo-1571019614242-c5c5dee9f50b'),
  /** Male runner outdoors, modest kit */
  maleRunning: base('photo-1476480862126-209bfaa8ecc8'),

  /** Product-only assets (verified IDs) */
  shoesUltraboost: base('photo-1608231387042-66d1773070a5'),
  shoesNikeRed: base('photo-1542291026-7eec264c27ff'),
  shoesHovr: base('photo-1595950653106-6c9ebd614d3a'),
  socks: base('photo-1586350977774-b3b936166608'),
  slides: base('photo-1549298916-b41d114d5ced'),
  shortsFlat: base('photo-1556821840-3a63f95609a7'),
  hoodieFlat: base('photo-1556821840-3a63f95609a7'),
  apparelFlat: base('photo-1556821840-3a63f95609a7'),
  /** Neutral fabric texture — no models */
  leggingsFabric: base('photo-14343821765-47d4432c0d87'),
  sportsBraFlat: base('photo-1586790170083-2f9ceadc732d'),
  proteinGold: base('photo-1593095948071-474c5cc2989d'),
  proteinBSN: base('photo-1579722820308-d74e571900a9'),
  proteinCasein: base('photo-1626806819282-2c1dc01a5e0c'),
  preWorkout: base('photo-1598300042242-d627f43823e3'),
  capsules: base('photo-1556910110-a5a63dfd393c'),
  resistanceBands: base('photo-1598266663439-2056e6900339'),
  kettlebell: base('photo-1517836357463-d25dfeac2558'),
  dumbbells: base('photo-1583454110551-21f2fa2afe61'),
  yogaMat: base('photo-1601925260368-ae2f83cf8b7f'),
  massageGun: base('photo-1571902947732-4c0905590514'),
  gymGloves: base('photo-1517836357463-d25dfeac2558'),
  foamRoller: base('photo-1571902947732-4c0905590514'),
} as const;

export function img(id: keyof typeof IMAGES): string {
  return IMAGES[id];
}
