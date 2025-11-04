// "use client" needed for motion/react
"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // Corrected import
import { cn } from "@/lib/utils";
import type { JSX } from "react/jsx-runtime"; // Declared JSX variable

type Card = {
  id: number;
  title?: string;
  content: JSX.Element | React.ReactNode | string;
  previewContent?: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            i === 0 ? "md:row-span-2 h-[300px] md:h-full" : "h-[300px]"
          )}
        >
          <motion.div
            onClick={() => handleClick(card)}
            whileHover={selected?.id === card.id ? undefined : { scale: 1.02 }}
            whileTap={selected?.id === card.id ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label={card.title ?? undefined}
            className={cn(
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full cursor-pointer group"
                : "bg-white rounded-xl h-full w-full cursor-pointer group"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
            {selected?.id === card.id ? (
              <SelectedCard selected={selected} />
            ) : (
              <>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                {/* Content overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  {card.previewContent || card.content}
                </div>
              </>
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
