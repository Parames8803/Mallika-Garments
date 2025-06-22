import { Phone, Mail, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@wholesaleclothing.com", "support@wholesaleclothing.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Fashion District", "New York, NY 10001"],
      description: "Visit our showroom",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM EST", "Sat: 10AM-4PM EST"],
      description: "Closed Sundays",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to start your wholesale journey? Get in touch with our team for personalized quotes and expert guidance.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get a Quote</CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you with a personalized quote.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your Business Name" required />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="online">Online Store</SelectItem>
                      <SelectItem value="boutique">Boutique</SelectItem>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="products">Products of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tshirts">T-Shirts</SelectItem>
                    <SelectItem value="hoodies">Hoodies</SelectItem>
                    <SelectItem value="shirts">Shirts</SelectItem>
                    <SelectItem value="jeans">Jeans</SelectItem>
                    <SelectItem value="athletic">Athletic Wear</SelectItem>
                    <SelectItem value="all">All Categories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantity">Expected Monthly Order Quantity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50-100 pieces</SelectItem>
                      <SelectItem value="100-500">100-500 pieces</SelectItem>
                      <SelectItem value="500-1000">500-1000 pieces</SelectItem>
                      <SelectItem value="1000+">1000+ pieces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Monthly Budget (USD)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business needs, specific requirements, or any questions you have..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base">
                Send Quote Request
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll only use your information to provide you
                with quotes and product updates.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                    <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Competitive Pricing</h4>
                  <p className="text-sm text-gray-600">Best wholesale prices in the market</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Fast Shipping</h4>
                  <p className="text-sm text-gray-600">Quick delivery worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Dedicated customer service</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-emerald-900 mb-2">Need Immediate Assistance?</h3>
              <p className="text-emerald-700 text-sm mb-4">Call our sales team directly for urgent inquiries</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Call Now: +1 (555) 123-4567</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
