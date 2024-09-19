'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GraduationCap, Menu } from 'lucide-react'

export function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLinks = () => (
    <>
      <Link href="/" className="text-[#38506e] hover:text-[#2581f3] transition-colors">Home</Link>
      <Link href="#features" className="text-[#38506e] hover:text-[#2581f3] transition-colors">Features</Link>
      <Link href="#how-it-works" className="text-[#38506e] hover:text-[#2581f3] transition-colors">How It Works</Link>
      <Link href="#community" className="text-[#38506e] hover:text-[#2581f3] transition-colors">Community</Link>
      <Link href="#about" className="text-[#38506e] hover:text-[#2581f3] transition-colors">About Us</Link>
      <Link href="#contact" className="text-[#38506e] hover:text-[#2581f3] transition-colors">Connect With Us</Link>
    </>
  )

  return (
    <header className="w-full">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-[#2581f3]" />
              <span className="font-semibold text-xl text-[#0a274c]">IntendCareer</span>
            </Link>
            <nav className="hidden md:flex md:space-x-8">
              <NavLinks />
            </nav>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-black">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white backdrop-blur-md">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:block">
              <Button className="bg-[#2581f3] text-[#fcfcfd] hover:bg-[#2581f3]/90">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-[#fcfcfd]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0a274c] sm:text-5xl md:text-6xl">
              <span className="block">Revolutionizing</span>
              <span className="block text-[#2581f3]">Business Education</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-[#38506e] sm:max-w-xl">
              Personalized, interactive, and career-focused learning to prepare you for success in tomorrow's business world.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center sm:max-w-none">
              <Button className="w-full sm:w-auto text-[#fcfcfd] bg-[#2581f3] hover:bg-[#2581f3]/90 px-8 py-3 text-base font-medium">
                Explore the Platform
              </Button>
              <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto text-[#2581f3] border-[#2581f3] hover:bg-[#2581f3]/10 px-8 py-3 text-base font-medium">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}