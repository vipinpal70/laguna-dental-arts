import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params;
  if (!segments || segments.length === 0) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const assetsDir = path.resolve(process.cwd(), "assets");
  const filePath = path.resolve(assetsDir, ...segments);

  // Security check: ensure path is inside assetsDir
  if (!filePath.startsWith(assetsDir) || !fs.existsSync(filePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const stat = fs.statSync(filePath);
  if (!stat.isFile()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf",
  };

  const buffer = fs.readFileSync(filePath);
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Content-Length": stat.size.toString(),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
