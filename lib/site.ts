/**
 * Site-wide constants.
 *
 * Things that show up in multiple places — header, footer, contact page,
 * structured data, email "from" addresses. Put them here so a name change
 * is one edit, not a grep across the repo.
 */

export const SITE = {
  name: "Sherwood Forest Shores",
  tagline: "Where paradise awaits you.",
  description:
    "A community of 493 lots on the Little Wicomico River in Reedville, Virginia, with easy boat access to the Chesapeake Bay and Potomac River.",
  address: {
    line1: "989 Lancelot Drive",
    line2: "Reedville, VA 22539",
  },
  // General HOA inbox — for the contact page, contact form recipient,
  // and the "email the board" links. Individual board members may or
  // may not have personal emails listed in their roster entries.
  email: "sherwood.forest.hoa.nnk@gmail.com",
  zoom: {
    url: "https://us02web.zoom.us/j/87032561742",
    id: "870 3256 1742",
  },
  drive: {
    // Replace with the actual public folder URL when we wire up Phase 3
    url: "https://drive.google.com/",
  },
  emergency: {
    sheriff: "804-580-5221",
    vfd: "804-453-4055",
  },
  socials: {
    facebook: "", // Add when known
  },
} as const;
