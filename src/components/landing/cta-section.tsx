import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-foreground text-background rounded-full">
          Limited Time Offer
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Start your Ethnic Elegance journey
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join thousands of satisfied customers. Get 15% off your first order with code
          ELEGANT15 plus free shipping on orders above Rs.1,999.
        </p>
        <Button className="bg-foreground text-background hover:bg-foreground/90">
          Shop Collection
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  )
}
