'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Particles({
  className,
  quantity = 150,
}: {
  className?: string;
  quantity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });
  let animationFrameId: number;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = `${container.offsetWidth}px`;
        canvas.style.height = `${container.offsetHeight}px`;
        ctx.scale(dpr, dpr);
        
        circles.current = [];
        for (let i = 0; i < quantity; i++) {
            circles.current.push(new Circle(ctx, container.offsetWidth, container.offsetHeight, mouse.current));
        }
    };

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        circles.current.forEach(circle => circle.update());
        
        connect(ctx, container.offsetWidth, container.offsetHeight);
        
        animationFrameId = window.requestAnimationFrame(animate);
    };

    const connect = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
      const connectDistance = Math.min(canvasWidth, canvasHeight) / 8;
      for (let i = 0; i < quantity; i++) {
        for (let j = i; j < quantity; j++) {
          const distance = Math.sqrt(
            Math.pow(circles.current[i].x - circles.current[j].x, 2) +
            Math.pow(circles.current[i].y - circles.current[j].y, 2)
          );
          
          if (distance < connectDistance) {
            const opacityValue = 1 - (distance / connectDistance);
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacityValue * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(circles.current[i].x, circles.current[i].y);
            ctx.lineTo(circles.current[j].x, circles.current[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.cancelAnimationFrame(animationFrameId);
    }
  }, [quantity]);

  class Circle {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
    color: string;
    canvasWidth: number;
    canvasHeight: number;
    mouse: { x: number | null, y: number | null };
    baseSpeed: number;

    constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, mouse: { x: number | null, y: number | null }) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mouse = mouse;
        
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        
        this.baseSpeed = 0.3 + Math.random() * 0.4;
        const angle = Math.random() * 2 * Math.PI;
        this.dx = Math.cos(angle) * this.baseSpeed;
        this.dy = Math.sin(angle) * this.baseSpeed;

        this.radius = Math.random() * 1.2 + 0.8;
        this.color = `rgba(173, 216, 230, ${Math.random() * 0.4 + 0.3})`;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update() {
        // Wall collision (wrap around)
        if (this.x < 0) { this.x = this.canvasWidth; }
        if (this.x > this.canvasWidth) { this.x = 0; }
        if (this.y < 0) { this.y = this.canvasHeight; }
        if (this.y > this.canvasHeight) { this.y = 0; }


        // Mouse repulsion
        if (this.mouse.x && this.mouse.y) {
          const mouseX = this.mouse.x;
          const mouseY = this.mouse.y;

          const distance = Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2));
          const repulsionRadius = 60; // Corresponds to about 0.5cm on a typical screen
          const maxForce = 4;
          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius * maxForce;
            const angle = Math.atan2(this.y - mouseY, this.x - mouseX);
            this.dx += Math.cos(angle) * force;
            this.dy += Math.sin(angle) * force;
          }
        }
        
        // Gradually return to base speed
        const currentSpeed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        if (currentSpeed > 0.01) {
            const targetSpeed = this.baseSpeed;
            // Use a lerp to smoothly transition back to base speed
            const newSpeed = currentSpeed + (targetSpeed - currentSpeed) * 0.05;
            this.dx = (this.dx / currentSpeed) * newSpeed;
            this.dy = (this.dy / currentSpeed) * newSpeed;
        }


        // Apply velocity
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
  }

  return (
    <div className={cn("absolute inset-0", className)} ref={containerRef}>
        <canvas ref={canvasRef} />
    </div>
  );
}
