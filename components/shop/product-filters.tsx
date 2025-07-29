"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface Category {
  id: string
  name: string
  slug: string
  productCount: number
}

interface ProductFiltersProps {
  categories: Category[]
}

export default function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([
    Number.parseInt(searchParams.get("minPrice") || "0"),
    Number.parseInt(searchParams.get("maxPrice") || "500000"),
  ])

  const selectedCategory = searchParams.get("category")

  const handleCategoryChange = (categorySlug: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString())

    if (checked) {
      params.set("category", categorySlug)
    } else {
      params.delete("category")
    }

    router.push(`/shop?${params.toString()}`)
  }

  const handlePriceChange = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())
    router.push(`/shop?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/shop")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.slug}
                    checked={selectedCategory === category.slug}
                    onCheckedChange={(checked) => handleCategoryChange(category.slug, checked as boolean)}
                  />
                  <Label htmlFor={category.slug} className="text-sm font-normal cursor-pointer flex-1">
                    {category.name} ({category.productCount})
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={500000}
                min={0}
                step={1000}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
              <Button onClick={handlePriceChange} variant="outline" size="sm" className="w-full bg-transparent">
                Apply Price Filter
              </Button>
            </div>
          </div>

          <Separator />

          {/* Clear Filters */}
          <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
