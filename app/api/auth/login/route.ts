import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (email && password) {
      const user = {
        id: "demo-user-" + Date.now(),
        email,
        name: email.split("@")[0],
        role: email.includes("admin") ? "admin" : "customer",
      }

      return NextResponse.json(user)
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
