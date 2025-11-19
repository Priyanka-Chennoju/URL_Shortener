import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { url } = await request.json();

  const id = Math.random().toString(36).substring(2, 8);

  const shortUrl = `http://localhost:3000/${id}`;

  return NextResponse.json({ shortUrl });
}
