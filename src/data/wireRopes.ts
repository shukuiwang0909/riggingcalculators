// Wire Rope Data — ISO 2408 / ASME B30.9 compliant
// Breaking loads in metric tonnes, dimensions in mm

export interface WireRopeSpec {
  construction: string; // e.g. "6x19", "6x36", "6x7"
  core: 'FC' | 'IWRC' | 'WSC';
  diameter_mm: number;
  breaking_load_tonnes: number;
  weight_kg_per_m: number;
}

// 6x19 IWRC — most common construction
export const WIRE_ROPE_6x19_IWRC: WireRopeSpec[] = [
  { construction: '6x19', core: 'IWRC', diameter_mm: 6, breaking_load_tonnes: 2.4, weight_kg_per_m: 0.13 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 8, breaking_load_tonnes: 4.2, weight_kg_per_m: 0.23 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 10, breaking_load_tonnes: 6.5, weight_kg_per_m: 0.36 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 12, breaking_load_tonnes: 9.3, weight_kg_per_m: 0.52 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 14, breaking_load_tonnes: 12.6, weight_kg_per_m: 0.71 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 16, breaking_load_tonnes: 16.4, weight_kg_per_m: 0.93 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 18, breaking_load_tonnes: 20.7, weight_kg_per_m: 1.17 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 20, breaking_load_tonnes: 25.5, weight_kg_per_m: 1.45 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 22, breaking_load_tonnes: 30.8, weight_kg_per_m: 1.76 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 24, breaking_load_tonnes: 36.6, weight_kg_per_m: 2.10 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 26, breaking_load_tonnes: 42.9, weight_kg_per_m: 2.47 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 28, breaking_load_tonnes: 49.7, weight_kg_per_m: 2.87 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 32, breaking_load_tonnes: 64.8, weight_kg_per_m: 3.74 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 36, breaking_load_tonnes: 81.9, weight_kg_per_m: 4.73 },
  { construction: '6x19', core: 'IWRC', diameter_mm: 40, breaking_load_tonnes: 101.0, weight_kg_per_m: 5.84 },
];

// 6x36 IWRC — more flexible, for cranes and winches
export const WIRE_ROPE_6x36_IWRC: WireRopeSpec[] = [
  { construction: '6x36', core: 'IWRC', diameter_mm: 8, breaking_load_tonnes: 3.9, weight_kg_per_m: 0.22 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 10, breaking_load_tonnes: 6.0, weight_kg_per_m: 0.35 },
  { construction: '6x36', core: 'IWRC', diameter_mm: 12, breaking_load_tonnes: 8.6, weight_kg_per_m: 0.50 },
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
  { construction: '6x36', core: 'IWRC', diameter_mm: 40, breaking_load_tonnes: 94.0, weight_kg_per_m: 5.60 },
];

// 6x7 FC — stiff, for static lines
export const WIRE_ROPE_6x7_FC: WireRopeSpec[] = [
  { construction: '6x7', core: 'FC', diameter_mm: 4, breaking_load_tonnes: 1.1, weight_kg_per_m: 0.06 },
  { construction: '6x7', core: 'FC', diameter_mm: 5, breaking_load_tonnes: 1.7, weight_kg_per_m: 0.09 },
  { construction: '6x7', core: 'FC', diameter_mm: 6, breaking_load_tonnes: 2.4, weight_kg_per_m: 0.13 },
  { construction: '6x7', core: 'FC', diameter_mm: 8, breaking_load_tonnes: 4.3, weight_kg_per_m: 0.23 },
  { construction: '6x7', core: 'FC', diameter_mm: 10, breaking_load_tonnes: 6.7, weight_kg_per_m: 0.36 },
  { construction: '6x7', core: 'FC', diameter_mm: 12, breaking_load_tonnes: 9.6, weight_kg_per_m: 0.52 },
  { construction: '6x7', core: 'FC', diameter_mm: 14, breaking_load_tonnes: 13.0, weight_kg_per_m: 0.71 },
  { construction: '6x7', core: 'FC', diameter_mm: 16, breaking_load_tonnes: 17.0, weight_kg_per_m: 0.93 },
];

export const ALL_WIRE_ROPES = [...WIRE_ROPE_6x19_IWRC, ...WIRE_ROPE_6x36_IWRC, ...WIRE_ROPE_6x7_FC];

export function findWireRope(diameterMm: number, construction?: string): WireRopeSpec | null {
  const filtered = construction 
    ? ALL_WIRE_ROPES.filter(r => r.construction === construction)
    : ALL_WIRE_ROPES;
  return filtered.find(r => r.diameter_mm === diameterMm) || null;
}

export function getWorkingLoadLimit(breakingLoadTonnes: number, safetyFactor: number = 5): number {
  return breakingLoadTonnes / safetyFactor;
}
