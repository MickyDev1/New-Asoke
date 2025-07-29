// Mock API functions - replace with real database calls

export async function getFeaturedProducts() {
  // Mock data
  return [
    {
      id: "1",
      name: "Premium Aso-Oke Agbada",
      price: 85000,
      originalPrice: 100000,
      image: "/placeholder.svg?height=400&width=400",
      category: "Aso-Oke",
      rating: 4.8,
      reviewCount: 24,
      isNew: true,
      isFeatured: true,
    },
    {
      id: "2",
      name: "Designer Ankara Dress",
      price: 35000,
      image: "/placeholder.svg?height=400&width=400",
      category: "Women",
      rating: 4.6,
      reviewCount: 18,
      isFeatured: true,
    },
    {
      id: "3",
      name: "Leather Oxford Shoes",
      price: 45000,
      originalPrice: 55000,
      image: "/placeholder.svg?height=400&width=400",
      category: "Shoes",
      rating: 4.9,
      reviewCount: 32,
      isFeatured: true,
    },
    {
      id: "4",
      name: "Traditional Gele Headwrap",
      price: 15000,
      image: "/placeholder.svg?height=400&width=400",
      category: "Accessories",
      rating: 4.7,
      reviewCount: 15,
      isNew: true,
      isFeatured: true,
    },
  ]
}

export async function getCategories() {
  return [
    {
      id: "1",
      name: "Men",
      slug: "men",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 45,
    },
    {
      id: "2",
      name: "Women",
      slug: "women",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 67,
    },
    {
      id: "3",
      name: "Aso-Oke",
      slug: "aso-oke",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 23,
    },
    {
      id: "4",
      name: "Shoes",
      slug: "shoes",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 34,
    },
    {
      id: "5",
      name: "Accessories",
      slug: "accessories",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 28,
    },
  ]
}

export async function getProducts(filters?: any) {
  // Mock implementation - replace with real database query
  const allProducts = await getFeaturedProducts()
  return allProducts
}

export async function getProduct(id: string) {
  // Mock implementation
  return {
    id,
    name: "Premium Aso-Oke Agbada",
    description:
      "Handcrafted traditional Nigerian Agbada made from premium Aso-Oke fabric. Perfect for special occasions and cultural events.",
    price: 85000,
    originalPrice: 100000,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Aso-Oke",
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Gold", "Burgundy"],
    specifications: {
      Material: "Premium Aso-Oke Fabric",
      Origin: "Handwoven in Nigeria",
      Care: "Dry clean only",
      Fit: "Traditional loose fit",
    },
  }
}

export async function getRelatedProducts(productId: string) {
  const featured = await getFeaturedProducts()
  return featured.filter((p) => p.id !== productId).slice(0, 4)
}
