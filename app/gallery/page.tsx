import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      title: "Modern Manufacturing Facility",
      category: "Manufacturing",
      description: "State-of-the-art production facility with advanced machinery",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=400",
      title: "Quality Control Department",
      category: "Quality",
      description: "Rigorous quality testing and inspection processes",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      title: "Automated Warehouse",
      category: "Warehouse",
      description: "Efficient storage and inventory management systems",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=400",
      title: "Design Studio",
      category: "Design",
      description: "Creative workspace where our designers craft new collections",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=400",
      title: "Packaging & Shipping Center",
      category: "Logistics",
      description: "Fast and secure packaging for worldwide delivery",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=400",
      title: "Fabric Testing Laboratory",
      category: "Testing",
      description: "Advanced testing for safety, durability, and comfort",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=400",
      title: "Customer Service Center",
      category: "Support",
      description: "Dedicated team providing 24/7 customer support",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=400",
      title: "Executive Offices",
      category: "Management",
      description: "Leadership team overseeing global operations",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=400",
      title: "Research & Development",
      category: "Innovation",
      description: "Developing new materials and sustainable practices",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=400",
      title: "Training Facility",
      category: "Training",
      description: "Continuous education and skill development for our team",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=400",
      title: "Sustainability Center",
      category: "Environment",
      description: "Eco-friendly initiatives and green manufacturing processes",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=400",
      title: "Global Distribution Network",
      category: "Distribution",
      description: "Worldwide shipping and logistics coordination",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Company Infrastructure</h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={400}
                height={400}
                className="w-full h-32 sm:h-40 lg:h-56 xl:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <Badge className="absolute top-1 sm:top-2 lg:top-4 left-1 sm:left-2 lg:left-4 bg-emerald-600 text-xs">
                {image.category}
              </Badge>
            </div>
            <CardContent className="p-2 sm:p-3 lg:p-4">
              <h3 className="font-semibold text-xs sm:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 text-gray-900 line-clamp-2">
                {image.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 hidden sm:block">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-emerald-50 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Experience Our Excellence</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
          Our state-of-the-art infrastructure ensures every piece of clothing meets the highest standards of quality,
          safety, and comfort for your little ones.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Schedule a Tour
          </button>
          <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
