import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-lg font-semibold tracking-tight text-white/90">UncensorAI</span>
        </div>
      </div>
    </motion.header>
  );
}
