"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Quote, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  rating: number
  product: string
  review: string
  isSpecial?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    name: "Ethnic Elegance",
    location: "Our First Order",
    image: "/images/first-order.png",
    rating: 5,
    product: "First Customer - A Milestone Moment",
    review: "Yay! Our first order is received! Thank you for trusting Ethnic Elegance. Your support means the world to us. We're excited to prepare something special for you.",
    isSpecial: true,
  },
  {
    id: 1,
    name: "Sneha Verma",
    location: "Mumbai",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    product: "Maroon Silk Kurta Set",
    review: "Absolutely loved the packaging! It felt so premium. The kurta fits perfectly and the silk quality is top-notch. Will definitely order again!",
  },
  {
    id: 2,
    name: "Pooja Krishnan",
    location: "Hyderabad",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    product: "Teal Mirror Work Kurta",
    review: "The mirror work is so beautiful and delicate. I wore it to my cousin's sangeet and got so many compliments. Thank you Ethnic Elegance!",
  },
  {
    id: 3,
    name: "Aarti Gupta",
    location: "Bangalore",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    product: "Ivory Chanderi Kurta",
    review: "The unboxing experience was amazing! Tissue paper, beautiful packaging, and a thank you card. The kurta itself is gorgeous.",
  },
  {
    id: 4,
    name: "Nisha Mehta",
    location: "Ahmedabad",
    image: "/images/testimonial-4.jpg",
    rating: 5,
    product: "Blush Pink Festive Kurta",
    review: "Perfect for Diwali celebrations! The color is exactly as shown and the embroidery work is stunning. Fast delivery too!",
  },
  {
    id: 5,
    name: "Lakshmi Rao",
    location: "Chennai",
    image: "/images/testimonial-5.jpg",
    rating: 5,
    product: "Navy Zardozi Kurta",
    review: "The zardozi work is exquisite. You can tell it's handcrafted with love. Worth every rupee spent. Already eyeing more pieces!",
  },
  {
    id: 6,
    name: "Simran Kaur",
    location: "Delhi",
    image: "/images/testimonial-6.jpg",
    rating: 5,
    product: "White Lucknowi Kurta",
    review: "The chikankari work is authentic and beautiful. Breathable fabric perfect for summers. Ethnic Elegance has a customer for life!",
  },
]

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + testimonials.length) % testimonials.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % testimonials.length)
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Happy Moments Shared
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Real photos from our customers when they received their Ethnic Elegance kurtas
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative cursor-pointer ${
                testimonial.isSpecial ? "col-span-2 md:col-span-1 row-span-1" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              {/* Special Badge for First Order */}
              {testimonial.isSpecial && (
                <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-medium">
                  <Sparkles className="h-3 w-3" />
                  <span>Our First Order</span>
                </div>
              )}
              
              {/* Image Container */}
              <div className={`relative overflow-hidden rounded-lg bg-muted ${
                testimonial.isSpecial ? "aspect-[4/5]" : "aspect-[4/5]"
              }`}>
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name}'s review of ${testimonial.product}`}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    testimonial.isSpecial ? "object-contain bg-amber-50" : "object-cover"
                  }`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                
                {/* Quick Info on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-primary-foreground text-sm font-medium truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-foreground/70 text-xs truncate">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <button
            type="button"
            className="text-sm font-medium text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            View All Reviews
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToPrev()
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Content */}
          <div
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={testimonials[selectedImage].image || "/placeholder.svg"}
                alt={testimonials[selectedImage].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Review Details */}
            <div className="text-center lg:text-left max-w-md">
              <Quote className="h-8 w-8 text-primary-foreground/30 mb-4 mx-auto lg:mx-0" />
              <p className="text-primary-foreground text-lg sm:text-xl leading-relaxed mb-6">
                {testimonials[selectedImage].review}
              </p>
              <div className="flex gap-1 justify-center lg:justify-start mb-3">
                {[...Array(testimonials[selectedImage].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-primary-foreground font-medium">
                {testimonials[selectedImage].name}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {testimonials[selectedImage].location}
              </p>
              <p className="text-primary-foreground/40 text-xs mt-2 uppercase tracking-wider">
                Purchased: {testimonials[selectedImage].product}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedImage
                    ? "bg-primary-foreground"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
