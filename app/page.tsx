import { Suspense } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import CategorySection from "@/components/home/category-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import NewsletterSection from "@/components/home/newsletter-section"
import { getFeaturedProducts, getCategories } from "@/lib/api"

export default async function HomePage() {
  const [featuredProducts, categories] = await Promise.all([getFeaturedProducts(), getCategories()])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategorySection categories={categories} />
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <FeaturedProducts products={featuredProducts} />
        </Suspense>
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
