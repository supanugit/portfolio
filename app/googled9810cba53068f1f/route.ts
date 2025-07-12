import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    "google-site-verification: googled9810cba53068f1f.html",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
