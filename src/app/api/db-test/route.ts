import { NextResponse } from 'next/server';
import { getMongoClient } from '../../../lib/mongodb';

export async function GET() {
  console.log('🔍 /api/db-test called — checking MongoDB connection');

  try {
    const client = await getMongoClient();
    console.log('🔌 getMongoClient() resolved');
    const admin = client.db().admin();
    const info = await admin.ping();
    console.log('✅ MongoDB ping succeeded');

    return NextResponse.json({ connected: true, info });
  } catch (error) {
    console.error('🔴 /api/db-test failed:', error);
    return NextResponse.json(
      {
        connected: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
