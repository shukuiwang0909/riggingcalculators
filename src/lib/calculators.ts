// Calculation Engines — pure TypeScript, no dependencies

import { findShackle, type ShackleModel } from '../data/shackles';
import { findWireRope, getWorkingLoadLimit, type WireRopeSpec } from '../data/wireRopes';
import { calculateSlingLoad, getChainSlingForLoad, type SlingSpec } from '../data/slings';

// ============================================
// 1. SHACKLE SIZE CALCULATOR
// ============================================

export interface ShackleInput {
  loadTonnes: number;
  type?: 'screw-pin' | 'bolt-type';
  material?: 'alloy' | 'carbon';
}

export interface ShackleResult {
  shackle: ShackleModel;
  safetyFactor: number;
  efficiency: number; // how close to WLL limit
  warning?: string;
}

export function calculateShackle(input: ShackleInput): ShackleResult | null {
  const { loadTonnes, type, material } = input;
  
  if (loadTonnes <= 0 || loadTonnes > 200) {
    return null;
  }
  
  const shackle = findShackle(loadTonnes, type, material);
  if (!shackle) return null;
  
  const safetyFactor = shackle.wll_tonnes / loadTonnes;
  const efficiency = loadTonnes / shackle.wll_tonnes;
  
  let warning: string | undefined;
  if (safetyFactor < 1.1) {
    warning = 'Load is very close to WLL. Consider next size up for safety margin.';
  } else if (safetyFactor > 5) {
    warning = 'Shackle is significantly oversized. Consider smaller size for cost efficiency.';
  }
  
  return { shackle, safetyFactor, efficiency, warning };
}

// ============================================
// 2. SLING ANGLE CALCULATOR
// ============================================

export interface SlingAngleInput {
  totalLoadTonnes: number;
  legs: 1 | 2 | 3 | 4;
  angleDeg: number; // from horizontal
  slingType: 'chain' | 'web' | 'wire-rope';
}

export interface SlingAngleResult {
  loadPerLegTonnes: number;
  tensionFactor: number;
  horizontalForceTonnes: number;
  verticalForceTonnes: number;
  recommendedSling: SlingSpec | null;
  warning?: string;
}

export function calculateSlingAngle(input: SlingAngleInput): SlingAngleResult | null {
  const { totalLoadTonnes, legs, angleDeg, slingType } = input;
  
  if (totalLoadTonnes <= 0 || angleDeg <= 0 || angleDeg > 90) {
    return null;
  }
  
  const result = calculateSlingLoad(totalLoadTonnes, legs, angleDeg);
  
  const angleRad = (angleDeg * Math.PI) / 180;
  const horizontalForce = (totalLoadTonnes / legs) / Math.tan(angleRad);
  const verticalForce = totalLoadTonnes / legs;
  
  let recommendedSling: SlingSpec | null = null;
  if (slingType === 'chain') {
    recommendedSling = getChainSlingForLoad(totalLoadTonnes, legs, angleDeg);
  }
  
  let warning: string | undefined;
  if (angleDeg < 30) {
    warning = 'Angle below 30° creates extreme tension. ASME B30.9 recommends minimum 30° horizontal angle.';
  } else if (angleDeg < 45) {
    warning = 'Low angle increases tension significantly. Consider 45° or higher for efficiency.';
  }
  
  return {
    loadPerLegTonnes: result.loadPerLegTonnes,
    tensionFactor: result.tensionFactor,
    horizontalForceTonnes: horizontalForce,
    verticalForceTonnes: verticalForce,
    recommendedSling,
    warning,
  };
}

// ============================================
// 3. WIRE ROPE CAPACITY CALCULATOR
// ============================================

export interface WireRopeInput {
  diameterMm: number;
  construction?: string; // '6x19', '6x36', '6x7'
  safetyFactor?: number; // default 5 for lifting
}

export interface WireRopeResult {
  rope: WireRopeSpec;
  breakingLoadTonnes: number;
  workingLoadLimitTonnes: number;
  weightPerMeter: number;
  warning?: string;
}

export function calculateWireRope(input: WireRopeInput): WireRopeResult | null {
  const { diameterMm, construction, safetyFactor = 5 } = input;
  
  if (diameterMm <= 0 || diameterMm > 60) {
    return null;
  }
  
  const rope = findWireRope(diameterMm, construction);
  if (!rope) return null;
  
  const workingLoadLimitTonnes = getWorkingLoadLimit(rope.breaking_load_tonnes, safetyFactor);
  
  let warning: string | undefined;
  if (safetyFactor < 3.5) {
    warning = 'Safety factor below 3.5 is not recommended for lifting applications. ASME B30.9 recommends 5:1 minimum.';
  }
  
  return {
    rope,
    breakingLoadTonnes: rope.breaking_load_tonnes,
    workingLoadLimitTonnes,
    weightPerMeter: rope.weight_kg_per_m,
    warning,
  };
}

// ============================================
// 4. CRANE LOAD CALCULATOR
// ============================================

export interface CraneLoadInput {
  loadWeightTonnes: number;
  boomLengthM: number;
  boomAngleDeg: number; // from horizontal
  radiusM?: number; // if known, use instead of angle
}

export interface CraneLoadResult {
  radiusM: number;
  boomLengthM: number;
  loadMomentTm: number; // tonne-meters
  tipLoadTonnes: number; // max load at this radius (simplified)
  utilization: number;
  warning?: string;
}

export function calculateCraneLoad(input: CraneLoadInput): CraneLoadResult | null {
  const { loadWeightTonnes, boomLengthM, boomAngleDeg, radiusM: inputRadius } = input;
  
  if (loadWeightTonnes <= 0 || boomLengthM <= 0) {
    return null;
  }
  
  let radiusM: number;
  if (inputRadius && inputRadius > 0) {
    radiusM = inputRadius;
  } else if (boomAngleDeg > 0 && boomAngleDeg <= 90) {
    const angleRad = (boomAngleDeg * Math.PI) / 180;
    radiusM = boomLengthM * Math.cos(angleRad);
  } else {
    return null;
  }
  
  const loadMomentTm = loadWeightTonnes * radiusM;
  
  // Simplified capacity model: assumes standard crawler crane curve
  // Real capacity depends on specific crane model and load chart
  // This gives conservative estimate for preliminary planning
  const maxCapacityAtRadius = 50 / (radiusM + 2); // simplified inverse curve
  
  const utilization = loadWeightTonnes / maxCapacityAtRadius;
  
  let warning: string | undefined;
  if (utilization > 0.85) {
    warning = 'Load is near crane capacity. Consult crane load chart for exact capacity.';
  } else if (utilization > 1.0) {
    warning = 'Load EXCEEDS estimated capacity. DO NOT PROCEED without verified load chart.';
  }
  
  return {
    radiusM,
    boomLengthM,
    loadMomentTm,
    tipLoadTonnes: maxCapacityAtRadius,
    utilization,
    warning,
  };
}

// ============================================
// 5. RIGGING WEIGHT CALCULATOR (bonus utility)
// ============================================

export interface RiggingWeightInput {
  component: 'shackle' | 'sling' | 'wire-rope' | 'chain';
  size: string; // model or diameter
  quantity: number;
}

export interface RiggingWeightResult {
  totalWeightKg: number;
  components: Array<{ name: string; weightKg: number; quantity: number }>;
}

// Predefined component weights for common items
export const COMPONENT_WEIGHTS: Record<string, number> = {
  'shackle-g-209-1t': 0.13,
  'shackle-g-209-2t': 0.28,
  'shackle-g-209-3.25t': 0.48,
  'shackle-g-209-4.75t': 0.75,
  'shackle-g-2130-2t': 0.32,
  'shackle-g-2130-4.75t': 0.85,
  'wire-rope-12mm': 0.52, // per meter
  'wire-rope-16mm': 0.93,
  'wire-rope-20mm': 1.45,
  'chain-8mm': 1.4, // per meter, grade 80
  'chain-10mm': 2.2,
  'chain-13mm': 3.8,
};

export function calculateRiggingWeight(input: RiggingWeightInput): RiggingWeightResult | null {
  const key = `${input.component}-${input.size}`;
  const unitWeight = COMPONENT_WEIGHTS[key];
  
  if (!unitWeight || input.quantity <= 0) {
    return null;
  }
  
  const totalWeight = unitWeight * input.quantity;
  
  return {
    totalWeightKg: totalWeight,
    components: [{ name: input.size, weightKg: unitWeight, quantity: input.quantity }],
  };
}
