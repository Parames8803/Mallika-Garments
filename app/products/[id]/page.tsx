"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Truck, Shield, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { products, Product } from "../data"
import { useParams, notFound } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

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
              src={product.image || "/placeholder.svg"}
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
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-emerald-600">{product.price}</span>
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
        </div>
      </div>
    </div>
  )
}
