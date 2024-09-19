'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Trophy, Users, FileText, BarChart } from 'lucide-react'

export function CoreFeaturesComponent() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "Our AI-driven platform analyzes your strengths and areas for growth to design a learning plan specific to your goals."
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Boost engagement with interactive quizzes, leaderboards, and achievements to make learning fun and competitive."
    },
    {
      icon: Users,
      title: "Industry Mentorship",
      description: "Access to experienced professionals who will provide career guidance and mentorship, helping you navigate your journey."
    },
    {
      icon: FileText,
      title: "Career Development Tools",
      description: "Leverage tools like resume-building guides, mock interviews, and job boards to prepare for the business world."
    },
    {
      icon: BarChart,
      title: "Progress Tracking and Analytics",
      description: "Use dashboards and reports to monitor your academic progress, receive feedback, and refine your learning path."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#fcfcfd] to-[#e0f0ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0a274c] mb-4">
            What You'll Get with IntendCareer
          </h2>
          <p className="text-[#38506e] text-lg max-w-2xl mx-auto">
            Discover our innovative features designed to enhance your learning experience and prepare you for a successful career in business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-[#2581f3] text-white shadow-lg'
                      : 'bg-white hover:bg-[#2581f3]/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="flex items-center p-4">
                    <feature.icon className={`w-6 h-6 mr-3 ${
                      activeFeature === index ? 'text-white' : 'text-[#2581f3]'
                    }`} />
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-xl"
          >
            <div className="flex justify-center mb-4">
            {/* {features[activeFeature].icon && (
                <features[activeFeature].icon className="w-16 h-16 text-[#2581f3]" />
            )} */}
            </div>
            <h3 className="text-2xl font-bold text-[#0a274c] mb-4 text-center">
              {features[activeFeature].title}
            </h3>
            <p className="text-[#38506e] text-center">
              {features[activeFeature].description.replace(/'/g, '&apos;')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            className="bg-[#f89820] text-[#fcfcfd] hover:bg-[#f89820]/90 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log("Navigate to Features page")}
          >
            Explore Features
          </Button>
        </motion.div>
      </div>
    </section>
  )
}