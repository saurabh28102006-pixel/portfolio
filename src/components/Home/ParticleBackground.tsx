'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ShootingStar {
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse Tracking with gentle lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140
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

    // Color palette: Ethereal Cyber Cyan, Electric Blue, Violet, Aquamarine
    const colorPalette = [
      { fill: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
      { fill: '#22d3ee', glow: 'rgba(34, 211, 238, 0.45)' },
      { fill: '#60a5fa', glow: 'rgba(96, 165, 250, 0.35)' },
      { fill: '#818cf8', glow: 'rgba(129, 140, 248, 0.3)' },
      { fill: '#2dd4bf', glow: 'rgba(45, 212, 191, 0.35)' }
    ];

    const particleCount = window.innerWidth < 768 ? 45 : 90;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const baseRadius = Math.random() * 1.8 + 0.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius,
        radius: baseRadius,
        color: col.fill,
        glowColor: col.glow,
        alpha: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Shooting Stars / Cyber Streaks
    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 2;

    const spawnShootingStar = () => {
      if (shootingStars.filter((s) => s.active).length < maxShootingStars && Math.random() < 0.015) {
        shootingStars.push({
          x: Math.random() * width * 1.2,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 100 + 70,
          speed: Math.random() * 7 + 9,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
          alpha: 1.0,
          active: true,
          color: Math.random() > 0.4 ? '#38bdf8' : '#a78bfa'
        });
      }
    };

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Mouse position smooth lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // 1. Draw Organic Nebula Aura Glows
      const aura1X = width * 0.25 + Math.sin(time * 0.4) * 80;
      const aura1Y = height * 0.3 + Math.cos(time * 0.3) * 60;
      const grad1 = ctx.createRadialGradient(aura1X, aura1Y, 10, aura1X, aura1Y, 400);
      grad1.addColorStop(0, 'rgba(14, 165, 233, 0.06)');
      grad1.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const aura2X = width * 0.75 + Math.cos(time * 0.35) * 90;
      const aura2Y = height * 0.65 + Math.sin(time * 0.45) * 70;
      const grad2 = ctx.createRadialGradient(aura2X, aura2Y, 10, aura2X, aura2Y, 450);
      grad2.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
      grad2.addColorStop(0.5, 'rgba(34, 211, 238, 0.025)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Shooting Stars / Cyber Beams
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        if (!star.active) continue;

        star.x -= Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.alpha -= 0.016;

        if (star.alpha <= 0 || star.y > height || star.x < 0) {
          star.active = false;
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = star.x + Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const starGrad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        starGrad.addColorStop(0, star.color);
        starGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = starGrad;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing head of star
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // 3. Connect Nearby Particles & Interactive Cursor Beams
      const maxConnectDist = 120;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Interactive Cursor Attraction & Glowing Beam
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.radius) {
            const mAlpha = (1 - mDist / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(34, 211, 238, ${mAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Gentle repulsion push
            const force = (mouse.radius - mDist) / mouse.radius;
            p1.x += (mdx / mDist) * force * 0.8;
            p1.y += (mdy / mDist) * force * 0.8;
          }
        }
      }

      // 4. Update & Draw Particles with Breathing Glow
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulsing radius & glow
        const pulse = Math.sin(time * 3 + p.pulseOffset);
        p.radius = p.baseRadius + pulse * 0.35;
        const currentAlpha = Math.max(0.15, Math.min(0.85, p.alpha + pulse * 0.15));

        // Soft Radial Glow Halo
        const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        glowGrad.addColorStop(0, p.glowColor);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Solid Core Particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-950/20 via-[#020617] to-[#01040f]" />

      {/* Interactive Cyber Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
