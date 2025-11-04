"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ModernGridBgProps {
  className?: string;
}

export function ModernGridBg({ className }: ModernGridBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const pulse = Math.sin(time * 0.001 + x * 0.01) * 0.3 + 0.7;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 * pulse})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const pulse = Math.sin(time * 0.001 + y * 0.01) * 0.3 + 0.7;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 * pulse})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw intersection dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) +
              Math.pow(y - canvas.height / 2, 2)
          );
          const pulse = Math.sin(time * 0.002 - distance * 0.003) * 0.5 + 0.5;

          ctx.fillStyle = `rgba(59, 130, 246, ${0.6 * pulse})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(() => drawGrid(Date.now()));
    };

    resizeCanvas();
    drawGrid(Date.now());

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-1000 via-primary-950 to-primary-1000" />

      {/* Canvas for grid */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, oklch(0.24 0.06 210 / 0.7) 0%, transparent 50%)",
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-1000 via-transparent to-primary-1000/50" />
    </div>
  );
}
