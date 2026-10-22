import { NextResponse } from "next/server";
import { createLead } from "@/lib/leads-db";
import { createZohoLead } from "@/lib/zoho";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.email || (!body?.name && (!body?.firstName || !body?.lastName))) {
      return NextResponse.json(
        { error: "Name (or first and last name) and email are required" },
        { status: 400 }
      );
    }

    // Save in DB
    const lead = await createLead(body);

    // Send to Zoho
    try {
      await createZohoLead(body);
    } catch (err) {
      console.error("Zoho CRM sync failed:", err);
    }

    return NextResponse.json({
      success: true,
      data: lead,
    });
  } catch (err) {
    console.error("POST /api/contact failed:", err);
    return NextResponse.json(
      { error: "Failed to submit contact request" },
      { status: 500 }
    );
  }
}
