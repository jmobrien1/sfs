import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "board-meeting" | "community" | "pool";
  zoom: boolean;
  zoom_url?: string;
  body: string;
}

export interface BoardMember {
  slug: string;
  name: string;
  role: string;
  phone?: string;
  email?: string;
  photo?: string;
  order: number;
}

export interface Amenity {
  slug: string;
  name: string;
  short: string;
  detail: string;
  icon: string;
  photo?: string;
  hours?: string;
  rules_url?: string;
  order: number;
  body: string;
}

export interface DocumentItem {
  slug: string;
  title: string;
  category: "governing" | "forms" | "financial" | "minutes";
  description: string;
  drive_url: string;
  updated?: string;
}

function readCollection<T>(folder: string): T[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { ...data, body: content, slug: file.replace(/\.md$/, "") } as T;
    });
}

export function getEvents(): Event[] {
  return readCollection<Event>("events")
    .map((e) => ({
      ...e,
      date:
        typeof e.date === "string"
          ? e.date
          : new Date(e.date).toISOString().slice(0, 10),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getUpcomingEvents(): Event[] {
  const today = new Date().toISOString().split("T")[0];
  return getEvents().filter((e) => e.date >= today);
}

export function getBoard(): BoardMember[] {
  return readCollection<BoardMember>("board").sort(
    (a, b) => a.order - b.order
  );
}

export function getAmenities(): Amenity[] {
  return readCollection<Amenity>("amenities").sort(
    (a, b) => a.order - b.order
  );
}

export function getDocuments(): DocumentItem[] {
  return readCollection<DocumentItem>("documents");
}
