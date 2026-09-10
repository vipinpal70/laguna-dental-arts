import { NextResponse } from "next/server";
import { deleteLead } from "@/lib/leads-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// DELETE /api/leads/[id] → delete a lead (admin)
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const ok = await deleteLead(id);
    if (!ok) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/leads/[id] failed:", err);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
