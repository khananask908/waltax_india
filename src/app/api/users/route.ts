import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUserFromRequest, getUsersCollection } from '@/lib/auth.server';

const normalizeUser = (user: Record<string, unknown>) => ({
  id: typeof user.id === 'string' ? user.id : '',
  name: typeof user.name === 'string' ? user.name : '',
  email: typeof user.email === 'string' ? user.email : '',
  company: typeof user.company === 'string' ? user.company : '',
  role: typeof user.role === 'string' ? user.role : 'user',
});

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUserFromRequest(request);

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
    }

    const collection = await getUsersCollection();
    const users = await collection
      .find(
        {},
        {
          projection: {
            _id: 0,
            id: 1,
            name: 1,
            email: 1,
            company: 1,
            role: 1,
          },
        }
      )
      .toArray();

    const normalizedUsers = users.map((entry) => normalizeUser(entry as Record<string, unknown>));
    return NextResponse.json(normalizedUsers.filter((entry) => entry.email));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to load users.' },
      { status: 500 }
    );
  }
}
