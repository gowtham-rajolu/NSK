import { createConnection } from "@/lib/db";

export async function GET() {
  try {
    const conn = await createConnection();
    const [rows] = await conn.query("SELECT 1");
    return Response.json({ success: true, message: "Database connected successfully", result: rows });
  } catch (error) {
    console.error("Database connection error:", error);
    return Response.json({ success: false, message: "Database connection failed", error: error.message });
  }
}
    