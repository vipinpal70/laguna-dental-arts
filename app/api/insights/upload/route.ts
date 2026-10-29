
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// This example uses Node.js APIs and the Cloudinary Node SDK.
export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export async function POST(request: Request) {
  try {

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Please upload an image using a multipart form." },
        { status: 415 }
      );
    }

    let formData: FormData;

    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid upload request." },
        { status: 400 }
      );
    }

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No image file was provided." },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return NextResponse.json(
        { error: "The selected file is empty." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Image must be 10 MB or smaller." },
        { status: 413 }
      );
    }

    if (
      !ALLOWED_TYPES.includes(
        file.type as (typeof ALLOWED_TYPES)[number]
      )
    ) {
      return NextResponse.json(
        { error: "Only JPEG, PNG and WebP images are allowed." },
        { status: 415 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    // Check the actual file signature as well as the MIME type.
    // MIME types supplied by the browser can be forged.
    const isJpeg =
      bytes.length >= 3 &&
      bytes[0] === 0xff &&
      bytes[1] === 0xd8 &&
      bytes[2] === 0xff;

    const isPng =
      bytes.length >= 8 &&
      bytes.subarray(0, 8).equals(
        Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
      );

    const isWebp =
      bytes.length >= 12 &&
      bytes.toString("ascii", 0, 4) === "RIFF" &&
      bytes.toString("ascii", 8, 12) === "WEBP";

    if (!isJpeg && !isPng && !isWebp) {
      return NextResponse.json(
        { error: "The file does not appear to be a valid JPEG, PNG or WebP image." },
        { status: 415 }
      );
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.type};base64,${bytes.toString("base64")}`,
      {
        folder: "laguna-dental-labs/insights",
        resource_type: "image",
        transformation: [
          {
            width: 1600,
            height: 1200,
            crop: "limit",
            quality: "auto",
            fetch_format: "auto",
          },
        ],
      }
    );

    return NextResponse.json(
      {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      },
      { status: 201 }
    );
  } catch (error) {
    // Log technical details on the server, not to the browser.
    console.error("Insights image upload failed:", error);

    return NextResponse.json(
      { error: "Image upload failed. Please try again." },
      { status: 500 }
    );
  }
}
