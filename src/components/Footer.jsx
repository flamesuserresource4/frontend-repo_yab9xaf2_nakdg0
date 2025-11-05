import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10/0">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p id="try" className="text-xs text-white/50">© {new Date().getFullYear()} UncensorAI — Built for open conversation.</p>
        </motion.div>
      </div>
    </footer>
  );
}
