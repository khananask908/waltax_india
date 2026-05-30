import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY;

export async function POST(request: NextRequest) {
  if (!RAZORPAY_SECRET_KEY) {
    return NextResponse.json({ success: false, error: 'Razorpay secret key not configured' }, { status: 500 });
  }

  const body = await request.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ success: false, error: 'Missing Razorpay payment data' }, { status: 400 });
  }

  const generatedSignature = crypto
    .createHmac('sha256', RAZORPAY_SECRET_KEY)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  const success = generatedSignature === razorpay_signature;

  return NextResponse.json({ success });
}
