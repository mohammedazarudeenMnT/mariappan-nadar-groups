"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Background 1: Grid Pattern
function GridBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black, transparent 80%)",
      }}
    />
  );
}

// Background 2: Dot Pattern
function DotBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(circle at center, white, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white, transparent 70%)",
        }}
      />
    </div>
  );
}

// Background 3: Aurora Waves
function AuroraBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            animation: "aurora1 8s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 80% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            animation: "aurora2 6s ease-in-out infinite alternate-reverse",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 700px 500px at 20% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
            animation: "aurora3 10s ease-in-out infinite alternate",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes aurora1 {
          0% {
            transform: translateX(-100px) translateY(-50px);
          }
          100% {
            transform: translateX(100px) translateY(-30px);
          }
        }
        @keyframes aurora2 {
          0% {
            transform: translateX(80px) translateY(40px);
          }
          100% {
            transform: translateX(-80px) translateY(60px);
          }
        }
        @keyframes aurora3 {
          0% {
            transform: translateX(-50px) translateY(20px);
          }
          100% {
            transform: translateX(-20px) translateY(50px);
          }
        }
      `}</style>
    </>
  );
}

// Background 4: Ripple Effect
function RippleBackground() {
  const [ripples, setRipples] = React.useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const rippleIdRef = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const newRipple = { x, y, id: rippleIdRef.current++ };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 3000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ping"
            style={{ width: "200px", height: "200px", animationDuration: "3s" }}
          />
        </div>
      ))}
    </>
  );
}

// Background 5: Floating Particles
function ParticlesBackground() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}

// Background 6: Glowing Orbs
function GlowingOrbsBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const colors = [
      { r: 45, g: 212, b: 191 },
      { r: 168, g: 85, b: 247 },
      { r: 59, g: 130, b: 246 },
      { r: 236, g: 72, b: 153 },
    ];

    class Orb {
      x: number;
      y: number;
      radius: number;
      color: { r: number; g: number; b: number };
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 300 + 100;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        const gradient = ctx!.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.3)`
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
        );

        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      update() {
        this.x += this.vx + Math.sin(time * 0.001) * 0.5;
        this.y += this.vy + Math.cos(time * 0.001) * 0.5;

        if (
          this.x < -this.radius ||
          this.x > canvas.width + this.radius ||
          this.y < -this.radius ||
          this.y > canvas.height + this.radius
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
    }

    const orbs = Array.from({ length: 8 }, () => new Orb());

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

// Background 7: Starfield
function StarfieldBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Array<{
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
    }> = [];
    const speed = 2;
    const quantity = 300;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Initialize stars
    for (let i = 0; i < quantity; i++) {
      stars.push({
        x: Math.random() * canvas.width * 2 - canvas.width,
        y: Math.random() * canvas.height * 2 - canvas.height,
        z: Math.random() * canvas.width,
        px: 0,
        py: 0,
      });
    }

    function animate() {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      ctx!.strokeStyle = "rgba(255, 255, 255, 0.8)";

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width * 2 - canvas.width;
          star.y = Math.random() * canvas.height * 2 - canvas.height;
        }

        const k = 128 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (
          star.px !== 0 &&
          star.py !== 0 &&
          px > 0 &&
          px < canvas.width &&
          py > 0 &&
          py < canvas.height
        ) {
          ctx!.lineWidth = (1 - star.z / canvas.width) * 2;
          ctx!.beginPath();
          ctx!.moveTo(star.px, star.py);
          ctx!.lineTo(px, py);
          ctx!.stroke();
        }

        star.px = px;
        star.py = py;
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

// Background 8: Hexagon Pattern
function HexagonBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="hexagons"
            x="0"
            y="0"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

// Background 9: Radial Circles
function RadialCirclesBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}

const backgrounds = [
  {
    name: "Grid Pattern",
    component: GridBackground,
    description: "Clean grid lines with radial fade",
  },
  {
    name: "Dot Pattern",
    component: DotBackground,
    description: "Subtle dots with center focus",
  },
  {
    name: "Aurora Waves",
    component: AuroraBackground,
    description: "Northern lights effect",
  },
  {
    name: "Ripple Effect",
    component: RippleBackground,
    description: "Animated ripple waves",
  },
  {
    name: "Floating Particles",
    component: ParticlesBackground,
    description: "Gentle floating particles",
  },
  {
    name: "Glowing Orbs",
    component: GlowingOrbsBackground,
    description: "Ambient glowing orbs",
  },
  {
    name: "Starfield",
    component: StarfieldBackground,
    description: "Space warp speed stars",
  },
  {
    name: "Hexagon Pattern",
    component: HexagonBackground,
    description: "Geometric hexagon grid",
  },
  {
    name: "Radial Circles",
    component: RadialCirclesBackground,
    description: "Soft radial light spots",
  },
];

export default function BackgroundDemo() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextBackground = () => {
    setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevBackground = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length
    );
  };

  const CurrentBackground = backgrounds[currentIndex].component;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900">
      {/* Current Background */}
      <CurrentBackground />

      {/* Gradient Blurs (consistent across all) */}
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/40 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-primary/30 blur-[180px] rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Background Preview
          </h1>

          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-bold text-primary-300">
              {backgrounds[currentIndex].name}
            </h2>
            <p className="text-white/60 text-lg">
              {backgrounds[currentIndex].description}
            </p>
            <div className="text-sm text-white/40">
              Background {currentIndex + 1} of {backgrounds.length}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={prevBackground}
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {backgrounds.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary-400 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextBackground}
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-primary-500/10 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-3 text-primary-300">
              How to use:
            </h3>
            <ol className="space-y-2 text-white/70">
              <li>
                1. Browse through all 9 background options using the navigation
                buttons
              </li>
              <li>2. Click on the dots to jump to a specific background</li>
              <li>3. Once you find one you like, let me know the name</li>
              <li>4. I'll implement it in your Maatram hero section</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
