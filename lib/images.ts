/**
 * Policy-compliant image registry.
 * Rules: no women / immodest imagery; modest male athletes or product-only photography.
 * Every key has a unique Unsplash ID — no duplicates.
 */

const base = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMAGES = {
  // ─── Hero / lifestyle ───────────────────────────────────────────────────────
  /** Male athlete, gym training — hero background */
  heroMaleAthlete: base('photo-1526506118085-60ce8714f8c5', 1920),
  /** Empty premium gym interior — no people */
  gymEmpty: base('photo-1534438327276-14e5300c3a48', 1920),
  /** Male runner outdoors, modest kit */
  maleRunning: base('photo-1476480862126-209bfaa8ecc8'),
  /** Male athlete with dumbbells, modest attire */
  maleTraining: base('photo-1571019614242-c5c5dee9f50b'),

  // ─── Footwear — all distinct IDs ────────────────────────────────────────────
  /** Adidas Ultraboost — white/boost sole running shoe */
  shoesAdidas: base('photo-1608231387042-66d1773070a5'),
  /** Nike running shoe — colorful */
  shoesNike: base('photo-1542291026-7eec264c27ff'),
  /** Under Armour HOVR — grey neutral shoe */
  shoesHovr: base('photo-1595950653106-6c9ebd614d3a'),
  /** Recovery slides / sandals */
  slidesRecovery: base('photo-1549298916-b41d114d5ced'),
  /** Athletic crew socks pack */
  socksPack: base('photo-1586350977774-b3b936166608'),

  // ─── Apparel — distinct IDs, no models for women's items ────────────────────
  /** Black hoodie / training top flat-lay */
  hoodieFlat: base('photo-1556821840-3a63f95609a7'),
  /** Dark athletic shorts — product flat-lay */
  trainingShorts: base('photo-1591047139829-d91aeabc984c'),
  /** Black leggings / tights — fabric close-up */
  leggingsBlack: base('photo-1506629083-ef8490ffb79b'),
  /** Seamless athletic leggings texture */
  leggingsSeamless: base('photo-1552902865-72f124629251'),
  /** Sports bra product flat-lay */
  sportsBraFlat: base('photo-1586790170083-2f9ceadc732d'),

  // ─── Supplements — all distinct ─────────────────────────────────────────────
  /** ON Gold Standard Whey — gold tub */
  proteinGold: base('photo-1593095948071-474c5cc2989d'),
  /** BSN Syntha-6 — supplement container */
  proteinBSN: base('photo-1579722820308-d74e571900a9'),
  /** MyProtein Casein — white tub */
  proteinCasein: base('photo-1626806819282-2c1dc01a5e0c'),
  /** C4 Pre-Workout — energy drink tin */
  preWorkoutC4: base('photo-1598300042242-d627f43823e3'),
  /** Ghost Pre-Workout — distinct supplement label */
  preWorkoutGhost: base('photo-1556910110-a5a63dfd393c'),
  /** Sleep capsules / recovery pills */
  capsules: base('photo-1471864190281-a93a3070b6de'),

  // ─── Equipment — all distinct ────────────────────────────────────────────────
  /** Resistance bands set */
  resistanceBands: base('photo-1598266663439-2056e6900339'),
  /** Cast-iron kettlebell */
  kettlebell: base('photo-1517836357463-d25dfeac2558'),
  /** Adjustable dumbbell set */
  dumbbells: base('photo-1583454110551-21f2fa2afe61'),
  /** Dumbbell rack — gym equipment */
  dumbbellRack: base('photo-1576678927484-cc907957088c'),
  /** Premium yoga / training mat */
  yogaMat: base('photo-1601925260368-ae2f83cf8b7f'),
  /** Theragun / percussion massage device */
  massageGun: base('photo-1571902947732-4c0905590514'),
  /** Athletic training gloves */
  gymGloves: base('photo-1583454155184-870a1f63aebc'),
  /** Foam roller recovery tool */
  foamRoller: base('photo-1518611012118-696072aa579a'),
} as const;

export type ImageKey = keyof typeof IMAGES;

export function img(id: ImageKey): string {
  return IMAGES[id];
}
