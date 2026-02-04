import { Card } from "@/components/ui/card"
import Image from "next/image"

const stats = [
  { value: "New", label: "Arrivals Weekly" },
  { value: "EMI", label: "Options Available" },
  { value: "15%", label: "First Order Off" },
]

export function FabricSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/images/ethnic-elegance-collection.jpg"
              alt="Ethnic Elegance luxury kurta collection with accessories"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Exclusive Designer Collections
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From festive occasions to everyday elegance, Ethnic Elegance brings you
              the latest designer kurtas in silk, cotton, georgette, and more. Enjoy
              flexible payment options and exclusive discounts for our valued customers.
            </p>

            <div className="flex gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="flex-1 p-4 text-center border border-border bg-card"
                >
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
