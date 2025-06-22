import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Truck, Shield, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function ProductDetailPage() {
  const product = {
    id: 1,
    name: "Organic Cotton Kids T-Shirts",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      
    ],
    price: "$8.50",
    originalPrice: "$12.00",
    category: "T-Shirts",
    colors: ["Black", "White", "Navy", "Gray", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Soft, breathable organic cotton t-shirts perfect for active kids. Made with safe, non-toxic materials and designed for all-day comfort. Machine washable and built to last through countless adventures.",
    features: [
      "100% Organic Cotton",
      "Hypoallergenic Materials",
      "Reinforced Seams",
      "Tagless Design for Comfort",
      "Machine Washable",
      "Fade Resistant Colors",
    ],
    specifications: {
      Material: "100% Cotton",
      Weight: "180 GSM",
      Fit: "Regular Fit",
      Neck: "Round Neck",
      Sleeve: "Short Sleeve",
      Care: "Machine Wash Cold",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-emerald-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-emerald-600">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-lg"
            />
            <Button size="icon" variant="outline" className="absolute top-4 left-4" asChild>
              <Link href="/products">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="outline">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 sm:gap-2">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.8) 124 reviews</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-emerald-600">{product.price}</span>
              <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              <Badge variant="destructive">
                {Math.round(
                  ((Number.parseFloat(product.originalPrice.slice(1)) - Number.parseFloat(product.price.slice(1))) /
                    Number.parseFloat(product.originalPrice.slice(1))) *
                    100,
                )}
                % OFF
              </Badge>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Product Options */}
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium mb-2 block">Color</Label>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="min-w-[60px]">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium mb-2 block">Size</Label>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="min-w-[50px]">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 sm:space-y-3">
            <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              Add to Wishlist
            </Button>
          </div>

          {/* Features */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Product Features</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">John D.</span>
                      <span className="text-sm text-gray-500">Verified Buyer</span>
                    </div>
                    <p className="text-gray-600">
                      "Excellent quality t-shirts! The fabric is soft and durable. Perfect for our retail store."
                    </p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-sm text-gray-500">Verified Buyer</span>
                    </div>
                    <p className="text-gray-600">
                      "Great wholesale prices and fast shipping. Will definitely order again!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
