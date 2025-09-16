import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Micky Dev",
    location: "Lagos, Nigeria",
    rating: 5,
    comment:
      "The Aso-Oke quality is exceptional! I received so many compliments at my wedding. StyleHub truly delivers authentic Nigerian fashion.",
    image: "../../public/images/micky_dev.jpg",
  },
  {
    id: 2,
    name: "Micky Dev",
    location: "Abuja, Nigeria",
    rating: 5,
    comment:
      "Fast delivery and excellent customer service. The agbada I ordered fit perfectly and the fabric quality exceeded my expectations.",
    image: "../../public/images/micky_dev.jpg",
  },
  {
    id: 3,
    name: "Micky Dev",
    location: "Ogun State, Nigeria",
    rating: 5,
    comment:
      "Love the variety of designs! StyleHub has become my go-to for traditional and modern African fashion. Highly recommended!",
    image: "../../public/images/WhatsApp Image 2025-07-04 at 11.08.43_5fe8bde9.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their StyleHub experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
