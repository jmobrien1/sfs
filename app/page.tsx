// ─── TEMPORARY STUB ──────────────────────────────────────────────
// While components are being built one at a time, this file
// activates only the components that exist. As each new component
// is added, un-comment its import + JSX usage below.
//
// Order of restoration:
//   1. WelcomeSection
//   2. AmenitiesGrid
//   3. CalendarSection
//   4. QuickAccess
//   5. EmergencyStrip
// ─────────────────────────────────────────────────────────────────

import { getUpcomingEvents, getAmenities } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
// import WelcomeSection from "@/components/WelcomeSection";
// import AmenitiesGrid from "@/components/AmenitiesGrid";
// import CalendarSection from "@/components/CalendarSection";
// import QuickAccess from "@/components/QuickAccess";
// import EmergencyStrip from "@/components/EmergencyStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Pre-fetched for when sections come online:
  const _events = getUpcomingEvents();
  const _amenities = getAmenities();

  return (
    <>
      <Nav />
      <Hero />
      {/* <WelcomeSection /> */}
      {/* <AmenitiesGrid amenities={_amenities} /> */}
      {/* <CalendarSection events={_events} /> */}
      {/* <QuickAccess /> */}
      {/* <EmergencyStrip /> */}
      <Footer />
    </>
  );
}
