"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

// --- SVG OVERLAY PATHS (Abbreviated) ---
const BALLOT_PATHS = [
  "M226.29,56.41l-.47-45.43c-.04-4.24-4.61-9.15-8.99-8.85l-36.07,2.47-55.94,2.7-33.75,1.91-63.24,3.34L0,13.98l1.1,74.82,1.57,95.49c.18,11.22,2.8,22.46.05,33.7-.01.53-.01,1.06-.03,1.59-.04.9-.09,1.8-.15,2.7,1.62-.69,3.24-1.31,4.88-1.85-.09-1.17-.16-2.33-.18-3.49-.18.06-.35.12-.54.18.28-1.35.48-2.71.62-4.07.04-.65.09-1.29.16-1.94.54-8.71-1.13-17.72-1.19-27.36l-.51-84.85-1.5-29.55-.1-50.36,107.3-6.04,51.56-2.31,47.12-1.55,9.89-1.51,4.47,93.01c7.87-14.79,1.93-29.62,1.78-44.16Z",
  "M74.45,146.33c-11.7,2.88-24,1.33-36.25.72l-.72-37.57c14.33.35,26.82.7,41.08-4.48-11.1,17.37.06,27.22-4.12,41.32M55.46,139.46c-6.28-5.56-9.84-7.73-11.91-13.94,5.14-.76,7.6,2.61,10.31,6.81,5.72-5.08,8.78-11.01,12.65-17.97l-24.57-.19v28.95s28.7-.85,28.7-.85l-2.35-19.76-12.83,16.95Z",
  "M228.54,314.4c-2.37,2.65-4.28.99-4.91.16-.53-.7-.06-2.93.85-3.19.84-.24,2.46.42,5.3,1.48l.79-33.12-3.15-78.4,4.37.07,2.2,52.01,2.28,54.69c.05,1.24-1.4,4.57-1.87,5.65-.54,1.22-2.61,1.67-5.86.65",
  "M57.88,240.57c-.14-.25-.29-.5-.45-.77h16c.26,9.65-1.8,18.27,1.62,28.05-5.76,2.35-12.03,3.54-18.56,3.02l-.15-.15c-.25.46-.53.89-.83,1.32.02.01.04.02.06.04-.03.61-.11,1.22-.22,1.82,1.65.36,3.25,1,4.73,1.85.05-.12.1-.23.16-.35,7.81.33,13.91.06,19.69-4.98-3.21-10.99-2.41-21.56-1.71-34.3-6.51-2.6-14.03-.94-20.95.62-.16.33-.33.65-.5.95-.5.88-1.01,1.61-1.53,2.25.25.04.49.07.74.11.65.1,1.28.28,1.9.51Z",
  "M136.03,256.92l-38.06.15-.02-3.43,37.02-1.65,34.9-1.3c9.28-.35,18.82-6.48,28.58.93l-28.8,3.11-33.62,2.19Z",
  "M58.66,65.35c.04,1.88,4.29,4.3,4.78,6.09.63,2.31-1.33,7.2-4.37,8.2-5.46,1.8-10.93,1.33-16.47.39-1.6-8.28-5.48-17.69-1.67-25.99,2.41-5.25,14.07-2.96,17.74.14,4.36,3.68,1.97,6.93,0,11.17M49.44,56.59c-2.64.84-4.08,4.37-2.98,7.06.65,1.6,4.25,1.77,6.56.39,1.45-.87,3.23-4.1,1.43-5.5-1.01-.78-3.8-1.96-5.02-1.95M56.51,70.23c-3.76-2.54-9.8-1.03-10.21.95-1.07,5.24,4.2,6.24,7.84,4.71,1.69-.71,5.02-3.87,2.37-5.66",
  "M146.11,77.01c-7.26-3.34-8.18-8.26-8.26-14.41-.09-6.91,2.39-11.97,7.4-14.51,5.07-2.57,12.2-2.33,15.97,2.6,4.36,5.7,6.15,13.58,1.89,19.61-3.01,4.28-10.19,9.83-16.99,6.7M155.21,70.74c6.48-3,4.1-18.23-3.13-18.75-6.84-.5-8.67,6.95-8.19,11.01.6,4.96,3.45,11.38,11.31,7.74",
  "M139.63,124.86l-45.5,1.89c14.34-9.09,30.53-4.59,46.47-6.05,17.5-1.6,33.63-3.4,51.58-1.63-2.07,4.22-6.46,4.07-11.25,4.24l-41.31,1.54Z",
  "M177.49,317.49l-77.35,4.43-.04-3.71,99.72-5.11c.96.79,1.51,1.82,1.41,3.11l-23.73,1.28Z",
  "M91.43,80.84c-6.88-.57-6.64-5.76-8.7-6.62-3.48-1.45-9.98-1.76-11.32,1.86l-1.61,4.34c-.52,1.41-6.18-.29-5.63-1.68l10.41-26.74c2.59-6.64,13.43,9.95,16.85,28.84",
  "M140.57,207.69l-42.98-.03c9.59-5.57,20.45-3.24,31.67-3.85l35.88-1.95,31.71.02c-5.77,4.77-12.9,3.73-20.41,4.09l-35.86,1.72Z",
  "M127.1,171.96l-31.29.31c.16-2.18,2.27-4.32,4.22-4.37l46.28-1.04,48.28-.66c-10.55,4.84-21.93,3.09-33.9,3.79l-33.6,1.96Z",
  "M231.52,184.44c.07,1.43-6.54.43-5.37-2.1.5-1.08.85-3.67.79-5.42l-2.33-77.87c5.35,7.31,3.68,16.1,4.03,23.61l2.87,61.79Z",
  "M180.18,76.28c-11.13-1.24-3.49-19.43-6.4-23.55-1.15-1.63-5.48-.7-9.59-2.82,6.13-5.89,17.42-7.48,25.81-2.84-1.08,3.41-5.79,4.08-8.57,5.17l-1.25,24.03Z",
  "M123.07,73.48c3.52.12,6.56-1.19,7.71-1.83,2.12-1.18,7.04-.06,5.39,5.33-4.33,2.43-13.33,1.87-19.37.06l-.89-27.58c2.49-.58,4.12-.62,6.72.12l.44,23.89Z",
  "M113.62,77.52c-5.42,1.33-11.13.91-18.04.57,1.91-14.82-5.02-23.67.02-27.98,1.22-1.04,4.45.21,4.48,3.63l.19,19.86,12.3.16c1.59,1.07,1.4,2.98,1.07,3.77",
  "M76.24,323.36c-8.81-.8-17.71,3.19-26-1.84l29.97-3.03c1.67,5.11-1.33,6.28-3.97,4.87",
  "M99.35,320.23c-5.89,3.51-12.61,3.67-18.67-.16,6.12-3.33,11.42-3.87,18.67.16",
  "M214.84,313.73c.72,5.69-5.97,5.69-5.25,0,.45-3.54,4.8-3.54,5.25,0",
  "M226.22,188.46c.59-.77,3.55-.79,4.88-.44.9.24,2.16,1.59,1.24,3.28-1.09,2.01-2.5,1.11-3.36,1.35-2.16.61-4.82-1.48-2.76-4.18",
  "M226.16,195.21c.61-.84,3.87-.76,4.91-.48.9.24,2.2,1.59,1.28,3.29-1.08,1.99-2.47,1.11-3.39,1.35-2.12.57-4.72-1.52-2.8-4.16",
  "M203.82,311.67c1.09-1.63,3.85-.38,3.85.58l.03,4.34c0,.87-1.05,1.6-2.37.33-1.55-1.49-3.04-2.98-1.52-5.25",
];

const STICKER_PATHS = [
  "M391.61,120.57c-27.63,23.15-66.26,22.47-92.9-3.34-12.9-12.5-19.19-27.15-19.79-45.84-1.07-33.83,20.5-61.81,54.36-69.82,25.97-6.15,52.88,6.29,68.06,28.8,19.35,28.7,16.98,67.82-9.74,90.21M343.4,103.09l58.93-.2c.65-2.44.67-4.24-.1-6.68l-59.43-.3c-1.74-1.85-.38-6.39,1.38-7.69,2.59-1.9,4.81.36,7.8.4l54.83.72c6.6-23.23.93-47.52-14.89-65.39-10.06-11.36-26.4-17.01-40.02-19.21l-4.31,3.06c-.6.42-2.8-1.07-4.04-3.18-32.4,2.22-58.67,26.9-59.8,60.03-1.98,25.8,10.39,50.13,33.11,61.3l-1.26-6.38c-.23-1.15,2.36-1.06,3.22-1.18,2.35-.31,4.04,1.75,3.26,3.53-.34.78-.91,2.28-4.25,4.44,17.4,6.48,37.51,9.79,56.02-.13l-30.88-1.51c-2.59-.13-3.11-3.18-2.05-4.03.72-.58,1.89-2.1,3.61-2.1l38.14.16c5.83.02,10.97-2.87,11.22-9.09l-51.29-.11c-1.37-1.5-.75-6.17.78-6.47",
  "M347.33,78.25l-1.21-19.49-9.08.61c1.59,6.99,1.61,12.27-2.3,16.59-3.36,3.72-8.59,4.42-13.45,1.96-5.86-2.98-7.23-8.13-5.76-15.03.98-4.59,3.18-7.9,5.85-8.98,4.99-2.01,10.34.51,14.21,2.85,6.39-3.48,17.08-5.84,24.4-.41-.48,3.06-5.11,3.99-8.51,1.42l-.31,19.46c-1.06,1.54-2.96,1.4-3.84,1.04M324.35,73.66c7.73,2.19,7.86-4.97,7.77-7.63-.07-1.98-.96-6.39-4.95-7.56-5.86-1.71-8.01,13.71-2.82,15.19",
  "M395.83,54.73c6.43,2.78,6.87,20.29,1.07,23.4-3.35,1.8-7.22,2.93-13.72,2.41l-.62-26.4c4.97-1.18,9.28-1.14,13.27.58M387.78,72.92c2.48,2.83,7.51-.18,7.99-2.75.56-2.99.41-5.17-.79-7.69-.94-1.97-5.72-3.46-7.16-1.32-1.55,2.31-1.79,9.59-.03,11.76",
  "M371.65,69.82c-5.68-3.3-6.93,5.19-1.3,4.12,3.49-.67,6.61-.37,7.58.98,1.16,1.62.46,5.32-1.72,5.51-6.38.56-11.22.96-16.27-2.47,2.96-8.17,2.78-15.56,2.26-23.95,10.86-1.97,17.58,1.28,14.87,4.2-2.34,2.51-11.54-.19-10.04,3.35,1.58,3.72,15.8,3.31,4.63,8.26",
  "M303.45,69.16c1.85-6.28.89-12.71,8.99-16.8.3,10-2.28,20.45-9.22,28.67-6.06-8.65-10.06-26.59-10.33-26.25.6-.76,2.07-1.86,5.87-1.46,1.43,4.83.99,10.15,4.68,15.83",
  "M351.36,39.7c.33,4.19-6.96,3.91-6.93.95.19-18.69-3.86-25.38,3.35-25.34,8.02.05,2.22,7.28,3.58,24.39",
  "M323.85,40.51c-4.06-2.36-8.92-1.05-12.63-.65.45-3.83,1.27-7.42-4.05-12.07,4.96.12,6.74-.53,10.05-1.78,1.47.22,4.15,2.61,7.02,1.21-1.19,4.31-1.43,6.12-.39,13.29",
  "M383.87,39.42c-3.46.03-7.55-1.03-11.7.71-1.73-6.15.28-13.82,6.98-14.26,3.28-.22,5.84,6.69,4.72,13.55",
  "M291.17,85.51c2.28-1.3,3.66-.08,5.15,1.58.97,1.08,2.14,3.13-.17,4.44-1.41.79-3.74.53-5.5-.75-1.45-1.05-3.13-3.18.52-5.27",
  "M333.62,125c-2.17.81-5.07-2.15-4.45-3.12.68-1.07,1.26-3.87,2.23-4.5,1.76-1.15,2.66.66,3.38,1.54.95,1.17,2.04,4.9-1.15,6.08",
  "M327,109.04c.6-2.77,5.17-2.54,6.1-.64.55,1.12-.02,2.95-1.87,4.71-1.17,1.11-5.11.01-4.23-4.07",
  "M313.32,97.93c1.84-3.42,4.5-1.25,5.44.38,1.09,1.9-.02,2.51-1.17,3.65-2.59,2.57-6.43,0-4.26-4.04",
  "M297.63,97.93c1.84-3.42,4.5-1.25,5.44.38,1.09,1.9-.02,2.51-1.17,3.65-2.59,2.57-6.43,0-4.26-4.04",
  "M320.29,87.72c.65-.86,3.64-.84,4.93-.5.89.24,2.16,1.59,1.24,3.28-1.09,2-2.48,1.1-3.37,1.35-2.17.62-4.74-1.57-2.8-4.13",
  "M331.53,87.65c.58-.77,3.62-.76,4.89-.43.9.23,2.17,1.59,1.25,3.28-1.08,1.99-2.55,1.12-3.45,1.36-1.75.47-4.81-1.39-2.69-4.22",
  "M333.32,98.4c1.63,5.55-5.24,6.48-4.96.81-.17-3.44,3.86-4.57,4.96-.81",
];

const SAMPLE_STEP = 1;

export interface OverlayConfig {
  left: string; // Percentage from left edge of 480x800 stage
  top: string; // Percentage from top edge of 480x800 stage
  width: string; // Width relative to 480x800 stage
  maskXMin: number; // Left bound fraction (0.0 to 1.0)
  maskXMax: number; // Right bound fraction (0.0 to 1.0)
  maskYMin: number; // Top bound fraction (0.0 to 1.0)
  maskYMax: number; // Bottom bound fraction (0.0 to 1.0)
}

// Proportional configuration matching vote-v2.png (Chest & Hand region)
const VOTE_V2_OVERLAY_CONFIG: OverlayConfig = {
  // --- CSS OVERLAY POSITION (Proportional to 480x800 container) ---
  left: `${(150 / 480) * 100}%`, // ~21.8% (Pixel X = 105)
  top: `${(555 / 800) * 100}%`, // ~66.8% (Pixel Y = 535)
  width: `${(210 / 480) * 100}%`, // ~54.1% (Width = 260px)

  // --- PARTICLE SAMPLING EXCLUSION BOX (Fractions 0.0 to 1.0) ---
  maskXMin: 160 / 480, // 0.218 (Left edge)
  maskXMax: 340 / 480, // 0.760 (Right edge)
  maskYMin: 535 / 800, // 0.668 (Top edge - below chin/neck)
  maskYMax: 690 / 800, // 0.920 (Bottom edge)
};

const DEFAULT_CROWD_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1000" width="600" height="1000"><rect width="600" height="1000" fill="%23131b3e"/><circle cx="300" cy="120" r="3" fill="%23fff"/><circle cx="150" cy="80" r="2" fill="%23fff"/><circle cx="450" cy="180" r="2.5" fill="%23fff"/><circle cx="90" cy="220" r="2" fill="%23fff"/><circle cx="520" cy="100" r="3" fill="%23fff"/><circle cx="300" cy="820" r="50" stroke="%23fff" stroke-width="4" fill="none"/><path d="M 170 980 Q 200 880 250 880 L 350 880 Q 400 880 430 980" stroke="%23fff" stroke-width="4" fill="none"/><path d="M 250 880 L 300 930 L 350 880 M 300 930 L 300 1000" stroke="%23fff" stroke-width="3" fill="none"/></svg>`;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    if (src.startsWith("http://") || src.startsWith("https://")) {
      img.crossOrigin = "Anonymous";
    }
    img.onload = () => resolve(img);
    img.onerror = () => {
      const fallback = new Image();
      fallback.onload = () => resolve(fallback);
      fallback.src = DEFAULT_CROWD_SVG;
    };
    img.src = src;
  });
}

function extractTargetCoords(
  img: HTMLImageElement,
  isVoteImage: boolean = false,
  enableOverlayMask: boolean = true,
  overlayConfig: OverlayConfig = VOTE_V2_OVERLAY_CONFIG,
) {
  const W = 480;
  const aspect = (img.height || 800) / (img.width || 480);
  const H = Math.round(W * aspect);

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const coords: { x: number; y: number; brightness: number }[] = [];
  if (!ctx) return { coords, W, H, aspect };

  ctx.drawImage(img, 0, 0, W, H);
  const imgData = ctx.getImageData(0, 0, W, H);
  const pixels = imgData.data;

  const bgR = pixels[0];
  const bgG = pixels[1];
  const bgB = pixels[2];
  const bgLuminance = 0.5 * bgR + 0.587 * bgG + 0.5 * bgB;

  for (let y = 0; y < H; y += SAMPLE_STEP) {
    for (let x = 0; x < W; x += SAMPLE_STEP) {
      const idx = (y * W + x) * 4;
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];
      const a = pixels[idx + 3];

      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      if (isVoteImage && enableOverlayMask) {
        const normX = x / W;
        const normY = y / H;

        const isOverlayRegion =
          normX >= overlayConfig.maskXMin &&
          normX <= overlayConfig.maskXMax &&
          normY >= overlayConfig.maskYMin &&
          normY <= overlayConfig.maskYMax;

        if (isOverlayRegion) continue;
      }

      if (a > 30 && luminance > Math.max(bgLuminance + 25, 75)) {
        coords.push({ x, y, brightness: luminance });
      }
    }
  }

  return { coords, W, H, aspect };
}

async function prepareParticleData(
  image1Src: string,
  image2Src: string,
  enableOverlayMask: boolean,
  overlayConfig: OverlayConfig,
  onComplete: (data: {
    initialPos: Float32Array;
    targetPos1: Float32Array;
    targetPos2: Float32Array;
    sizes: Float32Array;
    seeds: Float32Array;
    delays: Float32Array;
    count: number;
  }) => void,
) {
  const img1 = await loadImage(image1Src);
  const img2 = await loadImage(image2Src);

  const data1 = extractTargetCoords(img1, false, false, overlayConfig);
  const data2 = extractTargetCoords(
    img2,
    true,
    enableOverlayMask,
    overlayConfig,
  );

  const count1 = data1.coords.length;
  const count2 = data2.coords.length;
  const count = Math.max(count1, count2);

  if (count === 0) return;

  const initialPos = new Float32Array(count * 3);
  const targetPos1 = new Float32Array(count * 3);
  const targetPos2 = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const seeds = new Float32Array(count * 3);
  const delays = new Float32Array(count);

  const heightSpan = 9.6;
  const widthSpan1 = heightSpan / data1.aspect;
  const widthSpan2 = heightSpan / data2.aspect;

  for (let i = 0; i < count; i++) {
    const pt1 = data1.coords[i % count1];
    targetPos1[i * 3] = (pt1.x / data1.W - 0.5) * widthSpan1;
    targetPos1[i * 3 + 1] = (0.5 - pt1.y / data1.H) * heightSpan;
    targetPos1[i * 3 + 2] = (1.0 - pt1.y / data1.H) * 0.5 - 0.25;

    const pt2 = data2.coords[i % count2];
    targetPos2[i * 3] = (pt2.x / data2.W - 0.5) * widthSpan2;
    targetPos2[i * 3 + 1] = (0.5 - pt2.y / data2.H) * heightSpan;
    targetPos2[i * 3 + 2] = (1.0 - pt2.y / data2.H) * 0.5 - 0.25;

    initialPos[i * 3] = (Math.random() - 0.5) * 26.0;
    initialPos[i * 3 + 1] = (Math.random() - 0.5) * 32.0;
    initialPos[i * 3 + 2] = (Math.random() - 0.5) * 2.5;

    sizes[i] = (pt1.brightness / 255) * 0.18 + 0.12;

    seeds[i * 3] = Math.random() * 100;
    seeds[i * 3 + 1] = Math.random() * 100;
    seeds[i * 3 + 2] = Math.random() * 100;

    delays[i] = Math.random() * 1.5;
  }

  onComplete({
    initialPos,
    targetPos1,
    targetPos2,
    sizes,
    seeds,
    delays,
    count,
  });
}

function ParticlesMesh({
  crowdSrc,
  voteSrc,
  enableOverlayMask,
  overlayConfig,
  animRef,
  onParticlesReady,
}: {
  crowdSrc: string;
  voteSrc: string;
  enableOverlayMask: boolean;
  overlayConfig: OverlayConfig;
  animRef: React.MutableRefObject<{
    uProgress: { value: number };
    uNoise: { value: number };
    uOpacity: { value: number };
  }>;
  onParticlesReady: () => void;
}) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [particleData, setParticleData] = useState<{
    initialPos: Float32Array;
    targetPos1: Float32Array;
    targetPos2: Float32Array;
    sizes: Float32Array;
    seeds: Float32Array;
    delays: Float32Array;
    count: number;
  } | null>(null);

  useEffect(() => {
    prepareParticleData(
      crowdSrc,
      voteSrc,
      enableOverlayMask,
      overlayConfig,
      (data) => {
        setParticleData(data);
        onParticlesReady();
      },
    );
  }, [crowdSrc, voteSrc, enableOverlayMask, overlayConfig, onParticlesReady]);

  const shaderUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: animRef.current.uProgress.value },
      uNoise: { value: animRef.current.uNoise.value },
      uOpacity: { value: animRef.current.uOpacity.value },
      uScale: { value: 1.0 },
    }),
    [],
  );

  useFrame((state) => {
    if (!pointsRef.current) return;
    const shaderMat = pointsRef.current.material as THREE.ShaderMaterial;
    shaderMat.uniforms.uTime.value = state.clock.getElapsedTime();
    shaderMat.uniforms.uProgress.value = animRef.current.uProgress.value;
    shaderMat.uniforms.uNoise.value = animRef.current.uNoise.value;
    shaderMat.uniforms.uOpacity.value = animRef.current.uOpacity.value;

    const containerScale = Math.max(0.35, state.size.height / 800.0);
    shaderMat.uniforms.uScale.value = containerScale;
  });

  if (!particleData) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.initialPos, 3]}
        />
        <bufferAttribute
          attach="attributes-aTargetPos1"
          args={[particleData.targetPos1, 3]}
        />
        <bufferAttribute
          attach="attributes-aTargetPos2"
          args={[particleData.targetPos2, 3]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[particleData.sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-aSeed"
          args={[particleData.seeds, 3]}
        />
        <bufferAttribute
          attach="attributes-aDelay"
          args={[particleData.delays, 1]}
        />
      </bufferGeometry>

      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={shaderUniforms}
        vertexShader={`
          uniform float uTime;
          uniform float uProgress;
          uniform float uNoise;
          uniform float uOpacity;
          uniform float uScale;

          attribute vec3 aTargetPos1;
          attribute vec3 aTargetPos2;
          attribute float aSize;
          attribute vec3 aSeed;
          attribute float aDelay;

          varying float vAlpha;

          void main() {
            vec3 pInitial = position;

            vec3 staticJitter = vec3(
              sin(uTime * 15.0 + aSeed.x * 99.0) * 0.05 * uNoise,
              cos(uTime * 15.0 + aSeed.y * 99.0) * 0.05 * uNoise,
              sin(uTime * 25.0 + aSeed.z * 99.0) * 0.04 * uNoise
            );

            float stagger = aDelay * 0.12;
            vec3 currentPos;

            if (uProgress <= 1.0) {
              float p1 = clamp((uProgress - stagger) / max(0.001, 1.0 - stagger), 0.0, 1.0);
              float ease1 = 1.0 - pow(1.0 - p1, 3.0);

              vec3 startPos = pInitial + staticJitter;
              currentPos = mix(startPos, aTargetPos1, ease1);
              vAlpha = uOpacity * mix(0.75, 0.95, ease1);
            } else {
              float stage2P = uProgress - 1.0;
              float p2 = clamp((stage2P - stagger) / max(0.001, 1.0 - stagger), 0.0, 1.0);
              float ease2 = p2 * p2 * (3.0 - 2.0 * p2);

              currentPos = mix(aTargetPos1, aTargetPos2, ease2);
              vAlpha = uOpacity * 0.95;
            }

            vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            // Direct fine dot size
            float currentSize = aSize * 0.25;
            gl_PointSize = max(1.0, currentSize * (350.0 / -mvPosition.z) * uScale);
          }
        `}
        fragmentShader={`
          varying float vAlpha;

          void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);
            if (dist > 0.5) discard;

            float dotAlpha = smoothstep(0.5, 0.05, dist);
            gl_FragColor = vec4(1.0, 1.0, 1.0, dotAlpha * vAlpha);
          }
        `}
      />
    </points>
  );
}

export default function Module0Animation({
  crowdImageSrc = "/crowd-v2.png",
  voteImageSrc = "/vote-v2.png",
  enableVectorOverlay = true,
  overlayConfig = VOTE_V2_OVERLAY_CONFIG,
  className = "",
  onComplete,
}: {
  crowdImageSrc?: string;
  voteImageSrc?: string;
  enableVectorOverlay?: boolean;
  overlayConfig?: OverlayConfig;
  className?: string;
  onComplete?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentProgress, setCurrentProgress] = useState(0.0);
  const [isParticlesReady, setIsParticlesReady] = useState(false);

  const animRef = useRef({
    uProgress: { value: 0.0 },
    uNoise: { value: 1.0 },
    uOpacity: { value: 0.0 },
  });

  useEffect(() => {
    if (!isParticlesReady) return;

    const tl = gsap.timeline({
      onUpdate: () => {
        setCurrentProgress(animRef.current.uProgress.value);
      },
      onComplete: () => {
        gsap.delayedCall(1, () => {
          onComplete?.();
        });
      },
    });

    // 1. Fade in WebGL dots
    tl.to(animRef.current.uOpacity, {
      value: 1.0,
      duration: 0.8,
      ease: "power2.out",
    })
      // 2. Stop jitter noise
      .to(animRef.current.uNoise, {
        value: 0.0,
        duration: 0.6,
        ease: "power2.out",
      })
      // 3. Dots fall & assemble into crowd-v2.png
      .to(animRef.current.uProgress, {
        value: 1.0,
        duration: 3.0,
        ease: "power3.inOut",
      })
      .to({}, { duration: 1.0 })
      // 4. Morph into vote-v2.png
      .to(animRef.current.uProgress, {
        value: 2.0,
        duration: 3.2,
        ease: "power3.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [isParticlesReady, onComplete]);

  const voteOverlayOpacity = Math.max(
    0,
    Math.min(1, (currentProgress - 1.25) / 0.6),
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[685px] bg-[#222f5f] overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="relative w-full h-full max-w-full max-h-full aspect-[480/800] flex items-center justify-center overflow-hidden">
        {/* THREE.JS CANVAS */}
        <div className="absolute inset-0 z-0">
          <Canvas
            dpr={[1, 2]}
            gl={{ powerPreference: "high-performance", antialias: false }}
            camera={{ position: [0, 0, 10], fov: 50 }}
          >
            <ParticlesMesh
              crowdSrc={crowdImageSrc}
              voteSrc={voteImageSrc}
              enableOverlayMask={enableVectorOverlay}
              overlayConfig={overlayConfig}
              animRef={animRef}
              onParticlesReady={() => setIsParticlesReady(true)}
            />
          </Canvas>
        </div>

        {/* --- PROPORTIONAL VECTOR OVERLAY --- */}
        {enableVectorOverlay && (
          <div
            style={{
              position: "absolute",
              left: overlayConfig.left,
              top: overlayConfig.top,
              width: overlayConfig.width,
              aspectRatio: "414.05 / 324.11",
              transform: `scale(${0.88 + voteOverlayOpacity * 0.12})`,
              opacity: voteOverlayOpacity,
              transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
              pointerEvents: "none",
              zIndex: 25,
              background: "transparent",
              filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.45))",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 414.05 324.11"
              width="100%"
              height="100%"
              style={{ background: "transparent" }}
            >
              <g>
                {BALLOT_PATHS.map((d, i) => (
                  <path key={`ballot-${i}`} fill="#ffffff" d={d} />
                ))}
              </g>
              <g>
                {STICKER_PATHS.map((d, i) => (
                  <path key={`sticker-${i}`} fill="#ffffff" d={d} />
                ))}
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
