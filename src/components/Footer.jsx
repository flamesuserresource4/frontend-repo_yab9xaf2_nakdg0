import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm text-white/50">© {new Date().getFullYear()} UncensorAI. All rights reserved.</p>
          <p id="try" className="text-xs text-white/40">Built for open conversation.</p>
        </motion.div>
      </div>
    </footer>
  );
}
