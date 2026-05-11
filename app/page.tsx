import { getUpcomingEvents, getAmenities } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import CalendarSection from "@/components/CalendarSection";
import QuickAccess from "@/components/QuickAccess";
import EmergencyStrip from "@/components/EmergencyStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  const events = getUpcomingEvents();
  const amenities = getAmenities();

  return (
    <>
      <Nav />
      <Hero />
      <WelcomeSection />
      <AmenitiesGrid amenities={amenities} />
      <CalendarSection events={events} />
      <QuickAccess />
      <EmergencyStrip />
      <Footer />
    </>
  );
}
