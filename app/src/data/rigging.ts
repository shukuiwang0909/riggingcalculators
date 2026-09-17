// ---- Rigging reference data (ASME B30.26 / B30.9 / ISO 2408 / EN 818-2 / EN 1492-1 based) ----

export interface Shackle {
  model: string;
  type: 'screw-pin' | 'bolt-type';
  material: 'alloy' | 'carbon';
  wll: number; // tonnes
  size: number; // inches (nominal bow diameter)
  pin: number; // mm
  weight: number; // kg
}

export const SHACKLES: Shackle[] = [
  // Crosby G-209 — alloy screw pin anchor
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 0.5, size: 0.25, pin: 8, weight: 0.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 0.75, size: 0.3125, pin: 9, weight: 0.08 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 1, size: 0.375, pin: 11, weight: 0.13 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 1.5, size: 0.4375, pin: 13, weight: 0.2 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 2, size: 0.5, pin: 14, weight: 0.28 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 3.25, size: 0.625, pin: 17, weight: 0.48 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 4.75, size: 0.75, pin: 20, weight: 0.75 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 6.5, size: 0.875, pin: 23, weight: 1.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 8.5, size: 1, pin: 26, weight: 1.5 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 9.5, size: 1.125, pin: 29, weight: 2.05 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 12, size: 1.25, pin: 32, weight: 2.75 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 13.5, size: 1.375, pin: 36, weight: 3.6 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 17, size: 1.5, pin: 39, weight: 4.7 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 21, size: 1.75, pin: 45, weight: 6.9 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 27, size: 2, pin: 52, weight: 9.8 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 35, size: 2.5, pin: 65, weight: 17.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 55, size: 3, pin: 78, weight: 29.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 85, size: 3.5, pin: 91, weight: 46.0 },
  { model: 'G-209', type: 'screw-pin', material: 'alloy', wll: 120, size: 4, pin: 104, weight: 70.0 },
  // Crosby G-2130 — alloy bolt type anchor
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 0.5, size: 0.25, pin: 8, weight: 0.06 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 0.75, size: 0.3125, pin: 9, weight: 0.09 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 1, size: 0.375, pin: 11, weight: 0.15 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 1.5, size: 0.4375, pin: 13, weight: 0.23 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 2, size: 0.5, pin: 14, weight: 0.32 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 3.25, size: 0.625, pin: 17, weight: 0.55 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 4.75, size: 0.75, pin: 20, weight: 0.85 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 6.5, size: 0.875, pin: 23, weight: 1.2 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 8.5, size: 1, pin: 26, weight: 1.7 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 9.5, size: 1.125, pin: 29, weight: 2.3 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 12, size: 1.25, pin: 32, weight: 3.1 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 13.5, size: 1.375, pin: 36, weight: 4.1 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 17, size: 1.5, pin: 39, weight: 5.3 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 21, size: 1.75, pin: 45, weight: 7.8 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 27, size: 2, pin: 52, weight: 11.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 35, size: 2.5, pin: 65, weight: 19.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 55, size: 3, pin: 78, weight: 33.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 85, size: 3.5, pin: 91, weight: 52.0 },
  { model: 'G-2130', type: 'bolt-type', material: 'alloy', wll: 120, size: 4, pin: 104, weight: 78.0 },
  // Crosby S-209 — carbon screw pin anchor
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 0.5, size: 0.25, pin: 8, weight: 0.06 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 0.75, size: 0.3125, pin: 9, weight: 0.09 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 1, size: 0.375, pin: 11, weight: 0.14 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 1.5, size: 0.4375, pin: 13, weight: 0.21 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 2, size: 0.5, pin: 14, weight: 0.3 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 3.25, size: 0.625, pin: 17, weight: 0.5 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 4.75, size: 0.75, pin: 20, weight: 0.78 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 6.5, size: 0.875, pin: 23, weight: 1.1 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 8.5, size: 1, pin: 26, weight: 1.6 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 9.5, size: 1.125, pin: 29, weight: 2.2 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 12, size: 1.25, pin: 32, weight: 2.95 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 13.5, size: 1.375, pin: 36, weight: 3.85 },
  { model: 'S-209', type: 'screw-pin', material: 'carbon', wll: 17, size: 1.5, pin: 39, weight: 5.0 },
];

export const SHACKLE_MODELS = ['G-209', 'G-2130', 'S-209'] as const;
export type ShackleModel = (typeof SHACKLE_MODELS)[number];

export interface WireRope {
  construction: '6x19' | '6x36' | '6x7';
  core: 'IWRC' | 'FC';
  diameter_mm: number;
  breaking_load_tonnes: number;
  weight_kg_per_m: number;
}

export const WIRE_ROPES: WireRope[] = [
  // 6x19 IWRC
  { construction: '6x19', core: 'IWRC', diameter_mm: 6, breaking_load_tonnes: 2.4, weight_kg_per_m: 0.13 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 8, breaking_load_tonnes: 4.2, weight_kg_per_m: 0.23 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 10, breaking_load_tonnes: 6.5, weight_kg_per_m: 0.36 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 12, breaking_load_tonnes: 9.3, weight_kg_per_m: 0.52 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 14, breaking_load_tonnes: 12.6, weight_kg_per_m: 0.71 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 16, breaking_load_tonnes: 16.4, weight_kg_per_m: 0.93 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 18, breaking_load_tonnes: 20.7, weight_kg_per_m: 1.17 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 20, breaking_load_tonnes: 25.5, weight_kg_per_m: 1.45 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 22, breaking_load_tonnes: 30.8, weight_kg_per_m: 1.76 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 24, breaking_load_tonnes: 36.6, weight_kg_per_m: 2.1 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 26, breaking_load_tonnes: 42.9, weight_kg_per_m: 2.47 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 28, breaking_load_tonnes: 49.7, weight_kg_per_m: 2.87 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 32, breaking_load_tonnes: 64.8, weight_kg_per_m: 3.74 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 36, breaking_load_tonnes: 81.9, weight_kg_per_m: 4.73 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 40, breaking_load_tonnes: 101.0, weight_kg_per_m: 5.84 },
  // 6x36 IWRC
  { construction: '6x36', core: 'IWRC', diameter_mm: 8, breaking_load_tonnes: 3.9, weight_kg_per_m: 0.22 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 10, breaking_load_tonnes: 6.0, weight_kg_per_m: 0.35 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 12, breaking_load_tonnes: 8.6, weight_kg_per_m: 0.5 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 14, breaking_load_tonnes: 11.7, weight_kg_per_m: 0.68 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 16, breaking_load_tonnes: 15.2, weight_kg_per_m: 0.89 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 18, breaking_load_tonnes: 19.2, weight_kg_per_m: 1.13 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 20, breaking_load_tonnes: 23.7, weight_kg_per_m: 1.39 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 22, breaking_load_tonnes: 28.6, weight_kg_per_m: 1.68 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 24, breaking_load_tonnes: 34.0, weight_kg_per_m: 2.01 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 26, breaking_load_tonnes: 39.9, weight_kg_per_m: 2.36 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 28, breaking_load_tonnes: 46.2, weight_kg_per_m: 2.74 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 32, breaking_load_tonnes: 60.3, weight_kg_per_m: 3.58 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 36, breaking_load_tonnes: 76.2, weight_kg_per_m: 4.53 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 40, breaking_load_tonnes: 94.0, weight_kg_per_m: 5.6 },
  // 6x7 FC
  { construction: '6x7', core: 'FC', diameter_mm: 4, breaking_load_tonnes: 1.1, weight_kg_per_m: 0.06 },
  { construction: '6x7', core: 'FC', diameter_mm: 5, breaking_load_tonnes: 1.7, weight_kg_per_m: 0.09 },
  { construction: '6x7', core: 'FC', diameter_mm: 6, breaking_load_tonnes: 2.4, weight_kg_per_m: 0.13 },
  { construction: '6x7', core: 'FC', diameter_mm: 8, breaking_load_tonnes: 4.3, weight_kg_per_m: 0.23 },
  { construction: '6x7', core: 'FC', diameter_mm: 10, breaking_load_tonnes: 6.7, weight_kg_per_m: 0.36 },
  { construction: '6x7', core: 'FC', diameter_mm: 12, breaking_load_tonnes: 9.6, weight_kg_per_m: 0.52 },
  { construction: '6x7', core: 'FC', diameter_mm: 14, breaking_load_tonnes: 13.0, weight_kg_per_m: 0.71 },
  { construction: '6x7', core: 'FC', diameter_mm: 16, breaking_load_tonnes: 17.0, weight_kg_per_m: 0.93 },
];

// Grade 80 chain sling WLL (single leg, vertical, tonnes) — EN 818-2 / ASME B30.9
export const CHAIN_WLL = [
  { dia: '6mm', wll: 1.12 },
  { dia: '8mm', wll: 2.0 },
  { dia: '10mm', wll: 3.15 },
  { dia: '13mm', wll: 5.3 },
  { dia: '16mm', wll: 8.0 },
  { dia: '18mm', wll: 11.2 },
  { dia: '20mm', wll: 15.0 },
  { dia: '23mm', wll: 21.2 },
  { dia: '26mm', wll: 31.5 },
];

// Flat webbing sling WLL (tonnes, straight lift) — EN 1492-1 colour code
export const WEB_SLINGS = [
  { color: 'violet', wll: 1.0 },
  { color: 'green', wll: 2.0 },
  { color: 'yellow', wll: 3.0 },
  { color: 'grey', wll: 4.0 },
  { color: 'red', wll: 5.0 },
  { color: 'brown', wll: 6.0 },
  { color: 'blue', wll: 8.0 },
  { color: 'orange', wll: 10.0 },
];

export const TENSION_FACTORS = [
  { angle: 90, factor: 1.0 },
  { angle: 60, factor: 0.866 },
  { angle: 45, factor: 0.707 },
  { angle: 30, factor: 0.5 },
];

export function fmtSize(inches: number): string {
  const frac = inches % 1;
  const whole = Math.floor(inches);
  const map: Record<string, string> = {
    '0.25': '1/4', '0.3125': '5/16', '0.375': '3/8', '0.4375': '7/16',
    '0.5': '1/2', '0.625': '5/8', '0.75': '3/4', '0.875': '7/8',
  };
  const key = frac.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  const f = map[key];
  if (!f) return `${inches}"`;
  return whole > 0 ? `${whole}-${f}"` : `${f}"`;
}
