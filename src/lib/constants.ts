import * as THREE from 'three';

export interface CameraKeyframe {
  progress: number;
  position: [number, number, number];
  target: [number, number, number];
  fov?: number;
}

// 6 Major Landmark Coordinates along the 3D ocean timeline
export const CAMERA_KEYFRAMES: CameraKeyframe[] = [
  // 1. Torii Gate Entrance (Grand Centered Scale & Low Eye-Level Perspective)
  {
    progress: 0.0,
    position: [0, 2.2, 23.5],
    target: [0, 4.6, 0],
    fov: 58
  },
  // Approaching & Passing Through Torii
  {
    progress: 0.10,
    position: [0, 2.2, 10.0],
    target: [0, 4.2, -8],
    fov: 56
  },
  // 2. About Me Stone Monument (Asymmetric left composition)
  {
    progress: 0.20,
    position: [1.8, 2.4, -2.5],
    target: [-1.2, 2.8, -12],
    fov: 52
  },
  {
    progress: 0.28,
    position: [2.2, 2.3, -5.5],
    target: [-1.4, 2.7, -13],
    fov: 52
  },
  // 3. Transition & Project Island (Lotus & Markers)
  {
    progress: 0.38,
    position: [0, 4.5, -17],
    target: [0, 2.2, -28],
    fov: 55
  },
  {
    progress: 0.48,
    position: [0, 3.2, -22],
    target: [0, 1.8, -28],
    fov: 52
  },
  // 4. Cherry Blossom Tree & Project Screens
  {
    progress: 0.58,
    position: [-8, 4.2, -32],
    target: [-15, 4.5, -46],
    fov: 54
  },
  {
    progress: 0.68,
    position: [-11, 3.6, -38],
    target: [-15, 4.2, -46],
    fov: 52
  },
  // 5. Open Ocean Expanse (Tranquil, sky & reflective water)
  {
    progress: 0.76,
    position: [4, 2.8, -32],
    target: [12, 2.6, -42],
    fov: 56
  },
  {
    progress: 0.84,
    position: [10, 2.4, -30],
    target: [18, 2.2, -40],
    fov: 54
  },
  // 6. Contact Raft & Wooden Signboard
  {
    progress: 0.94,
    position: [18, 2.1, -30.5],
    target: [18, 2.4, -38],
    fov: 50
  },
  {
    progress: 1.0,
    position: [18, 1.9, -32.5],
    target: [18, 2.5, -38],
    fov: 48
  }
];

// Helper to interpolate between camera keyframes along the scroll progress
export function interpolateCamera(progress: number): {
  position: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
} {
  const p = Math.max(0, Math.min(1, progress));

  let index = 0;
  for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
    if (p >= CAMERA_KEYFRAMES[i].progress && p <= CAMERA_KEYFRAMES[i + 1].progress) {
      index = i;
      break;
    }
  }

  const k1 = CAMERA_KEYFRAMES[index];
  const k2 = CAMERA_KEYFRAMES[Math.min(index + 1, CAMERA_KEYFRAMES.length - 1)];

  const range = k2.progress - k1.progress;
  const localT = range > 0 ? (p - k1.progress) / range : 0;
  // Smooth cubic easing between keyframes
  const t = localT * localT * (3 - 2 * localT);

  const pos1 = new THREE.Vector3(...k1.position);
  const pos2 = new THREE.Vector3(...k2.position);
  const target1 = new THREE.Vector3(...k1.target);
  const target2 = new THREE.Vector3(...k2.target);

  const position = new THREE.Vector3().lerpVectors(pos1, pos2, t);
  const target = new THREE.Vector3().lerpVectors(target1, target2, t);
  const fov = (k1.fov || 52) + ((k2.fov || 52) - (k1.fov || 52)) * t;

  return { position, target, fov };
}

export const THEME_COLORS = {
  toriiRed: '#dc2626',
  toriiDark: '#7f1d1d',
  vermilion: '#e11d48',
  gold: '#fbbf24',
  cherryPink: '#f472b6',
  cherrySoft: '#fbcfe8',
  waterDeep: '#0284c7',
  waterSurface: '#38bdf8',
  waterHighlight: '#e0f2fe',
  stoneDark: '#0f172a',
  stoneLight: '#334155',
  woodDark: '#451a03',
  woodMedium: '#78350f'
};

export type WaypointId = 'home' | 'torii' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';

export interface Waypoint {
  id: WaypointId;
  label: string;
  japaneseLabel: string;
  cameraPosition: [number, number, number];
  targetPosition: [number, number, number];
  description: string;
}

export const WAYPOINTS: Record<WaypointId, Waypoint> = {
  home: {
    id: 'home',
    label: 'ENTRANCE',
    japaneseLabel: '入口',
    cameraPosition: [0, 2.4, 26],
    targetPosition: [0, 3.8, 0],
    description: 'The Gateway to the Realm'
  },
  torii: {
    id: 'torii',
    label: 'TORII GATE',
    japaneseLabel: '鳥居',
    cameraPosition: [0, 2.2, 10],
    targetPosition: [0, 3.6, -8],
    description: 'Sacred Portal of Transit'
  },
  about: {
    id: 'about',
    label: 'ABOUT',
    japaneseLabel: '概要',
    cameraPosition: [1.8, 2.4, -2.5],
    targetPosition: [-1.2, 2.8, -12],
    description: 'The Stone Monolith of Origin'
  },
  projects: {
    id: 'projects',
    label: 'WORK',
    japaneseLabel: '実績',
    cameraPosition: [0, 3.2, -22],
    targetPosition: [0, 1.8, -28],
    description: 'The Lotus Basin of Creations'
  },
  skills: {
    id: 'skills',
    label: 'SKILLS',
    japaneseLabel: '技術',
    cameraPosition: [0, 3.2, -22],
    targetPosition: [0, 1.8, -28],
    description: 'The Sacred Runic Shrines'
  },
  experience: {
    id: 'experience',
    label: 'JOURNEY',
    japaneseLabel: '経歴',
    cameraPosition: [-11, 3.6, -38],
    targetPosition: [-15, 4.2, -46],
    description: 'The Eternal Sakura Tree'
  },
  contact: {
    id: 'contact',
    label: 'CONTACT',
    japaneseLabel: '連絡',
    cameraPosition: [18, 2.1, -30.5],
    targetPosition: [18, 2.4, -38],
    description: 'The Traveler’s Raft'
  }
};
