"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Premium Aso-Oke Collection",
    subtitle: "Authentic Nigerian Traditional Wear",
    description:
      "Discover our handcrafted Aso-Oke fabrics and traditional attire",
    image: "/images/hero.jpeg",
    cta: "Shop Aso-Oke",
    link: "/shop?category=aso-oke",
  },
  {
    id: 2,
    title: "Latest Fashion Trends",
    subtitle: "Style That Speaks",
    description: "Explore our curated collection of contemporary fashion",
    image: "/images/6827f8b3-a805-4051-903a-3cb32fb83f12.jpeg",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    id: 3,
    title: "Premium Footwear",
    subtitle: "Step Into Style",
    description: "Quality shoes for every occasion and style",
    image: "/images/shoes.png",
    cta: "Shop for your shoes here!",
    link: "/shop?category=shoes",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[98vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image || "/public/images/hero.jpeg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-sm md:text-base font-medium mb-2 opacity-90">
                {slide.subtitle}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Link href={slide.link}>
                <Button size="lg" className="text-lg px-8 py-3">
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
