// Sling & Lifting Data — ASME B30.9 compliant

export interface SlingSpec {
  type: 'web' | 'chain' | 'wire-rope';
  legs: 1 | 2 | 3 | 4;
  wll_tonnes: number;
  angle_deg: number; // standard angles: 0 (vertical), 45, 60
  material?: string;
  size?: string;
}

// Web sling WLL table (flat webbing, duplex)
export const WEB_SLING_WLL: SlingSpec[] = [
  // Single leg vertical
  { type: 'web', legs: 1, wll_tonnes: 1, angle_deg: 0, size: '25mm (1")' },
  { type: 'web', legs: 1, wll_tonnes: 2, angle_deg: 0, size: '50mm (2")' },
  { type: 'web', legs: 1, wll_tonnes: 3, angle_deg: 0, size: '75mm (3")' },
  { type: 'web', legs: 1, wll_tonnes: 4, angle_deg: 0, size: '100mm (4")' },
  { type: 'web', legs: 1, wll_tonnes: 5, angle_deg: 0, size: '125mm (5")' },
  { type: 'web', legs: 1, wll_tonnes: 6, angle_deg: 0, size: '150mm (6")' },
  { type: 'web', legs: 1, wll_tonnes: 8, angle_deg: 0, size: '200mm (8")' },
  { type: 'web', legs: 1, wll_tonnes: 10, angle_deg: 0, size: '250mm (10")' },
];

// Chain sling WLL table (grade 80 alloy chain)
export const CHAIN_SLING_WLL: SlingSpec[] = [
  // Single leg
  { type: 'chain', legs: 1, wll_tonnes: 1.12, angle_deg: 0, size: '6mm (7/32")' },
  { type: 'chain', legs: 1, wll_tonnes: 2.0, angle_deg: 0, size: '8mm (5/16")' },
  { type: 'chain', legs: 1, wll_tonnes: 3.15, angle_deg: 0, size: '10mm (3/8")' },
  { type: 'chain', legs: 1, wll_tonnes: 5.3, angle_deg: 0, size: '13mm (1/2")' },
  { type: 'chain', legs: 1, wll_tonnes: 8.0, angle_deg: 0, size: '16mm (5/8")' },
  { type: 'chain', legs: 1, wll_tonnes: 11.2, angle_deg: 0, size: '18mm (3/4")' },
  { type: 'chain', legs: 1, wll_tonnes: 15.0, angle_deg: 0, size: '20mm (13/16")' },
  { type: 'chain', legs: 1, wll_tonnes: 21.2, angle_deg: 0, size: '23mm (7/8")' },
  { type: 'chain', legs: 1, wll_tonnes: 31.5, angle_deg: 0, size: '26mm (1")' },
];

// Sling angle factors per ASME B30.9
export const SLING_ANGLE_FACTORS = {
  vertical: 1.0,      // 90° from horizontal
  sixty: 0.866,       // 60° from horizontal
  fortyFive: 0.707,   // 45° from horizontal
  thirty: 0.5,        // 30° from horizontal
} as const;

export function calculateSlingLoad(
  totalLoadTonnes: number,
  legs: number,
  angleDeg: number
): { loadPerLegTonnes: number; tensionFactor: number; safeWorkingLoad: number } {
  // ASME B30.9: Load per leg = (Total Load / Number of Legs) × Tension Factor
  // Tension factor = 1 / sin(angle from horizontal)
  const angleRad = (angleDeg * Math.PI) / 180;
  const tensionFactor = 1 / Math.sin(angleRad);
  const loadPerLegTonnes = (totalLoadTonnes / legs) * tensionFactor;
  
  // Recommended WLL should be >= loadPerLeg
  // Standard WLL ratings rounded up
  const standardWLLs = [0.5, 1, 1.5, 2, 3.25, 4.75, 6.5, 8.5, 9.5, 12, 13.5, 17, 21, 27, 35, 55, 85, 120];
  const safeWorkingLoad = standardWLLs.find(wll => wll >= loadPerLegTonnes) || loadPerLegTonnes;
  
  return { loadPerLegTonnes, tensionFactor, safeWorkingLoad };
}

export function getChainSlingForLoad(loadTonnes: number, legs: number, angleDeg: number = 90): SlingSpec | null {
  const { loadPerLegTonnes } = calculateSlingLoad(loadTonnes, legs, angleDeg);
  const sorted = CHAIN_SLING_WLL.sort((a, b) => a.wll_tonnes - b.wll_tonnes);
  return sorted.find(s => s.wll_tonnes >= loadPerLegTonnes) || sorted[sorted.length - 1] || null;
}
