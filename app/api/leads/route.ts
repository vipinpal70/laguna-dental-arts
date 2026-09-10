import { NextResponse } from "next/server";
import { createLead, getAllLeads } from "@/lib/leads-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/leads → all contact-form leads, newest first (admin)
export async function GET() {
  try {
    const data = await getAllLeads();
    return NextResponse.json(data);
  } catch (err) {
    console.error("GET /api/leads failed:", err);
    return NextResponse.json({ error: "Failed to load leads" }, { status: 500 });
  }
}

// POST /api/leads → create a new lead from the contact form (public)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.firstName || !body?.lastName || !body?.email) {
      return NextResponse.json(
        { error: "First name, last name and email are required" },
        { status: 400 },
      );
    }
    const created = await createLead(body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/leads failed:", err);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
