import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Unfiltered by design',
    desc: 'Speak freely. We keep the model open and the experience transparent—no arbitrary blocks.',
  },
  {
    icon: Zap,
    title: 'Fast, fluid chats',
    desc: 'Low-latency streaming responses that feel like a real conversation, not a loading bar.',
  },
  {
    icon: Lock,
    title: 'Private by default',
    desc: 'Your chats are yours. Sessions are encrypted in transit with sensible data controls.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={item} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Why people switch
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-base text-white/70">
            Built for authenticity and speed—so you can explore ideas without friction.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-fuchsia-600/80 text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    'radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(165,105,255,0.10), transparent 60%)',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
