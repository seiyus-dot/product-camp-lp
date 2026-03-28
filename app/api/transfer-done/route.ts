import { NextRequest, NextResponse } from "next/server";
import { sendTransferDoneNotifyMail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    await sendTransferDoneNotifyMail({ name, email });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("transfer-done error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
