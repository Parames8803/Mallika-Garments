"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t pt-4 mt-6 space-y-3">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button variant="outline" asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>

          <div className="border-t pt-4 mt-6 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>📞 +91 96779 71702</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️ malika.siteinfo@gmail.com</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
