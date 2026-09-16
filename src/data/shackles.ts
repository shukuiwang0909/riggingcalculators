// Crosby Shackle Data — ASME B30.26 compliant
// WLL in metric tonnes, dimensions in mm
// Source: Crosby Catalog 2024

export interface ShackleModel {
  model: string;
  type: 'screw-pin' | 'bolt-type' | 'round-pin';
  material: 'alloy' | 'carbon';
  bow: boolean; // true = bow/anchor, false = D/chain
  wll_tonnes: number;
  size_inch: number; // nominal size
  dimensions: {
    a: number; // inside width (bow)
    b: number; // inside length
    c: number; // pin diameter
    d: number; // body diameter
    e: number; // eye diameter
    f: number; // width between eyes
  };
  weight_kg: number;
}

export const CROSBY_SHACKLES: ShackleModel[] = [
  // G-209 — Alloy Screw Pin Anchor Shackle (most popular)
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 0.5, size_inch: 0.25, dimensions: { a: 12, b: 22, c: 8, d: 8, e: 16, f: 20 }, weight_kg: 0.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 0.75, size_inch: 0.3125, dimensions: { a: 13, b: 25, c: 9, d: 9, e: 18, f: 22 }, weight_kg: 0.08 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 1, size_inch: 0.375, dimensions: { a: 16, b: 32, c: 11, d: 11, e: 22, f: 27 }, weight_kg: 0.13 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 1.5, size_inch: 0.4375, dimensions: { a: 19, b: 37, c: 13, d: 13, e: 26, f: 32 }, weight_kg: 0.20 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 2, size_inch: 0.5, dimensions: { a: 22, b: 42, c: 14, d: 14, e: 29, f: 36 }, weight_kg: 0.28 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 3.25, size_inch: 0.625, dimensions: { a: 27, b: 51, c: 17, d: 17, e: 35, f: 43 }, weight_kg: 0.48 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 4.75, size_inch: 0.75, dimensions: { a: 32, b: 60, c: 20, d: 20, e: 42, f: 51 }, weight_kg: 0.75 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 6.5, size_inch: 0.875, dimensions: { a: 36, b: 68, c: 23, d: 23, e: 48, f: 58 }, weight_kg: 1.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 8.5, size_inch: 1, dimensions: { a: 41, b: 77, c: 26, d: 26, e: 54, f: 65 }, weight_kg: 1.50 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 9.5, size_inch: 1.125, dimensions: { a: 46, b: 86, c: 29, d: 29, e: 60, f: 73 }, weight_kg: 2.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 12, size_inch: 1.25, dimensions: { a: 51, b: 95, c: 32, d: 32, e: 67, f: 81 }, weight_kg: 2.75 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 13.5, size_inch: 1.375, dimensions: { a: 57, b: 105, c: 36, d: 36, e: 74, f: 90 }, weight_kg: 3.60 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 17, size_inch: 1.5, dimensions: { a: 62, b: 114, c: 39, d: 39, e: 80, f: 98 }, weight_kg: 4.70 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 21, size_inch: 1.75, dimensions: { a: 72, b: 133, c: 45, d: 45, e: 93, f: 115 }, weight_kg: 6.90 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 27, size_inch: 2, dimensions: { a: 83, b: 152, c: 52, d: 52, e: 106, f: 132 }, weight_kg: 9.80 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 35, size_inch: 2.5, dimensions: { a: 103, b: 190, c: 65, d: 65, e: 133, f: 165 }, weight_kg: 17.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 55, size_inch: 3, dimensions: { a: 124, b: 228, c: 78, d: 78, e: 160, f: 198 }, weight_kg: 29.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 85, size_inch: 3.5, dimensions: { a: 144, b: 266, c: 91, d: 91, e: 187, f: 231 }, weight_kg: 46.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', bow: true, wll_tonnes: 120, size_inch: 4, dimensions: { a: 165, b: 304, c: 104, d: 104, e: 213, f: 264 }, weight_kg: 70.0 },

  // G-2130 — Alloy Bolt Type Anchor Shackle (higher safety, uses bolt+nut+cotter)
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 0.5, size_inch: 0.25, dimensions: { a: 12, b: 22, c: 8, d: 8, e: 16, f: 20 }, weight_kg: 0.06 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 0.75, size_inch: 0.3125, dimensions: { a: 13, b: 25, c: 9, d: 9, e: 18, f: 22 }, weight_kg: 0.09 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 1, size_inch: 0.375, dimensions: { a: 16, b: 32, c: 11, d: 11, e: 22, f: 27 }, weight_kg: 0.15 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 1.5, size_inch: 0.4375, dimensions: { a: 19, b: 37, c: 13, d: 13, e: 26, f: 32 }, weight_kg: 0.23 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 2, size_inch: 0.5, dimensions: { a: 22, b: 42, c: 14, d: 14, e: 29, f: 36 }, weight_kg: 0.32 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 3.25, size_inch: 0.625, dimensions: { a: 27, b: 51, c: 17, d: 17, e: 35, f: 43 }, weight_kg: 0.55 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 4.75, size_inch: 0.75, dimensions: { a: 32, b: 60, c: 20, d: 20, e: 42, f: 51 }, weight_kg: 0.85 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 6.5, size_inch: 0.875, dimensions: { a: 36, b: 68, c: 23, d: 23, e: 48, f: 58 }, weight_kg: 1.20 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 8.5, size_inch: 1, dimensions: { a: 41, b: 77, c: 26, d: 26, e: 54, f: 65 }, weight_kg: 1.70 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 9.5, size_inch: 1.125, dimensions: { a: 46, b: 86, c: 29, d: 29, e: 60, f: 73 }, weight_kg: 2.30 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 12, size_inch: 1.25, dimensions: { a: 51, b: 95, c: 32, d: 32, e: 67, f: 81 }, weight_kg: 3.10 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 13.5, size_inch: 1.375, dimensions: { a: 57, b: 105, c: 36, d: 36, e: 74, f: 90 }, weight_kg: 4.10 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 17, size_inch: 1.5, dimensions: { a: 62, b: 114, c: 39, d: 39, e: 80, f: 98 }, weight_kg: 5.30 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 21, size_inch: 1.75, dimensions: { a: 72, b: 133, c: 45, d: 45, e: 93, f: 115 }, weight_kg: 7.80 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 27, size_inch: 2, dimensions: { a: 83, b: 152, c: 52, d: 52, e: 106, f: 132 }, weight_kg: 11.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 35, size_inch: 2.5, dimensions: { a: 103, b: 190, c: 65, d: 65, e: 133, f: 165 }, weight_kg: 19.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 55, size_inch: 3, dimensions: { a: 124, b: 228, c: 78, d: 78, e: 160, f: 198 }, weight_kg: 33.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 85, size_inch: 3.5, dimensions: { a: 144, b: 266, c: 91, d: 91, e: 187, f: 231 }, weight_kg: 52.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', bow: true, wll_tonnes: 120, size_inch: 4, dimensions: { a: 165, b: 304, c: 104, d: 104, e: 213, f: 264 }, weight_kg: 78.0 },

  // S-209 — Carbon Steel Screw Pin Anchor Shackle (economy)
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 0.5, size_inch: 0.25, dimensions: { a: 12, b: 22, c: 8, d: 8, e: 16, f: 20 }, weight_kg: 0.06 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 0.75, size_inch: 0.3125, dimensions: { a: 13, b: 25, c: 9, d: 9, e: 18, f: 22 }, weight_kg: 0.09 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 1, size_inch: 0.375, dimensions: { a: 16, b: 32, c: 11, d: 11, e: 22, f: 27 }, weight_kg: 0.14 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 1.5, size_inch: 0.4375, dimensions: { a: 19, b: 37, c: 13, d: 13, e: 26, f: 32 }, weight_kg: 0.21 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 2, size_inch: 0.5, dimensions: { a: 22, b: 42, c: 14, d: 14, e: 29, f: 36 }, weight_kg: 0.30 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 3.25, size_inch: 0.625, dimensions: { a: 27, b: 51, c: 17, d: 17, e: 35, f: 43 }, weight_kg: 0.50 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 4.75, size_inch: 0.75, dimensions: { a: 32, b: 60, c: 20, d: 20, e: 42, f: 51 }, weight_kg: 0.78 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 6.5, size_inch: 0.875, dimensions: { a: 36, b: 68, c: 23, d: 23, e: 48, f: 58 }, weight_kg: 1.10 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 8.5, size_inch: 1, dimensions: { a: 41, b: 77, c: 26, d: 26, e: 54, f: 65 }, weight_kg: 1.60 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 9.5, size_inch: 1.125, dimensions: { a: 46, b: 86, c: 29, d: 29, e: 60, f: 73 }, weight_kg: 2.20 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 12, size_inch: 1.25, dimensions: { a: 51, b: 95, c: 32, d: 32, e: 67, f: 81 }, weight_kg: 2.95 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 13.5, size_inch: 1.375, dimensions: { a: 57, b: 105, c: 36, d: 36, e: 74, f: 90 }, weight_kg: 3.85 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', bow: true, wll_tonnes: 17, size_inch: 1.5, dimensions: { a: 62, b: 114, c: 39, d: 39, e: 80, f: 98 }, weight_kg: 5.00 },
];

// G-2150 — Alloy Bolt Type Chain Shackle (D-shackle, higher strength for straight pull)
export const CROSBY_CHAIN_SHACKLES: ShackleModel[] = [
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 2, size_inch: 0.5, dimensions: { a: 18, b: 35, c: 14, d: 14, e: 24, f: 30 }, weight_kg: 0.25 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 3.25, size_inch: 0.625, dimensions: { a: 22, b: 42, c: 17, d: 17, e: 29, f: 36 }, weight_kg: 0.42 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 4.75, size_inch: 0.75, dimensions: { a: 26, b: 50, c: 20, d: 20, e: 34, f: 43 }, weight_kg: 0.65 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 6.5, size_inch: 0.875, dimensions: { a: 30, b: 58, c: 23, d: 23, e: 39, f: 49 }, weight_kg: 0.95 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 8.5, size_inch: 1, dimensions: { a: 34, b: 65, c: 26, d: 26, e: 44, f: 56 }, weight_kg: 1.35 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 9.5, size_inch: 1.125, dimensions: { a: 38, b: 73, c: 29, d: 29, e: 49, f: 62 }, weight_kg: 1.85 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 12, size_inch: 1.25, dimensions: { a: 42, b: 81, c: 32, d: 32, e: 54, f: 69 }, weight_kg: 2.50 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 13.5, size_inch: 1.375, dimensions: { a: 47, b: 89, c: 36, d: 36, e: 60, f: 76 }, weight_kg: 3.30 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 17, size_inch: 1.5, dimensions: { a: 51, b: 98, c: 39, d: 39, e: 65, f: 83 }, weight_kg: 4.30 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 21, size_inch: 1.75, dimensions: { a: 60, b: 114, c: 45, d: 45, e: 76, f: 97 }, weight_kg: 6.30 },
  { model: 'G-2150', type: 'bolt-type', material: 'alloy', bow: false, wll_tonnes: 27, size_inch: 2, dimensions: { a: 68, b: 130, c: 52, d: 52, e: 87, f: 111 }, weight_kg: 9.00 },
];

export function findShackle(loadTonnes: number, type?: 'screw-pin' | 'bolt-type', material?: 'alloy' | 'carbon'): ShackleModel | null {
  const all = [...CROSBY_SHACKLES, ...CROSBY_CHAIN_SHACKLES];
  const filtered = all.filter(s => 
    (!type || s.type === type) && 
    (!material || s.material === material)
  );
  // Find smallest shackle with WLL >= load
  const sorted = filtered.sort((a, b) => a.wll_tonnes - b.wll_tonnes);
  return sorted.find(s => s.wll_tonnes >= loadTonnes) || sorted[sorted.length - 1] || null;
}

export function getShackleByModel(model: string, wllTonnes?: number): ShackleModel[] {
  const all = [...CROSBY_SHACKLES, ...CROSBY_CHAIN_SHACKLES];
  if (wllTonnes) {
    return all.filter(s => s.model === model && s.wll_tonnes === wllTonnes);
  }
  return all.filter(s => s.model === model);
}
