import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-20"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
              <motion.span
                className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-sm font-medium tracking-tight text-white/90">UncensorAI</span>
          </div>
          <div className="hidden sm:block text-xs text-white/50">Say anything. Explore everything.</div>
        </div>
      </div>
    </motion.header>
  );
}
