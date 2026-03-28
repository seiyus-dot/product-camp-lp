import { NextRequest, NextResponse } from "next/server";
import { sendApplyClientMail, sendApplyNotifyMail } from "@/lib/email";
import { appendCampRow } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await Promise.all([
      sendApplyClientMail(data),
      sendApplyNotifyMail(data),
      appendCampRow({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        date: data.date,
        paymentMethod: "card",
        status: "完了",
        paymentId: data.paymentIntentId ?? "",
      }),
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("apply-notify error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
