'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

export default function Home() {
  const { toast } = useToast()

  const showQuoteToast = () => {
    toast({
      title: "Quote Request Received",
      description: "Thank you! A PureFlow representative will contact you shortly.",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Clean water pouring from filter" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 pt-32 pb-28">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-white">
              Pure Water, Better Life
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-[600px] mx-auto">
              Premium water filtration systems that remove contaminants and deliver clean, great-tasting water for your home and family.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700">Shop Filters</Button>
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/10 bg-black/30" onClick={showQuoteToast}>
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PureFlow Filters?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="overflow-hidden">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced Filtration Technology" 
                fill 
                style={{objectFit: 'cover'}}
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Advanced Filtration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our multi-stage filtration technology removes 99.9% of contaminants including lead, chlorine, and harmful bacteria.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1543393470-b2d900fb7f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Easy Installation" 
                fill 
                style={{objectFit: 'cover'}}
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our filters install in minutes with no special tools required. Professional installation also available.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Cost Effective" 
                fill 
                style={{objectFit: 'cover'}}
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Save thousands compared to bottled water while helping the environment by reducing plastic waste.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Filters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1550861559-49e3b91ac929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Under-sink Filter System" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Under-Sink Pro Filter</h3>
                <p className="text-muted-foreground mb-4">
                  Our most popular model, perfect for kitchens and bathrooms.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">99.99</span>
                  <Button size="sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Whole House Filter System" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Whole House System</h3>
                <p className="text-muted-foreground mb-4">
                  Complete filtration for every water source in your home.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">99.99</span>
                  <Button size="sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1523362289600-a70b4a0e09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Countertop Filter" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Countertop Filter</h3>
                <p className="text-muted-foreground mb-4">
                  Portable solution with no installation required.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">49.99</span>
                  <Button size="sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground mb-4">
                "Since installing the PureFlow system, we've noticed a significant improvement in our water quality. No more chlorine smell and the taste is amazing!"
              </p>
              <p className="font-semibold">- Sarah Johnson, Chicago</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground mb-4">
                "The installation was incredibly easy and the customer service team was helpful every step of the way. I'm saving so much money compared to bottled water."
              </p>
              <p className="font-semibold">- Michael Rodriguez, Phoenix</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">
              Ready for Cleaner, Healthier Water?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Schedule a free water quality test and consultation with one of our water filtration experts.
            </p>
            <Button size="lg" variant="secondary" className="px-8" onClick={showQuoteToast}>
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

