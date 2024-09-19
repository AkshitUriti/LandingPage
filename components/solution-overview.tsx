'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, BarChart3, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionOverviewComponent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Personalized Learning",
      description: "Tailored courses, quizzes, and feedback based on your unique learning style and career aspirations. Our AI adapts to your progress, ensuring you're always challenged and engaged."
    },
    {
      icon: BarChart3,
      title: "Interactive Case Studies and Simulations",
      description: "Apply theoretical concepts to real-world scenarios and industry challenges. Our interactive simulations provide hands-on experience in decision-making and problem-solving."
    },
    {
      icon: Users,
      title: "Strong Professional Network",
      description: "Connect with peers, educators, and industry experts to build meaningful relationships and foster career growth. Our platform facilitates networking opportunities and collaborative projects."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#fcfcfd] via-[#f0f7ff] to-[#e0f0ff] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0a274c] mb-4">
            Our Solution: A Modern Approach to Business Education
          </h2>
          <p className="text-[#38506e] text-lg">
            At IntendCareer, we've reimagined business education by integrating AI-powered learning paths, 
            practical tools, and community support to create a holistic educational platform.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2581f3] to-[#f89820]" />
                  <CardTitle className="flex items-center text-[#2581f3] text-xl">
                    <solution.icon className="w-6 h-6 mr-2" />
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#38506e]">
                    {solution.description}
                  </p>
                  <motion.div 
                    className="mt-4 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="text-[#2581f3]" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            className="bg-[#f89820] text-[#fcfcfd] hover:bg-[#f89820]/90 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log("Navigate to How It Works section")}
          >
            How It Works
          </Button>
        </motion.div>

        {/* Creative background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#2581f3]/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f89820]/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  )
}