import type { Variants } from 'framer-motion';

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function makeFadeUp(stagger = 0.1, duration = 0.8): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * stagger,
        duration,
        ease: EASE,
      },
    }),
  };
}

export const fadeUp = makeFadeUp();
