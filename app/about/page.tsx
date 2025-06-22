import Image from "next/image"
import { Users, Award, Globe, Clock } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Clock, label: "Orders Processed", value: "100K+" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years in fashion industry",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Supply chain expert",
    },
    {
      name: "Emily Rodriguez",
      role: "Quality Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures premium standards",
    },
    {
      name: "David Kim",
      role: "Customer Success",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to client satisfaction",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Our Company</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are a leading wholesale clothing supplier dedicated to providing high-quality fashion at competitive
          prices. With over 15 years of experience, we serve retailers worldwide with exceptional products and service.
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2008, our company started as a small family business with a vision to make high-quality
                fashion accessible to retailers of all sizes. What began as a local operation has grown into a global
                wholesale network.
              </p>
              <p>
                We believe that every retailer deserves access to premium clothing at fair wholesale prices. Our
                commitment to quality, reliability, and customer service has made us a trusted partner for thousands of
                businesses worldwide.
              </p>
              <p>
                Today, we work directly with manufacturers to ensure the highest standards while maintaining competitive
                pricing. Our streamlined supply chain allows us to offer fast shipping and consistent inventory
                availability.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Our warehouse"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-emerald-600" />
                </div>
                Quality First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high
                standards before reaching our customers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-emerald-600" />
                </div>
                Customer Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We provide personalized service and support to help
                your business succeed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-emerald-600" />
                </div>
                Global Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                With shipping to over 50 countries, we make it easy for businesses worldwide to access premium wholesale
                clothing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <Badge variant="outline" className="mb-2">
                  {member.role}
                </Badge>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-emerald-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          To empower retailers worldwide by providing access to high-quality wholesale clothing at competitive prices,
          backed by exceptional service and reliable partnerships that help businesses grow and succeed in the fashion
          industry.
        </p>
      </section>
    </div>
  )
}
