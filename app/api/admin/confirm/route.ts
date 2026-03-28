import { NextRequest, NextResponse } from "next/server";
import { updateStatus } from "@/lib/sheets";
import { sendConfirmMail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { rowIndex, name, email, date } = await req.json();
    await updateStatus(rowIndex, "確定");
    await sendConfirmMail({ name, email, date });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("confirm error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
