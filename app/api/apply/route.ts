import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY が設定されていません" }, { status: 500 });
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      httpClient: Stripe.createFetchHttpClient(),
    });

    const body = await req.json();
    const { name, email, phone, address, date } = body;

    const customer = await stripe.customers.create({
      email,
      name,
      phone,
      address: { line1: address },
      metadata: { date },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(process.env.PRODUCT_AI_CAMP_AMOUNT ?? 200000),
      currency: "jpy",
      customer: customer.id,
      description: "PRODUCT AI CAMP 参加費",
      metadata: { name, date },
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("apply error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
