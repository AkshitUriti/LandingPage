'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function ProblemStatementComponent() {
  return (
    <section className="py-16 bg-[#fcfcfd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0a274c] mb-6">The Problem We're Solving</h2>
          <p className="text-[#38506e] mb-12">
            In today's rapidly evolving business landscape, traditional education often falls short. 
            At IntendCareer, we're addressing the critical gaps that leave many students unprepared for the real world of business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2581f3]">
                <AlertCircle className="w-5 h-5 mr-2" />
                Limited Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#38506e]">
                Quality business education resources are often restricted to elite institutions or come with prohibitive costs, 
                leaving many aspiring professionals without access to crucial knowledge and skills.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2581f3]">
                <AlertCircle className="w-5 h-5 mr-2" />
                Lack of Practical Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#38506e]">
                Traditional curricula often emphasize theory over practice, leaving graduates ill-equipped to handle 
                real-world business challenges and lacking the hands-on experience employers value.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2581f3]">
                <AlertCircle className="w-5 h-5 mr-2" />
                Insufficient Networking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#38506e]">
                Many educational programs fail to provide adequate networking opportunities, leaving students 
                without the vital connections and community support needed to thrive in the business world.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-[#2581f3] text-[#fcfcfd] hover:bg-[#2581f3]/90">
            Learn More About Our Approach
          </Button>
        </div>
      </div>
    </section>
  )
}