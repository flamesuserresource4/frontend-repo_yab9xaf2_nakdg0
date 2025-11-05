import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient, non-interactive gradients */}
      <div className="pointer-events-none absolute inset-0">
        {/* Central aura */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(165,105,255,0.16),transparent_60%)] blur-3xl"
          initial={{ opacity: 0.22, scale: 0.98 }}
          animate={{ opacity: [0.18, 0.3, 0.22], scale: [0.98, 1.02, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        {/* Soft vignette */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(0,0,0,0.5),transparent_60%)]"
        />
      </div>

      {/* Centered CTA */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur"
          >
            Real-time AI chat • Private • Fast
          </motion.span>

          <motion.a
            href="#try"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 230, damping: 18 }}
            className="group relative inline-flex items-center justify-center rounded-2xl bg-white/5 px-9 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(88,28,135,0.25)] backdrop-blur-lg"
          >
            <span className="absolute inset-0 -z-[1] rounded-2xl bg-gradient-to-tr from-purple-600/60 via-fuchsia-600/60 to-orange-500/60 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <span className="mr-1">Try Now</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
