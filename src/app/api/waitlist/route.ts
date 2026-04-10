import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const DATA_FILE = join(process.cwd(), "data", "waitlist.json");

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  joinedAt: string;
}

function readWaitlist(): WaitlistEntry[] {
  try {
    const data = readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeWaitlist(entries: WaitlistEntry[]) {
  writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
}

// POST /api/waitlist — add email
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company } = body;

  if (!email || !name) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const waitlist = readWaitlist();

  if (waitlist.find((e) => e.email.toLowerCase() === email.toLowerCase())) {
    return NextResponse.json({ error: "This email is already on the waitlist." }, { status: 409 });
  }

  const entry: WaitlistEntry = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    company: company?.trim() || undefined,
    joinedAt: new Date().toISOString(),
  };

  waitlist.push(entry);
  writeWaitlist(waitlist);

  return NextResponse.json(
    { message: "We'll be in touch soon!", entry },
    { status: 201 }
  );
}

// GET /api/waitlist — list all (admin)
export async function GET() {
  const waitlist = readWaitlist();
  return NextResponse.json({ count: waitlist.length, entries: waitlist });
}

// DELETE /api/waitlist?id=xxx — remove entry
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID required." }, { status: 400 });
  }

  const waitlist = readWaitlist();
  const filtered = waitlist.filter((e) => e.id !== id);

  if (filtered.length === waitlist.length) {
    return NextResponse.json({ error: "Entry not found." }, { status: 404 });
  }

  writeWaitlist(filtered);
  return NextResponse.json({ message: "Entry removed." });
}
