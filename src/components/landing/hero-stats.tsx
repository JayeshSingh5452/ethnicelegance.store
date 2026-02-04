import { Crown, ShoppingBag, Truck, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  {
    icon: Crown,
    value: "500+",
    label: "Designer Kurtas",
    description: "Exclusive luxury collections",
  },
  {
    icon: ShoppingBag,
    value: "10K+",
    label: "Happy Customers",
    description: "Trusted by women nationwide",
  },
  {
    icon: Truck,
    value: "Free",
    label: "Express Delivery",
    description: "On orders above Rs.1,999",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Store Rating",
    description: "Rated on Google Reviews",
  },
]

export function HeroStats() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary text-primary-foreground rounded-full">
            Ethnic Elegance
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Luxury kurtas that define{" "}
            <span className="bg-primary/20 px-2 rounded">your style</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Welcome to Ethnic Elegance - your premium destination for luxury women's
            kurtas and ethnic wear. Discover designer collections crafted for the modern woman.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-secondary">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
