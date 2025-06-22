import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "STYLE NO 13",
      image: "/IMG-20250618-WA0071.jpg",
      price: "₹38",
      ageRange: "2-8 years",
    },
    {
      id: 2,
      name: "STYLE NO 15",
      image: "/IMG-20250618-WA0072.jpg",
      price: "₹38",
    },
    {
      id: 3,
      name: "STYLE NO 14",
      image:  "/IMG-20250618-WA0073.jpg",
      price: "₹38",
    },
    {
      id: 4,
      name: "S.T.SHIRT S,M,L",
      image: "/IMG-20250618-WA0074.jpg",
      price: "₹88",
    },
    
    {
      id: 5,
      name: "S,M,L",
      image: "/IMG-20250618-WA0075.jpg",
      price: "₹88",
    },
    {
      id: 6,
      name: "STYLE NO 10",
      image: "/IMG-20250618-WA0076.jpg",
      price: "₹73",
    
    },
    {
      id: 7,
      name: "S,M,L ",
      image: "/IMG-20250618-WA0077.jpg",
      price: "₹88",
    },
    {
      id: 8,
      name: "STYLE NO 35",
      image: "/IMG-20250618-WA0078.jpg",
      price: "₹40",
    },
    {
      id: 9,
      name: "STYLE NO 30",
      image: "/IMG-20250618-WA0079.jpg",
      price: "₹38"
    },
    {
      id: 10,
      name: "STYLE NO 22",
      image: "/IMG-20250618-WA0080.jpg",
      price: "₹73"
    },
    {
      id: 11,
      name: "STYLE NO 19",
      image: "/IMG-20250618-WA0081.jpg",
      price: "₹73"
    },
    {
      id: 12,
      name: "STYLE NO 18",
      image: "/IMG-20250618-WA0082.jpg",
      price: "₹63"
    },
    {
      id: 13,
      name: "STYLE NO 25",
      image: "/IMG-20250618-WA0083.jpg",
      price: "₹63"
    },
    {
      id: 14,
      name: "STYLE NO 25",
      image: "/IMG-20250618-WA0084.jpg",
      price: "₹63"
    },
    {
      id: 15,
      name: "STYLE NO 25",
      image: "/IMG-20250618-WA0085.jpg",
      price: "₹63"
    },
    {
      id: 16,
      name: "STYLE NO 26",
      image: "/IMG-20250618-WA0086.jpg",
      price: "₹66"
    },
    {
      id: 17,
      name: "STYLE NO 17",
      image: "/IMG-20250618-WA0087.jpg",
      price: "₹63"
    },
    {
      id: 18,
      name: "STYLE NO 16",
      image: "/IMG-20250618-WA0088.jpg",
      price: "₹63"
    },
    {
      id: 19,
      name: "STYLE NO 24",
      image: "/IMG-20250618-WA0089.jpg",
      price: "₹73"
    },
    {
      id: 20,
      name: "STYLE NO 34",
      image: "/IMG-20250618-WA0090.jpg",
      price: "₹66"
    },
    {
      id: 21,
      name: "STYLE NO 29",
      image: "/IMG-20250618-WA0091.jpg",
      price: "₹63"
    },
    {
      id: 22,
      name: "STYLE NO 27",
      image: "/IMG-20250618-WA0092.jpg",
      price: "₹66"
    },
    {
      id: 23,
      name: "STYLE NO 1",
      image: "/IMG-20250618-WA0093.jpg",
      price: "₹20"
    },
    {
      id: 24,
      name: "STYLE NO 31",
      image: "/IMG-20250618-WA0094.jpg",
      price: "₹58"
    },
    {
      id: 25,
      name: "STYLE NO 32",
      image: "/IMG-20250618-WA0095.jpg",
      price: "₹58"
    },
    {
      id: 26,
      name: "STYLE NO 07",
      image: "/IMG-20250618-WA0096.jpg",
      price: "₹30"
    },
    {
      name: "STYLE NO 5",
      image: "/IMG-20250618-WA0097.jpg",
      price: "₹27"
    },
    {
      id: 28,
      name: "STYLE NO 06",
      image: "/IMG-20250618-WA0098.jpg",
      price: "₹28"
    },
    {
      id: 29,
      name: "STYLE NO 8",
      image: "/IMG-20250618-WA0099.jpg",
      price: "₹30"
    },
    {
      id: 30,
      name: "STYLE NO 3",
      image: "/IMG-20250618-WA0100.jpg",
      price: "₹24"
    },
    {
      id: 31,
      name: "STYLE NO 2",
      image: "/IMG-20250618-WA0102.jpg",
      price: "₹23"
    },
    {
      id: 32,
      name: "STYLE NO 11",
      image: "/IMG-20250618-WA00103.jpg",
      price: "₹58"
    },
    {
      id: 33,
      name: "STYLE NO 28",
      image: "/IMG-20250618-WA00104.jpg",
      price: "₹73"
    },
    {
      id: 34,
      name: "STYLE NO 1 PRINTING ",
      image: "/IMG-20250618-WA0105.jpg",
      price: "₹18"
    },
    {
      id: 35,
      name: "STYLE NO 4",
      image: "/IMG-20250618-WA0106.jpg",
      price: "₹27"
    },
    {
      id: 36,
      name: "STYLE NO 2 PRINTING ",
      image: "/IMG-20250618-WA0107.jpg",
      price: "₹20"
    },
  ]

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
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
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
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
        {products.map((product) => (
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
                <Button className="w-full text-xs sm:text-sm" size="sm" asChild>
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" className="w-full text-xs sm:text-sm" size="sm">
                  Quick Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8 sm:mt-12">
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
