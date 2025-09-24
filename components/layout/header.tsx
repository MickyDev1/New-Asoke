"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import CartDrawer from "@/components/cart/cart-drawer";
import UserMenu from "@/components/auth/user-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { items } = useCart();
  const { user } = useAuth();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll listener to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // scrolling down, hide
        setVisible(false);
      } else {
        // scrolling up, show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              God's Grace Aso-Oke
            </Link>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* User menu */}
              {user ? (
                <UserMenu user={user} />
              ) : (
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 py-4 border-t">
            <Link href="/shop" className="hover:text-primary transition-colors">
              All Products
            </Link>
            <Link
              href="/shop?category=men"
              className="hover:text-primary transition-colors"
            >
              Men
            </Link>
            <Link
              href="/shop?category=women"
              className="hover:text-primary transition-colors"
            >
              Women
            </Link>
            <Link
              href="/shop?category=aso-oke"
              className="hover:text-primary transition-colors"
            >
              Aso-Oke
            </Link>
            <Link
              href="/shop?category=shoes"
              className="hover:text-primary transition-colors"
            >
              Shoes
            </Link>
            <Link
              href="/shop?category=accessories"
              className="hover:text-primary transition-colors"
            >
              Accessories
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile search */}
              <div className="mb-4">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Mobile navigation */}
              <nav className="flex flex-col gap-4">
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </Link>
                <Link
                  href="/shop?category=men"
                  className="hover:text-primary transition-colors"
                >
                  Men
                </Link>
                <Link
                  href="/shop?category=women"
                  className="hover:text-primary transition-colors"
                >
                  Women
                </Link>
                <Link
                  href="/shop?category=aso-oke"
                  className="hover:text-primary transition-colors"
                >
                  Aso-Oke
                </Link>
                <Link
                  href="/shop?category=shoes"
                  className="hover:text-primary transition-colors"
                >
                  Shoes
                </Link>
                <Link
                  href="/shop?category=accessories"
                  className="hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
