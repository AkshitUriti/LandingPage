'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export function ConnectWithUsComponent() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#fcfcfd] to-[#e0f0ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0a274c] mb-4">Connect with Us</h2>
          <p className="text-[#38506e] text-lg max-w-2xl mx-auto">
            We'd Love to Hear From You! Whether you have questions, need assistance, or want to share feedback, 
            the team at IntendCareer is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0a274c]">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Reason for contacting" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message or questions" required />
                </div>
                <Button type="submit" className="w-full bg-[#2581f3] hover:bg-[#2581f3]/90 text-[#fcfcfd]">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0a274c]">Other Ways to Reach Us</CardTitle>
              <CardDescription>We're always here to help. Choose the method that works best for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#0a274c] mb-2">Email</h3>
                <p className="text-[#38506e] flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-[#2581f3]" />
                  General inquiries: support@intendcareer.com
                </p>
                <p className="text-[#38506e] flex items-center mt-1">
                  <Mail className="w-5 h-5 mr-2 text-[#2581f3]" />
                  Support: help@intendcareer.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a274c] mb-2">Phone</h3>
                <p className="text-[#38506e] flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-[#2581f3]" />
                  +1 (123) 456-7890
                </p>
                <p className="text-[#38506e] text-sm mt-1">Available Monday to Friday, 9 AM to 5 PM (UTC)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a274c] mb-2">Social Media</h3>
                <p className="text-[#38506e] mb-2">Stay connected and follow us for updates:</p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2581f3] hover:text-[#f89820] transition-colors">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2581f3] hover:text-[#f89820] transition-colors">
                    <Twitter size={24} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2581f3] hover:text-[#f89820] transition-colors">
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}