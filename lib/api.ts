export async function getFeaturedProducts() {
  
  return [
    {
      id: "1",
      name: "Premium Aso-Oke Agbada",
      price: 200000,
      originalPrice: 250000,
      image: "/images/6827f8b3-a805-4051-903a-3cb32fb83f12.jpeg",
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
      image: "/images/6827f8b3-a805-4051-903a-3cb32fb83f12.jpeg",
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
      image: "/images/shoes.jpg",
      category: "Shoes",
      rating: 4.9,
      reviewCount: 32,
      isFeatured: true,
    },
    {
      id: "4",
      name: "Traditional Gele Headwrap",
      price: 15000,
      image: "/images/cap.jpg",
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
      image: "/images/6827f8b3-a805-4051-903a-3cb32fb83f12.jpeg",
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
      image: "/images/aso-oke.jpg",
      productCount: 23,
    },
    {
      id: "4",
      name: "Shoes",
      slug: "shoes",
      image: "/images/shoes.jpg",
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
    price: 200000,
    originalPrice: 250000,
    images: [
      "/images/Black Agbadas.jpeg",
      "/images/royal-blue.jpeg",
      "/images/white-men.jpeg",
    ],
    category: "Aso-Oke",
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Gold", "White"],
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
