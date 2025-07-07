"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import React, { useState } from "react";

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
      details: ["+91 96779 71702"],
      description: "Mon-Sat 9AM-6PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["malika.siteinfo@gmail.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["384/10B, PAPPA Nagar", "Cotton Mill Road, Tirupur - 641602"],
      description: "Visit our showroom",
    }
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: ["Mon-Sat: 9AM-6PM"],
    //   description: "Closed Sundays",
    // },
  ]

  const [businessType, setBusinessType] = useState("");
  const [businessTypeLabel, setBusinessTypeLabel] = useState("");

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
                <div className="sm:col-span-2 flex gap-4">
                  <div className="w-1/2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="w-1/2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 1234567890" />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    value={businessType}
                    onValueChange={(val) => {
                      setBusinessType(val);
                      const labelMap: Record<string, string> = {
                        retail: "Retail Store",
                        online: "Online Store",
                        boutique: "Boutique",
                        distributor: "Distributor",
                        other: "Other",
                      };
                      setBusinessTypeLabel(labelMap[val as keyof typeof labelMap] || "");
                    }}
                  >
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

              {/* <div>
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
              </div> */}

              {/* <div>
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
              </div> */}

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Example Style No 1, Style No 2, Style No 3, etc.. and Quantity"
                  rows={4}
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base"
                type="button"
                onClick={() => {
                  const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value || '';
                  const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value || '';
                  const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                  const text =
                    `📝 *New Quote Request*\n` +
                    `-----------------------------\n` +
                    `👤 *Name*: ${firstName} ${lastName}\n` +
                    `📞 *Phone*: ${phone}\n` +
                    `🏢 *Business Type*: ${businessTypeLabel || '-'}\n` +
                    `💬 *Message*: ${message || '-'}\n` +
                    `-----------------------------`;
                  window.open(`https://wa.me/919677971702?text=${encodeURIComponent(text)}`);
                }}
              >
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

          {/* <Card>
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
          </Card> */}

          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-emerald-900 mb-2">Need Immediate Assistance?</h3>
              <p className="text-emerald-700 text-sm mb-4">Call our sales team directly for urgent inquiries</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Call Now: +91 96779 71702</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
