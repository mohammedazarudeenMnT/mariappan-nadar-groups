"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  speed?: number;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.05,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: delay + (wordIndex * word.length + charIndex) * duration,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

export function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 0.05,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function GradientText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </motion.span>
  );
}

export function FadeInText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
