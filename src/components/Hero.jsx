import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated ambient gradients */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      >
        <motion.div
          className="absolute -top-24 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.28),transparent_60%)] blur-3xl"
          animate={{ y: [0, 20, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,149,41,0.18),transparent_60%)] blur-3xl"
          animate={{ y: [-10, 10, -5], x: [0, 8, -6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live, uncensored AI chat
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Say anything. Explore everything.
            </motion.h1>
            <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              A modern AI companion with no filters. Private, fast, and always-on conversations—designed for curious minds and real talk.
            </motion.p>
            <motion.div variants={item} className="mt-8">
              <a
                href="#try"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(88,28,135,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <motion.span
                  initial={{ filter: 'brightness(1)' }}
                  whileHover={{ filter: 'brightness(1.1)' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  Try Now
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[420px] w-full rounded-3xl bg-black/20 ring-1 ring-white/10 lg:h-[560px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
          >
            <Spline
              scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft aura glow overlays (won't block interactions) */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(165,105,255,0.20),transparent_60%)] blur-2xl"
                animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,149,41,0.16),transparent_60%)] blur-2xl"
                animate={{ rotate: [0, 8, -6, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
