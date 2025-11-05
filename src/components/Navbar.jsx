import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400" />
          <span className="text-lg font-semibold tracking-tight text-white/90">UncensorAI</span>
        </div>
        {/* No links here to keep a single call-to-action on the page */}
      </div>
    </header>
  );
}
