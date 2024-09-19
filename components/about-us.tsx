'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Globe } from 'lucide-react'

export function AboutUsComponent() {
  const values = [
    {
      icon: Target,
      title: "Our Purpose",
      description: "To empower students at every stage of their business education journey."
    },
    {
      icon: Heart,
      title: "Our Commitment",
      description: "We are dedicated to providing high-quality, interactive, and technology-enhanced educational experiences for the next generation of business professionals."
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "To create a global community of learners, educators, and professionals working together to drive success in business education."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#fcfcfd] to-[#e0f0ff] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0a274c] mb-4">
            Who We Are
          </h2>
          <p className="text-[#38506e] text-lg max-w-3xl mx-auto">
            At IntendCareer, we are a team of passionate educators, technologists, and business leaders who are transforming business education. Our mission is simple: to make business education more accessible, personalized, and practical by leveraging the latest advancements in AI and interactive learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-[#2581f3]">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#2581f3] text-xl">
                    <value.icon className="w-6 h-6 mr-2" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#38506e]">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-2xl font-semibold text-[#0a274c] italic">
            "Empowering the next generation of business leaders through innovative education."
          </blockquote>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2581f3]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89820]/10 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
          <path fill="#2581f3" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,76.2,44.2C68.5,57.8,57.6,69.6,44.2,77.7C30.8,85.7,15.4,90,-0.9,91.5C-17.2,93,-34.4,91.7,-47.8,83.9C-61.2,76.1,-70.8,61.8,-77.6,46.4C-84.4,31,-88.4,15.5,-88.5,-0.1C-88.6,-15.7,-84.8,-31.3,-77.2,-45.2C-69.6,-59.1,-58.2,-71.2,-44.4,-78.6C-30.6,-86,-15.3,-88.7,0.3,-89.2C15.9,-89.7,31.7,-88,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  )
}