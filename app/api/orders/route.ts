import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Here you would typically:
    // 1. Validate the order data
    // 2. Save to database
    // 3. Process payment
    // 4. Send confirmation email
    // 5. Update inventory

    // Mock order creation
    const order = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // In a real app, save to database here
    console.log("Order created:", order)

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error("Order creation failed:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET() {
  // Mock orders data for admin
  const orders = [
    {
      id: "ORD-1",
      customer: "John Doe",
      email: "john@example.com",
      total: 45000,
      status: "pending",
      createdAt: "2024-01-15T10:30:00Z",
      items: [{ name: "Premium Aso-Oke Agbada", quantity: 1, price: 45000 }],
    },
  ]

  return NextResponse.json(orders)
}
