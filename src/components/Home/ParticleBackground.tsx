'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface MeshNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface DataStreak {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
  color: string;
}

export function ParticleBackground() {
  const { isDay } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDayRef = useRef(isDay);

  useEffect(() => {
    isDayRef.current = isDay;
  }, [isDay]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resizeCanvas = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Smooth Cursor Tracking with Elastic Damping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 150
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Professional Node Color Palettes
    const nightPalette = [
      { fill: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)' }, // Electric Cyan
      { fill: '#60a5fa', glow: 'rgba(96, 165, 250, 0.4)' },  // Soft Blue
      { fill: '#818cf8', glow: 'rgba(129, 140, 248, 0.4)' }, // Indigo / Violet
      { fill: '#22d3ee', glow: 'rgba(34, 211, 238, 0.45)' }, // Radiant Cyan
      { fill: '#ffffff', glow: 'rgba(255, 255, 255, 0.6)' }  // Pure White
    ];

    const dayPalette = [
      { fill: '#0284c7', glow: 'rgba(2, 132, 199, 0.4)' },
      { fill: '#2563eb', glow: 'rgba(37, 99, 235, 0.35)' },
      { fill: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.4)' },
      { fill: '#4f46e5', glow: 'rgba(79, 70, 229, 0.35)' }
    ];

    // Responsive Node Count
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;
    const nodeCount = isMobile ? 30 : isTablet ? 45 : 65;

    const nodes: MeshNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const col = nightPalette[i % nightPalette.length];
      const baseRadius = Math.random() * 1.5 + 1.0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius,
        radius: baseRadius,
        color: col.fill,
        glowColor: col.glow,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Sleek Luminous Data Light Streaks
    const streaks: DataStreak[] = [];
    const maxStreaks = 2;

    const spawnStreak = () => {
      if (streaks.filter((s) => s.active).length < maxStreaks && Math.random() < 0.015) {
        streaks.push({
          x: Math.random() * width * 1.2,
          y: Math.random() * (height * 0.35),
          length: Math.random() * 110 + 70,
          speed: Math.random() * 7 + 8,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.15,
          alpha: 1.0,
          active: true,
          color: Math.random() > 0.5 ? '#38bdf8' : '#818cf8'
        });
      }
    };

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012;
      const dayMode = isDayRef.current;
      const palette = dayMode ? dayPalette : nightPalette;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // 1. SUBTLE AMBIENT AURORA GRADIENTS
      if (!dayMode) {
        // Deep Space Cyber Aurora 1
        const aura1X = width * 0.25 + Math.sin(time * 0.3) * 80;
        const aura1Y = height * 0.25 + Math.cos(time * 0.25) * 60;
        const grad1 = ctx.createRadialGradient(aura1X, aura1Y, 10, aura1X, aura1Y, 450);
        grad1.addColorStop(0, 'rgba(14, 165, 233, 0.08)');
        grad1.addColorStop(0.5, 'rgba(59, 130, 246, 0.035)');
        grad1.addColorStop(1, 'transparent');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        // Deep Space Cyber Aurora 2
        const aura2X = width * 0.75 + Math.cos(time * 0.3) * 90;
        const aura2Y = height * 0.7 + Math.sin(time * 0.35) * 70;
        const grad2 = ctx.createRadialGradient(aura2X, aura2Y, 10, aura2X, aura2Y, 480);
        grad2.addColorStop(0, 'rgba(99, 102, 241, 0.07)');
        grad2.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)');
        grad2.addColorStop(1, 'transparent');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);

        // Luminous Data Streaks
        spawnStreak();
        for (let i = streaks.length - 1; i >= 0; i--) {
          const s = streaks[i];
          if (!s.active) continue;

          s.x -= Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.alpha -= 0.015;

          if (s.alpha <= 0 || s.y > height || s.x < 0) {
            s.active = false;
            streaks.splice(i, 1);
            continue;
          }

          const tailX = s.x + Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;

          const sGrad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          sGrad.addColorStop(0, s.color);
          sGrad.addColorStop(1, 'transparent');

          ctx.strokeStyle = sGrad;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = s.alpha;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      } else {
        // Crisp Clean Daylight Skylight Halo
        const sunX = width * 0.85;
        const sunY = height * 0.15;
        const skyGlow = ctx.createRadialGradient(sunX, sunY, 20, sunX, sunY, 480);
        skyGlow.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        skyGlow.addColorStop(0.5, 'rgba(224, 242, 254, 0.2)');
        skyGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = skyGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. UPDATE NODES
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      }

      // 3. DRAW DYNAMIC CONSTELLATION MESH LINES
      const maxConnectDist = isMobile ? 100 : 130;
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            const proximity = 1 - dist / maxConnectDist;
            const lineAlpha = proximity * (dayMode ? 0.2 : 0.16);

            ctx.strokeStyle = dayMode
              ? `rgba(2, 132, 199, ${lineAlpha})`
              : `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = proximity * 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 4. INTERACTIVE CURSOR CONSTELLATION & ELASTIC DEFLECTION
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);

          if (mDist < mouse.radius) {
            // Constellation line to cursor
            const mProximity = 1 - mDist / mouse.radius;
            const mAlpha = mProximity * (dayMode ? 0.35 : 0.3);

            ctx.strokeStyle = dayMode
              ? `rgba(37, 99, 235, ${mAlpha})`
              : `rgba(34, 211, 238, ${mAlpha})`;
            ctx.lineWidth = mProximity * 1.0;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Smooth elastic deflection
            node.x += (mdx / (mDist || 1)) * mProximity * 0.8;
            node.y += (mdy / (mDist || 1)) * mProximity * 0.8;
          }
        }
      }

      // 5. DRAW NODES
      nodes.forEach((node, idx) => {
        const pal = palette[idx % palette.length];
        const pulse = Math.sin(time * 2.5 + node.pulseOffset);
        const dynamicRadius = node.baseRadius + pulse * 0.3;

        // Soft Radial Glow
        const glowRadius = dynamicRadius * (dayMode ? 3.5 : 4.0);
        const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        glowGrad.addColorStop(0, dayMode ? 'rgba(2, 132, 199, 0.35)' : pal.glow);
        glowGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node Core
        ctx.fillStyle = dayMode ? '#0284c7' : pal.fill;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.7, dynamicRadius), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700 ease-in-out ${
        isDay
          ? 'bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd]'
          : 'bg-[#020617]'
      }`}
    >
      {/* Ambient Gradient Base */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDay
            ? 'opacity-60 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(255,255,255,0.6),transparent)]'
            : 'opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.12),transparent_70%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(99,102,241,0.09),transparent_70%)]'
        }`}
      />

      {/* Subtle Developer Circuit Dot Grid (Night Only) */}
      {!isDay && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      )}

      {/* Interactive Constellation Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}








