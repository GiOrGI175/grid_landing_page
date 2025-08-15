'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type BlockPropsT = {
  className?: string;
} & MotionProps;

export default function Block({ className, ...rest }: BlockPropsT) {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6',
        className
      )}
      {...rest}
    />
  );
}
