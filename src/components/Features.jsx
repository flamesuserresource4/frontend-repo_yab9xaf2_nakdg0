import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

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

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Why people switch</h2>
          <p className="mt-3 text-base text-white/70">
            Built for authenticity and speed—so you can explore ideas without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/80 to-fuchsia-600/80 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
