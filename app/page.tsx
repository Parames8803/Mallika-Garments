import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Users, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products, Product } from "./products/data"

export default function HomePage() {
  // Pick the first 4 products as featured
  const featuredProducts: Product[] = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-600 hover:bg-emerald-700">Kids Fashion</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Kids Clothing Manufacturer
                  <span className="text-emerald-400"></span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover adorable, high-quality clothing for your little ones. Safe, comfortable, and stylish outfits
                  that kids love and parents trust.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/products">
                    Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-slate-900"
                  asChild
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/IMG_3310.jpg?height=500&width=500"
                alt="Fashion Collection"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional wholesale clothing solutions with unmatched quality and service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Safe Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Quick delivery worldwide with tracking</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Comfort First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Premium materials and craftsmanship</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Better prices for larger quantities</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Parent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated customer service team</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular wholesale clothing items</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-32 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600">{product.price}</span>
                    <span className="text-xs sm:text-sm text-gray-500">per piece</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Age Range: {product.ageRange}</p>
                  <Button className="w-full text-xs sm:text-sm" size="sm" asChild>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dress Your Little Ones?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of happy parents worldwide</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
