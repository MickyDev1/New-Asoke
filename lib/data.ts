export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Micky Dev",
    location: "Lagos, Nigeria",
    rating: 5,
    comment:
      "The Aso-Oke quality is exceptional! I received so many compliments at my wedding. StyleHub truly delivers authentic Nigerian fashion.",
    image: "/images/micky_dev.jpg",
  },
  {
    id: 2,
    name: "Micky Dev",
    location: "Abuja, Nigeria",
    rating: 5,
    comment:
      "Fast delivery and excellent customer service. The agbada I ordered fit perfectly and the fabric quality exceeded my expectations.",
    image: "/images/micky_dev.jpg",
  },
  {
    id: 3,
    name: "Micky Dev",
    location: "Ogun State, Nigeria",
    rating: 5,
    comment:
      "Love the variety of designs! StyleHub has become my go-to for traditional and modern African fashion. Highly recommended!",
    image: "/images/WhatsApp Image 2025-07-04 at 11.08.43_5fe8bde9.jpg",
  },
];
