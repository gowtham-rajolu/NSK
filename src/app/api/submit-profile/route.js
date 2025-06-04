import { createConnection } from '@/lib/db';


export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullname,
      email,
      password,
      mobile,
      work_status,
      location,
      updates,
    } = body;

    const connection = await createConnection();

    const [result] = await connection.execute(
      `INSERT INTO user_profiles (fullname, email, password, mobile, work_status, location, updates) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [fullname, email, password, mobile, work_status, location, updates ? 1 : 0]
    );

    return new Response(
      JSON.stringify({ success: true, insertId: result.insertId }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Insert Error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
