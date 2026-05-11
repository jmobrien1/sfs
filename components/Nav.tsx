'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

const NAV_LINKS = [
  { href: '/community', label: 'Community' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/documents', label: 'Documents' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        'backdrop-blur-md border-b',
        scrolled
          ? 'bg-cream/95 border-hairline shadow-[0_1px_12px_rgba(15,38,64,0.06)]'
          : 'bg-cream/85 border-hairline/60',
      ].join(' ')}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/sign.png"
            alt="Sherwood Forest Shores"
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif font-medium text-[1.05rem] text-navy tracking-tight">
              {SITE.name}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-teal-deep mt-0.5">
              Reedville · Virginia
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'text-sm font-medium tracking-tight transition-colors',
                  active ? 'text-navy' : 'text-ink-soft hover:text-navy',
                ].join(' ')}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/calendar"
            className="bg-navy text-cream text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-navy-deep hover:-translate-y-px transition-all"
          >
            Next Meeting
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="lg:hidden p-2 text-navy"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-cream border-b border-hairline">
          <div className="max-w-[1280px] mx-auto px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink-soft hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calendar"
              className="bg-navy text-cream text-xs uppercase tracking-wider px-4 py-2.5 rounded-full text-center hover:bg-navy-deep transition-all w-fit"
            >
              Next Meeting
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
