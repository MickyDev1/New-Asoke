import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StyleHub - Premium Fashion Store",
  description: "Discover premium fashion, Aso-Oke, shoes and accessories. Fast delivery across Nigeria.",
  keywords: "fashion, aso-oke, shoes, accessories, nigeria, online shopping",
  openGraph: {
    title: "StyleHub - Premium Fashion Store",
    description: "Discover premium fashion, Aso-Oke, shoes and accessories",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
