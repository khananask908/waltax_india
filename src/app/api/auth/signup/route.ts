import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/auth.server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, company, phone } = body;

    if (!name || !email || !password || !company || !phone) {
      return NextResponse.json({ error: 'All signup fields are required.' }, { status: 400 });
    }

    const { user, token } = await createUser({ name, email, password, company, phone });

    return NextResponse.json({ user, token });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unable to complete signup.',
      },
      { status: 500 }
    );
  }
}
