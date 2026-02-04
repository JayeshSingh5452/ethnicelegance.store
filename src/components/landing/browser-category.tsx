import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";

const BrowserByDesignList = [
  {
    title: "Solid A-Line Paneled Dress with Layered Embroidered Kurta",
    price: "₹ 999.00",
    mrp: "₹ 1,499.00",
    imageId: "32931",
  },
  {
    title: "Ethnic Floral Printed Embroidered Kurta with Palazzo and Dupatta",
    price: "₹ 3,999.00",
    mrp: "₹ 9,999.00",
    imageId: "32975",
  },
  {
    title:
      "Solid Ethnic Embroidered A-Line Pleated Kurta with Palazzo and Dupatta",
    price: "₹ 3,349.00",
    mrp: "₹ 5,999.00",
    imageId: "32947",
  },
  {
    title: "Solid Floral Embroidered A-Line Kurta with Pant & Dupatta",
    price: "₹ 3,499.00",
    mrp: "₹ 8,999.00",
    imageId: "32977",
  },
];
export function BrowserCategorySection() {
  return (
    <section className="space-y-10">
      <div className="space-y-1">
        <h1 className="text-2xl font-serif ">Browser by design</h1>
        <p className="text-muted-foreground">
          Explore our curated collection of kurtas, thoughtfully categorized by
          design to help you find the perfect style that resonates with your
          unique taste.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {BrowserByDesignList.map((item, index) => (
          <Card className="max-w-sm mx-auto" key={index}>
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
                {item.title.split("").slice(0, 60).join("") + "..."}
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
