import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-page Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle ambient gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.18),transparent_60%)] blur-3xl"
          initial={{ opacity: 0.25, scale: 0.98 }}
          animate={{ opacity: [0.2, 0.35, 0.25], scale: [0.98, 1.02, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute left-[15%] top-[20%] h-[50vmin] w-[50vmin] rounded-full bg-[radial-gradient(closest-side,rgba(255,149,41,0.14),transparent_60%)] blur-3xl"
          animate={{ x: [0, 10, -6, 0], y: [0, -8, 6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Uncensored AI chat • Private • Fast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="sr-only"
          >
            UncensorAI — Say anything. Explore everything.
          </motion.h1>

          <motion.a
            href="#try"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 230, damping: 18 }}
            className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_40px_rgba(88,28,135,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            <span className="mr-1">Try Now</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
