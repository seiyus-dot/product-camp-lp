import { NextRequest, NextResponse } from "next/server";
import { sendApplyClientMail, sendApplyNotifyMail } from "@/lib/email";
import { appendCampRow } from "@/lib/sheets";
import { createContractDoc } from "@/lib/docs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // 契約書を自動生成
    const contractUrl = await createContractDoc({ name: data.name, address: data.address }).catch((e) => {
      console.error("contract doc error:", e);
      return "";
    });

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
        contractUrl,
      }),
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("apply-notify error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
