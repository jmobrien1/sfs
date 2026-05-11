import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Color overlay — navy → teal diagonal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(15,38,64,0.55) 0%, rgba(26,58,92,0.35) 50%, rgba(74,155,142,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(15,38,64,0.25) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 md:px-8 pt-32 pb-24 text-cream">
        <div
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/85 mb-8 font-medium opacity-0"
          style={{ animation: 'heroFadeUp 0.9s ease 0.2s forwards' }}
        >
          <span className="h-px w-10 bg-cream/50" aria-hidden="true" />
          Est. on the Little Wicomico
          <span className="h-px w-10 bg-cream/50" aria-hidden="true" />
        </div>

        <h1
          className="font-serif font-light leading-[1.02] tracking-tight mb-6 text-balance opacity-0"
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            maxWidth: '18ch',
            animation: 'heroFadeUp 1s ease 0.4s forwards',
          }}
        >
          Where <em className="italic font-normal text-teal-light">paradise</em>
          <br />
          awaits you.
        </h1>

        <p
          className="text-lg max-w-[36rem] leading-relaxed text-cream/90 mb-10 font-light opacity-0"
          style={{ animation: 'heroFadeUp 1s ease 0.6s forwards' }}
        >
          {SITE.description}
        </p>

        <div
          className="flex flex-wrap gap-4 opacity-0"
          style={{ animation: 'heroFadeUp 1s ease 0.8s forwards' }}
        >
          <Link
            href="/community"
            className="inline-flex items-center gap-2 bg-cream text-navy px-7 py-4 text-sm font-medium uppercase tracking-[0.04em] hover:bg-paper hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all"
          >
            Explore the Community →
          </Link>
          <Link
            href="/calendar"
            className="inline-flex items-center gap-2 bg-transparent text-cream border border-cream/50 px-7 py-4 text-sm font-medium uppercase tracking-[0.04em] hover:bg-cream/10 hover:border-cream transition-all"
          >
            2026 Calendar
          </Link>
        </div>
      </div>

      {/* Scroll affordance */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-cream/70 text-[0.7rem] uppercase tracking-[0.25em]">
        <span>Scroll</span>
        <span
          className="block w-px h-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(251,248,241,0.5), transparent)',
            animation: 'heroScrollPulse 2s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
