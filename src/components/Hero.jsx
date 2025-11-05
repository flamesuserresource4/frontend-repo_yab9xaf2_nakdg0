import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live, uncensored AI chat
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Say anything. Explore everything.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              A modern AI companion with no filters. Private, fast, and always-on conversations—designed for curious minds and real talk.
            </p>
            <div className="mt-8">
              <a
                href="#try"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(88,28,135,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                Try Now
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-3xl bg-black/20 ring-1 ring-white/10 lg:h-[560px]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft aura glow overlays (won't block interactions) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(165,105,255,0.25),transparent_60%)] blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,149,41,0.18),transparent_60%)] blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-x-0 top-[-10%] h-[40rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.25),rgba(0,0,0,0))]" />
      </div>
    </section>
  );
}
