import { HeaderComponent } from "@/components/header" // {{ edit_1 }}
import { ProblemStatementComponent } from "@/components/problem-statement" // {{ edit_2 }}

export default function Home() {
  return (
    <>
      <HeaderComponent /> {/* {{ edit_3 }} */}
      <ProblemStatementComponent /> {/* {{ edit_4 }} */}
    </>
  )
}