import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingBag, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

import "./globals.css"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kids Fashion Store - Premium Children's Clothing",
  description:
    "Discover adorable, high-quality clothing for kids. Safe, comfortable, and stylish outfits that children love and parents trust.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4">
            {/* Top Bar */}
            <div className="hidden lg:flex items-center justify-between py-2 text-sm text-gray-600 border-b">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 96779 71702</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>malika.siteinfo@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <b>
                  <span>GSTIN:</span>
                </b>
                <span>33CDAPS6339B1ZS</span>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Image
                  src="/logo.png"
                  alt="Mallika Garments Logo"
                  width={100}
                  height={100}
                  className="h-100 w-100 object-contain"
                />
                {/* <span>Mallika Garments</span> */}
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Products
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Contact
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Gallery
                </Link>
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <Button variant="outline" asChild className="hidden lg:inline-flex">
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
              {/* Company Info */}
              <div className="flex-1 mb-8 md:mb-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">Mallika Garments</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Your trusted destination for premium kids' clothing. Quality fashion that's safe, comfortable, and fun for children.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>384/10B, PAPPA Nagar, Cotton Mill Road, Tirupur - 641602</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex-1 mb-8 md:mb-0 md:px-8 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">Home</Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white">Products</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex-1 md:pl-8">
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 96779 71702</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>malika.siteinfo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8 bg-gray-800" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="text-center md:text-left">
                <p>&copy; 2024 Mallika Garments. All rights reserved.</p>
                <a
                  href="https://hynox.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1 hover:text-emerald-600 cursor-pointer"
                >
                  Powered by Hynox
                </a>
              </div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
                <Link href="#" className="hover:text-white">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
