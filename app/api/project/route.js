import { NextResponse } from "next/server";
import { projects } from "../DB/Project";

export async function GET() {
  return NextResponse.json({ projects: projects });
}
