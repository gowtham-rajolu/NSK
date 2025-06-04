import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    const db = await createConnection();
    const [rows] = await db.execute('SELECT * FROM user_profiles WHERE email = ? AND password = ?', [email, password]);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    
    return NextResponse.json({ message: 'Login successful', user: rows[0] });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
