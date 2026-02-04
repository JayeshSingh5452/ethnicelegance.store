import { Card } from "@/components/ui/card";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Designer Brands" },
  { value: "3", label: "Store Locations" },
  { value: "24/7", label: "Online Shopping" },
];

export function CraftsmanshipSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Premium Shopping Experience
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Ethnic Elegance, we curate the finest luxury kurtas from top
              designers across India. Visit our elegant boutiques or shop online
              for a seamless experience with personalized styling assistance and
              exclusive member benefits.
            </p>

            <div className="flex gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="flex-1 p-4 text-center border border-border"
                >
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/ethnic-elegance-boutique.jpg"
              alt="Ethnic Elegance luxury boutique interior with designer kurtas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
