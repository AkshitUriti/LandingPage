import { HeaderComponent } from "@/components/header" // {{ edit_1 }}
import { ProblemStatementComponent } from "@/components/problem-statement" // {{ edit_2 }}
import { SolutionOverviewComponent } from "@/components/solution-overview" 
import { CoreFeaturesComponent } from "@/components/core-features"
import { CommunityNetworkingComponent } from "@/components/community-networking" // {{ edit_1 }}
import { AboutUsComponent } from "@/components/about-us" // {{ edit_1 }}
import { FooterComponent } from "@/components/footer" // {{ edit_1 }}
import { ConnectWithUsComponent } from "@/components/connect-with-us" // {{ edit_1 }}

export default function Home() {
  return (
    <>
      <HeaderComponent /> {/* {{ edit_3 }} */}      
      <ProblemStatementComponent /> {/* {{ edit_4 }} */}
      <SolutionOverviewComponent />
      <CoreFeaturesComponent />
      <CommunityNetworkingComponent /> {/* {{ edit_5 }} */}
      <AboutUsComponent /> {/* {{ edit_6 }} */}
      <ConnectWithUsComponent /> {/* Added ConnectWithUsComponent */}
      <FooterComponent /> {/* {{ edit_7 }} */} {/* Added FooterComponent */}
    </>
  )
}