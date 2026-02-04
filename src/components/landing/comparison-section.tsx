import { Button } from "@/components/ui/button"
import Image from "next/image"

const comparisons = [
  {
    label: "Customer Satisfaction",
    value: "98% positive reviews vs. industry avg. 85%",
    percentage: 98,
  },
  {
    label: "Product Range",
    value: "500+ styles vs. typical store avg. 150 styles",
    percentage: 95,
  },
  {
    label: "Repeat Customers",
    value: "70% return rate vs. industry avg. 40%",
    percentage: 90,
  },
]

export function ComparisonSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <span className="text-primary text-sm font-medium">
                Why Choose Ethnic Elegance
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4 text-balance">
                The preferred choice for luxury ethnic wear
              </h2>
              <p className="text-muted-foreground mb-8">
                Ethnic Elegance has become the go-to destination for women seeking
                premium quality kurtas and ethnic fashion at competitive prices.
              </p>

              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">
                        {item.label}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {item.value}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-8 bg-transparent">
                Explore Our Store
              </Button>
            </div>

            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
              <Image
                src="/images/ethnic-elegance-model.jpg"
                alt="Elegant woman in designer kurta at Ethnic Elegance boutique"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-foreground/80 text-primary-foreground text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
                Trusted by 10,000+ customers since 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
