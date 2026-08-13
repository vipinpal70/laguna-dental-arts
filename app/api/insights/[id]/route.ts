import { NextResponse } from "next/server";
import { getInsightBySlugOrId, updateInsight, deleteInsight } from "@/lib/insights-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/insights/[id] → single article by slug or id (public)
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const article = await getInsightBySlugOrId(id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (err) {
    console.error("GET /api/insights/[id] failed:", err);
    return NextResponse.json({ error: "Failed to load insight" }, { status: 500 });
  }
}

// PUT /api/insights/[id] → update an article (admin)
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updated = await updateInsight(id, body);
    if (!updated) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT /api/insights/[id] failed:", err);
    return NextResponse.json({ error: "Failed to update insight" }, { status: 500 });
  }
}

// DELETE /api/insights/[id] → delete an article (admin)
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const ok = await deleteInsight(id);
    if (!ok) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/insights/[id] failed:", err);
    return NextResponse.json({ error: "Failed to delete insight" }, { status: 500 });
  }
}
