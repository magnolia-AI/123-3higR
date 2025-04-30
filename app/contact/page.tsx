'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

export default function ContactPage() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "Thank you for contacting PureFlow. We'll be in touch shortly!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Contact Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Clean water" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 pt-24 pb-20">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
              Contact PureFlow
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-[600px] mx-auto">
              Have questions about our water filtration systems? Our experts are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and one of our water filtration experts will contact you to discuss your needs and recommend the best solution for your home or business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(800) 555-PURE</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@pureflowfilters.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">123 Filtration Way<br />Clearwater, FL 33755</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">
                  I'm interested in:
                </label>
                <select id="interest" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select an option</option>
                  <option value="under-sink">Under-Sink Filter</option>
                  <option value="whole-house">Whole House System</option>
                  <option value="countertop">Countertop Filter</option>
                  <option value="other">Other/Not Sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your water filtration needs..." rows={4} required />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Visit Our Showroom</h2>
          <div className="max-w-[1000px] mx-auto h-[400px] relative rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
              alt="Map location" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
