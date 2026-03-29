import { NextRequest, NextResponse } from "next/server";
import { appendCampRow } from "@/lib/sheets";
import { sendApplyClientMailBank, sendApplyNotifyMailBank } from "@/lib/email";
import { createContractDoc } from "@/lib/docs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, date } = body;

    // 契約書を自動生成
    let contractUrl = "";
    try {
      contractUrl = await createContractDoc({ name, address });
      console.log("contract doc created:", contractUrl);
    } catch (e) {
      console.error("contract doc error:", JSON.stringify(e, Object.getOwnPropertyNames(e as object)));
    }

    await appendCampRow({
      name, email, phone, address, date,
      paymentMethod: "bank",
      status: "入金待ち",
      paymentId: "",
      contractUrl,
    });

    await Promise.all([
      sendApplyClientMailBank({ name, email, phone, address, date }),
      sendApplyNotifyMailBank({ name, email, phone, address, date }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("apply-bank error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
