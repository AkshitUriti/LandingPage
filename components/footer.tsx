'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Instagram } from 'lucide-react'

export function FooterComponent() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a274c] text-[#fcfcfd] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">IntendCareer</h3>
            <p className="text-sm text-[#fcfcfd]/80">
              Empowering the next generation of business leaders through innovative education.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm hover:text-[#f89820] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-[#f89820] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-[#f89820] transition-colors">Blog (Coming Soon)</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm hover:text-[#f89820] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-[#f89820] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#fcfcfd]/10 border-[#fcfcfd]/20 text-[#fcfcfd] placeholder-[#fcfcfd]/50"
              />
              <Button type="submit" className="w-full bg-[#f89820] hover:bg-[#f89820]/90 text-[#fcfcfd]">
                Send
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#fcfcfd]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#fcfcfd]/80">
            © {currentYear} IntendCareer. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#fcfcfd] hover:text-[#f89820] transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#fcfcfd] hover:text-[#f89820] transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#fcfcfd] hover:text-[#f89820] transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}