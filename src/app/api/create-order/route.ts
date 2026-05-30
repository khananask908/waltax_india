import { NextRequest, NextResponse } from 'next/server';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY;

export async function POST(request: NextRequest) {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_SECRET_KEY) {
    return NextResponse.json({ error: 'Razorpay credentials not configured' }, { status: 500 });
  }

  const body = await request.json();
  const amount = Number(body.amount);
  const receipt = body.receipt || `order_${Date.now()}`;

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
  }

  const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_SECRET_KEY}`).toString('base64');

  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: amount * 100,
      currency: 'INR',
      receipt,
      payment_capture: 1
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data.error?.description || 'Unable to create Razorpay order' }, { status: response.status });
  }

  return NextResponse.json(data);
}
