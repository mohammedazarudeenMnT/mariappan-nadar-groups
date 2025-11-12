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

// Background 6: Noise Texture
function NoiseTextureBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;
    const canvasSize = 1024;

    const resize = () => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 18;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % 2 === 0) drawGrain();
      frame++;
      animationId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// Background 7: Geometric Shapes
function GeometricShapesBackground() {
  const shapes = [
    {
      width: 600,
      height: 140,
      rotate: 12,
      gradient: "from-indigo-500/[0.15]",
      className: "left-[-10%] top-[15%]",
      delay: 0,
    },
    {
      width: 500,
      height: 120,
      rotate: -15,
      gradient: "from-rose-500/[0.15]",
      className: "right-[-5%] top-[70%]",
      delay: 2,
    },
    {
      width: 300,
      height: 80,
      rotate: -8,
      gradient: "from-violet-500/[0.15]",
      className: "left-[5%] bottom-[5%]",
      delay: 1,
    },
    {
      width: 200,
      height: 60,
      rotate: 20,
      gradient: "from-amber-500/[0.15]",
      className: "right-[15%] top-[10%]",
      delay: 3,
    },
    {
      width: 150,
      height: 40,
      rotate: -25,
      gradient: "from-cyan-500/[0.15]",
      className: "left-[20%] top-[5%]",
      delay: 4,
    },
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.className}`}
          style={{
            width: shape.width,
            height: shape.height,
            transform: `rotate(${shape.rotate}deg)`,
            animation: `floatShape 12s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${shape.gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]`}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes floatShape {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
      `}</style>
    </>
  );
}

// Background 8: Nested Squares
function NestedSquaresBackground() {
  const squares = Array.from({ length: 15 }, (_, i) => i);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        {squares.map((index) => {
          const size = 50 + (index + 1) * 30;
          const delay = index * 0.15;

          return (
            <div
              key={index}
              className="absolute border-2 rounded-lg"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderImage: `linear-gradient(45deg, rgb(147, 51, 234), rgb(168, 85, 247), rgb(196, 181, 253)) 1`,
                animation: `scaleRotate 3s ease-in-out ${delay}s infinite alternate`,
                transformOrigin: "center center",
              }}
            />
          );
        })}
      </div>
      <style jsx>{`
        @keyframes scaleRotate {
          0% {
            transform: scale(0.8) rotate(0deg);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}

// Background 9: Hexagon Pattern
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

// Background 10: Neural Network Paths
function NeuralNetworkBackground() {
  const nodes = React.useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        id: `node-${i}`,
      })),
    []
  );

  const connections = React.useMemo(() => {
    const conns: Array<{
      id: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      delay: number;
    }> = [];
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes.filter((other, j) => {
        if (i === j) return false;
        const distance = Math.sqrt(
          Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
        );
        return distance < 20 && Math.random() > 0.7;
      });

      nearbyNodes.forEach((target) => {
        conns.push({
          id: `conn-${i}-${target.id}`,
          x1: node.x,
          y1: node.y,
          x2: target.x,
          y2: target.y,
          delay: Math.random() * 5,
        });
      });
    });
    return conns;
  }, [nodes]);

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {connections.map((conn) => (
        <line
          key={conn.id}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="currentColor"
          strokeWidth="0.1"
          className="text-white"
          style={{
            animation: `pulse 3s ease-in-out ${conn.delay}s infinite`,
          }}
        />
      ))}
      {nodes.map((node) => (
        <circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="0.3"
          fill="currentColor"
          className="text-white"
          style={{
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </svg>
  );
}

// Background 11: Flow Paths
function FlowPathsBackground() {
  const flowPaths = React.useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const offset = i * 12;
        return {
          id: `flow-${i}`,
          d: `M-10,${20 + offset} Q30,${20 + offset - 5} 60,${
            20 + offset
          } T110,${20 + offset}`,
          strokeWidth: 0.3 + i * 0.1,
          delay: i * 0.8,
        };
      }),
    []
  );

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-25"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {flowPaths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          className="text-white"
          style={{
            animation: `flowPath 8s ease-in-out ${path.delay}s infinite`,
            strokeDasharray: "5 10",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes flowPath {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            stroke-dashoffset: -15;
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  );
}

// Background 12: Spiral Paths
function SpiralPathsBackground() {
  const spirals = React.useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const centerX = 50 + ((i % 3) - 1) * 30;
      const centerY = 50 + Math.floor(i / 3 - 0.5) * 30;
      const radius = 10 + i * 2;
      const turns = 2;

      let path = `M${centerX + radius},${centerY}`;
      for (let angle = 0; angle <= turns * 360; angle += 10) {
        const radian = (angle * Math.PI) / 180;
        const currentRadius = radius * (1 - angle / (turns * 360));
        const x = centerX + currentRadius * Math.cos(radian);
        const y = centerY + currentRadius * Math.sin(radian);
        path += ` L${x},${y}`;
      }

      return {
        id: `spiral-${i}`,
        d: path,
        delay: i * 1.2,
      };
    });
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {spirals.map((spiral) => (
        <path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeLinecap="round"
          className="text-white"
          style={{
            animation: `drawSpiral 6s ease-in-out ${spiral.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes drawSpiral {
          0% {
            stroke-dasharray: 0 100;
            opacity: 0;
          }
          50% {
            stroke-dasharray: 100 0;
            opacity: 0.8;
          }
          100% {
            stroke-dasharray: 0 100;
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  );
}

// Background 16-21: BG Pattern Variants
function BGPatternGrid() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(to right, #252525 1px, transparent 1px), linear-gradient(to bottom, #252525 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        maskImage: "radial-gradient(ellipse at center, white, transparent)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, white, transparent)",
      }}
    />
  );
}

function BGPatternDots() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(#252525 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        maskImage: "radial-gradient(ellipse at center, transparent, white)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, transparent, white)",
      }}
    />
  );
}

function BGPatternDiagonalStripes() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, #252525, #252525 1px, transparent 1px, transparent 24px)`,
        maskImage:
          "linear-gradient(to bottom, transparent, white, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, white, transparent)",
      }}
    />
  );
}

function BGPatternHorizontalLines() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, #252525 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        maskImage: "linear-gradient(to right, white, transparent)",
        WebkitMaskImage: "linear-gradient(to right, white, transparent)",
      }}
    />
  );
}

function BGPatternVerticalLines() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(to right, #252525 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        maskImage: "linear-gradient(to bottom, white, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, white, transparent)",
      }}
    />
  );
}

function BGPatternCheckerboard() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(45deg, #252525 25%, transparent 25%), linear-gradient(-45deg, #252525 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #252525 75%), linear-gradient(-45deg, transparent 75%, #252525 75%)`,
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
        maskImage: "linear-gradient(to top, transparent, white)",
        WebkitMaskImage: "linear-gradient(to top, transparent, white)",
      }}
    />
  );
}

// Background 22: Radial Gradient
function RadialGradientBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `radial-gradient(125% 125% at 50% 10%, rgba(255, 255, 255, 0.1) 40%, rgba(99, 102, 241, 0.3) 100%)`,
      }}
    />
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
    name: "Neural Network",
    component: NeuralNetworkBackground,
    description: "Connected nodes network",
  },
  {
    name: "Flow Paths",
    component: FlowPathsBackground,
    description: "Flowing animated paths",
  },
  {
    name: "Spiral Paths",
    component: SpiralPathsBackground,
    description: "Animated spiral patterns",
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
    name: "Noise Texture",
    component: NoiseTextureBackground,
    description: "Film grain effect overlay",
  },
  {
    name: "Geometric Shapes",
    component: GeometricShapesBackground,
    description: "Floating elegant shapes",
  },
  {
    name: "Nested Squares",
    component: NestedSquaresBackground,
    description: "Animated concentric squares",
  },
  {
    name: "Hexagon Pattern",
    component: HexagonBackground,
    description: "Geometric hexagon grid",
  },
  {
    name: "Dynamic Waves",
    component: DynamicWaveBackground,
    description: "Animated liquid wave patterns",
  },
  {
    name: "Neon Grid",
    component: NeonGridBackground,
    description: "Cyberpunk neon grid effect",
  },
  {
    name: "Cyber Diagonal",
    component: CyberDiagonalBackground,
    description: "Diagonal cyber grid pattern",
  },
  {
    name: "BG Grid (Fade Edges)",
    component: BGPatternGrid,
    description: "Grid pattern with edge fade",
  },
  {
    name: "BG Dots (Fade Center)",
    component: BGPatternDots,
    description: "Dots with center fade",
  },
  {
    name: "BG Diagonal Stripes",
    component: BGPatternDiagonalStripes,
    description: "Diagonal stripes with Y fade",
  },
  {
    name: "BG Horizontal Lines",
    component: BGPatternHorizontalLines,
    description: "Horizontal lines with right fade",
  },
  {
    name: "BG Vertical Lines",
    component: BGPatternVerticalLines,
    description: "Vertical lines with bottom fade",
  },
  {
    name: "BG Checkerboard",
    component: BGPatternCheckerboard,
    description: "Checkerboard with top fade",
  },
  {
    name: "Radial Gradient",
    component: RadialGradientBackground,
    description: "Smooth radial gradient effect",
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
                1. Browse through all {backgrounds.length} background options
                using the navigation buttons
              </li>
              <li>2. Click on the dots to jump to a specific background</li>
              <li>3. Once you find one you like, let me know the name</li>
              <li>4. I&apos;ll implement it in your Maatram hero section</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

// Background 13: Dynamic Wave Canvas
function DynamicWaveBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number,
      height: number,
      imageData: ImageData,
      data: Uint8ClampedArray;
    const SCALE = 3;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += Math.cos(i - d + time * 0.5 - a * u_x);
            d += Math.sin(i * u_y + a);
          }

          const wave = (Math.sin(a) + Math.cos(d)) * 0.5;
          const intensity = 0.3 + 0.4 * wave;
          const baseVal = 0.1 + 0.15 * Math.cos(u_x + u_y + time * 0.3);

          const r = Math.max(0, Math.min(1, baseVal * 0.8)) * intensity;
          const g = Math.max(0, Math.min(1, baseVal * 0.6)) * intensity;
          const b = Math.max(0, Math.min(1, baseVal * 1.2)) * intensity;

          const index = (y * width + x) * 4;
          data[index] = r * 255;
          data[index + 1] = g * 255;
          data[index + 2] = b * 255;
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(
          canvas,
          0,
          0,
          width,
          height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

// Background 14: Neon Grid
function NeonGridBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, transparent 30%, rgba(138, 43, 226, 0.4) 50%, transparent 70%, transparent 100%),
            linear-gradient(to bottom, #1a1a2e 0%, #2d1b69 50%, #0f0f23 100%)
          `,
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0px, transparent 79px, rgba(255, 255, 255, 0.05) 80px, rgba(255, 255, 255, 0.05) 81px)
          `,
        }}
      />
    </div>
  );
}

// Background 15: Cyber Diagonal Grid
function CyberDiagonalBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
            repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
