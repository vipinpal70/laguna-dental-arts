import { NextResponse } from "next/server";
import { getPublishedInsights, getAllInsights, createInsight } from "@/lib/insights-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/insights            → published articles (public)
// GET /api/insights?scope=admin → all articles incl. drafts (admin)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const scope = searchParams.get("scope");
    const data = scope === "admin" ? await getAllInsights() : await getPublishedInsights();
    return NextResponse.json(data);
  } catch (err) {
    console.error("GET /api/insights failed:", err);
    return NextResponse.json({ error: "Failed to load insights" }, { status: 500 });
  }
}

// POST /api/insights → create a new article (admin)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.title || !body?.content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }
    const created = await createInsight(body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/insights failed:", err);
    return NextResponse.json({ error: "Failed to create insight" }, { status: 500 });
  }
}
