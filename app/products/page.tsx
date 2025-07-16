"use client"

import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, Product } from "./data"
import { openWhatsAppQuote } from "@/lib/utils"

export default function ProductsPage() {
  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Dresses",
    "Pants",
    "Pajamas",
    "Accessories",
    "Shorts",
    "Outerwear",
    "Swimwear",
  ]

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Kids Clothing Collection</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Browse our adorable collection of high-quality clothing designed for comfort and style
        </p>
      </div>

      {/* Filters */}
      {/* <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10">$0 - $10</SelectItem>
              <SelectItem value="10-20">$10 - $20</SelectItem>
              <SelectItem value="20-30">$20 - $30</SelectItem>
              <SelectItem value="30+">$30+</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> */}

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
        {products.map((product: Product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-32 sm:h-40 lg:h-48 xl:h-56 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-2 sm:p-3 lg:p-4 xl:p-6">
              <h3 className="font-semibold text-xs sm:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-emerald-600">
                  {product.price}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Age Range: {product.ageRange}</p>
              <div className="flex flex-col gap-1 sm:gap-2">
                <Button
                  className="w-full text-xs sm:text-sm bg-black hover:bg-gray-800 text-white"
                  size="sm"
                  type="button"
                  onClick={() => openWhatsAppQuote(product)}
                >
                  Quick Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
