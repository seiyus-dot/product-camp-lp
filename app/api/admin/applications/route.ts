import { NextResponse } from "next/server";
import { getBankApplications } from "@/lib/sheets";

export async function GET() {
  try {
    const applications = await getBankApplications();
    return NextResponse.json(applications);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
