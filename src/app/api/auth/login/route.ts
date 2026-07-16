import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth.server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, isAdminAttempt } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    let result;
    try {
      result = await authenticateUser(email, password, Boolean(isAdminAttempt));
    } catch (error) {
      return NextResponse.json(
        {
          error: error instanceof Error ? error.message : 'Unable to sign in.',
        },
        { status: 401 }
      );
    }

    if (!result) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unable to sign in.',
      },
      { status: 500 }
    );
  }
}
