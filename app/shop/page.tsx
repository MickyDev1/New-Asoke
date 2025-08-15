import { Suspense } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductFilters from "@/components/shop/product-filters";
import ProductGrid from "@/components/shop/product-grid";
import ProductSort from "@/components/shop/product-sort";
import { getProducts, getCategories } from "@/lib/api";

interface SearchParams {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  search?: string;
  page?: string;
}

interface ShopPageProps {
  searchParams: SearchParams;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const [products, categories] = await Promise.all([
    getProducts(searchParams),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop</h1>
          <p className="text-gray-600">
            Discover our complete collection of premium fashion and traditional
            wear
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters categories={categories} />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {products.length} products
              </p>
              <ProductSort />
            </div>

            {/* Products Grid */}
            <Suspense
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="h-96 bg-gray-200 animate-pulse rounded-lg"
                    />
                  ))}
                </div>
              }
            >
              <ProductGrid products={products} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
