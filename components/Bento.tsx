'use client';

import AboutBlock from './AboutBlock';
import EmailListBlock from './EmailListBlock';
import HeaderBlock from './HeaderBlock';
import LocationBlock from './LocationBlock';
import SocialsBlock from './SocialsBlock';
import { motion } from 'framer-motion';

export default function Bento() {
  return (
    <div className='min-h-screen bg-zinc-900 px-20 py-12 text-zinc-50'>
      <motion.div
        initial='initial'
        animate='animate'
        transition={{ staggerChildren: 0.05 }}
        className='mx-auto max-w-4x grid grid-flow-dense grid-cols-12 gap-4'
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
}
