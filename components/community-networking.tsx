'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, Calendar } from 'lucide-react'

export function CommunityNetworkingComponent() {
  const features = [
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Work with like-minded students on projects, study groups, and discussion forums."
    },
    {
      icon: UserPlus,
      title: "Mentorship Opportunities",
      description: "Get personalized advice from industry professionals who have succeeded in the business world."
    },
    {
      icon: Calendar,
      title: "Networking Events",
      description: "Join virtual networking events, workshops, and webinars to learn from thought leaders and expand your professional circle."
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
            Build Your Network, Grow Your Career
          </h2>
          <p className="text-[#38506e] text-lg max-w-2xl mx-auto">
            Business success isn't achieved in isolation—it's built through collaboration and networking. 
            At IntendCareer, we provide a dynamic community where students, educators, and professionals 
            can connect, share insights, and support one another.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#2581f3] text-xl">
                    <feature.icon className="w-6 h-6 mr-2" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#38506e]">{feature.description.replace(/'/g, '&apos;')}</p>
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
          <Button
            className="bg-[#f89820] text-[#fcfcfd] hover:bg-[#f89820]/90 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log("Navigate to Community page")}
          >
            Join Our Community
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2581f3]/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89820]/10 rounded-full filter blur-3xl -z-10" />
    </section>
  )
}