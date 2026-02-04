import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const BrowserByDesignList = [
  {
    title: "Straight Fit Kurta with Pants & Dupatta",
    price: "₹ 1,249.00",
    mrp: "₹ 3,499.00",
    imageId: "21077",
    label: "Best Seller",
  },
  {
    title: "Ethnic & Chevron Printed A-line High - Low Kurta with Palazzo",
    price: "₹ 1,299.00",
    mrp: "₹ 5,999.00",
    imageId: "20552",
    label: "New Arrival",
  },
  {
    title:
      "Solid Ethnic Embroidered A-Line Pleated Kurta with Palazzo and Dupatta",
    price: "₹ 3,349.00",
    mrp: "₹ 5,999.00",
    imageId: "21083",
    label: "Trending",
  },
  {
    title:
      "Ethnic Block Printed Empire Cut Gathered Waist Kurta with Pants & Dupatta",
    price: "₹ 2,519.00",
    mrp: "₹ 5,999.00",
    imageId: "21939",
    label: "Limited Stock",
  },
];
export function PopularKurta() {
  return (
    <section className="space-y-14">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Popular Kurtas</h1>
        <p className="text-muted-foreground">
          Discover our collection of popular kurtas, meticulously crafted to
          blend traditional elegance with contemporary style, perfect for any
          occasion.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {BrowserByDesignList.map((item, index) => (
          <Card className="max-w-sm mx-auto relative " key={index}>
            <Badge variant={"outline"} className="absolute inset-x-0 -top-3 mx-auto w-fit p-2.5 rounded-full">
              {item.label}
            </Badge>
            <CardHeader>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio
                        ratio={1 / 1}
                        className="bg-muted overflow-hidden rounded-lg"
                      >
                        <Image
                          src={`https://fashor.com/cdn/shop/files/${item.imageId}_${index + 1}.jpg?v=1768465887&width=1080`}
                          alt="Description"
                          width={350}
                          height={500}
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="font-medium">
                {item.title.split("").length > 60
                  ? item.title.split("").slice(0, 60).join("") + "..."
                  : item.title}
              </h2>

              <p className="text-lg font-semibold">
                {item.price}{" "}
                <span className="line-through font-normal text-sm text-muted-foreground">
                  {item.mrp}
                </span>
              </p>
              <Button variant={"secondary"} className="w-full">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
