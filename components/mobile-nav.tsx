'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="font-semibold text-blue-600 mb-6 mt-4">PureFlow Water Filters</div>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="px-2 py-1 text-foreground hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="px-2 py-1 text-foreground hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/#benefits"
            className="px-2 py-1 text-foreground hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="/#testimonials"
            className="px-2 py-1 text-foreground hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="px-2 py-1 text-foreground hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 
