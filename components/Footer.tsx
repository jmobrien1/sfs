import Link from 'next/link';
import { SITE } from '@/lib/site';

const COMMUNITY_LINKS = [
  { href: '/community', label: 'About' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/community#gallery', label: 'Photo Gallery' },
];

const RESOURCE_LINKS = [
  { href: SITE.drive.url, label: 'Documents & Forms', external: true },
  { href: '/amenities/swimming-pool', label: 'Pool Information' },
  { href: '/amenities/boat-pier', label: 'Boat Pier & Slips' },
  { href: '/resources#faq', label: 'FAQ' },
];

const LOCAL_LINKS = [
  { href: 'https://rfmuseum.org', label: 'Reedville Fishermans Museum' },
  { href: 'https://www.northernneck.org', label: 'Northern Neck Tourism' },
  { href: 'https://www.co.northumberland.va.us', label: 'Northumberland County' },
  { href: 'https://www.nnec.coop', label: 'Northern Neck Electric' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          <div className="flex flex-col gap-3">
            <div className="font-serif text-2xl text-cream font-normal tracking-tight">
              {SITE.name}
            </div>
            <div className="font-serif italic text-teal-light text-[1.05rem]">
              {SITE.tagline}
            </div>
            <address className="not-italic text-sm leading-relaxed mt-2">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </address>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-cream/70 hover:text-cream transition-colors mt-1"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-teal-light font-semibold mb-5">
              Community
            </div>
            <ul className="space-y-2.5">
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-teal-light font-semibold mb-5">
              Resources
            </div>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-teal-light font-semibold mb-5">
              Local Links
            </div>
            <ul className="space-y-2.5">
              {LOCAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-wrap justify-between gap-4 text-xs text-cream/50">
          <span>
            © {new Date().getFullYear()} Sherwood Forest Shores Homeowners
            Association. All rights reserved.
          </span>
          <span>Designed in the Northern Neck of Virginia</span>
        </div>
      </div>
    </footer>
  );
}
