import { NextResponse } from "next/server";
import { Blog } from "../DB/Blog";

export async function GET() {
  return NextResponse.json({ blog: Blog });
}
