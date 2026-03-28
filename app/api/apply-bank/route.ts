import { NextRequest, NextResponse } from "next/server";
import { appendCampRow } from "@/lib/sheets";
import { sendApplyClientMailBank, sendApplyNotifyMailBank } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, date } = body;

    await appendCampRow({
      name, email, phone, address, date,
      paymentMethod: "bank",
      status: "入金待ち",
      paymentId: "",
    });

    // メール送信（失敗しても申込は成立）
    Promise.all([
      sendApplyClientMailBank({ name, email, phone, address, date }),
      sendApplyNotifyMailBank({ name, email, phone, address, date }),
    ]).catch((e) => console.error("bank mail error:", e));

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("apply-bank error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
