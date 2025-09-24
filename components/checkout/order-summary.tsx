import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

export default function OrderSummary({ items, total }: OrderSummaryProps) {
  const subtotal = total;
  const shipping = total > 50000 ? 0 : 2500; // Free shipping over ₦50,000
  const tax = Math.round(total * 0.075); // 7.5% VAT
  const finalTotal = subtotal + shipping + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="flex gap-3"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                {(item.size || item.color) && (
                  <p className="text-xs text-gray-500">
                    {item.size && `Size: ${item.size}`}
                    {item.size && item.color && " • "}
                    {item.color && `Color: ${item.color}`}
                  </p>
                )}
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </span>
                  <span className="text-sm font-medium">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Totals */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? "Free" : `₦${shipping.toLocaleString()}`}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>VAT (7.5%)</span>
            <span>₦{tax.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₦{finalTotal.toLocaleString()}</span>
          </div>
        </div>

        {shipping === 0 && (
          <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
            🎉 You are qualified for free shipping!
          </div>
        )}
      </CardContent>
    </Card>
  );
}
