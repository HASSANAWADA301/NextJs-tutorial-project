import Header from "../../components/organisms/Header/Header";
import HomePage from "@/components/pages/HomePage/HomePage";
import AboutUsSection from "@/components/organisms/AboutUsSection/AboutUsSection";
import ServicesSection from "@/components/organisms/ServicesSection/ServicesSection";
import WhoWeAreSection from "@/components/organisms/WhoWeAreSection/WhoWeAreSection";
import StatsCard from "@/components/organisms/StatsCard/StatsCard";
import ProjectsSection from "@/components/organisms/ProjectsSection/ProjectsSection";
import FeedbackSection from "@/components/organisms/FeedbackSection/FeedbackSection";
import BestPriceSection from "@/components/organisms/BestPriceSection/BestPriceSection";
import Footer from "@/components/organisms/Footer/Footer";
import SubscribeClient from "@/components/organisms/SubscribeSection/SubscribeClient";


export default function Home() {
  return (
    <div className="App">
      <div className={`max-w-[1296px] justify-center items-center m-auto flex flex-col gap-[50px] h-auto`}>
        <Header />
        <HomePage />
        <AboutUsSection />
      </div>
      <div className="max-w-[1300px] m-auto items-center justify-center">
        <ServicesSection />
      </div>
      <div className="max-w-[1300px] m-auto items-center justify-center">
        <WhoWeAreSection />
      </div>
      <div className="max-w-[1296px] justify-center items-center m-auto flex flex-col gap-[50px] h-auto">
        <StatsCard />
      </div>
      <div className="max-w-[1300px] m-auto items-center justify-center">
        <ProjectsSection />
      </div>
      <div className="max-w-[1296px] justify-center items-center m-auto flex flex-col gap-[50px] h-auto">
        <BestPriceSection/>
      </div>
       <div className="max-w-[1300px] m-auto items-center justify-center">
        <FeedbackSection/>
      </div>
      <div className="max-w-[1296px] justify-center items-center m-auto flex flex-col gap-[50px] h-auto">
        <SubscribeClient/>
      </div>
      <div className='w-full bg-[#f6f6f6]'>
      <div className="max-w-[1300px] w-full m-auto items-center justify-center">
        <Footer/>
      </div>
      </div>
    </div>
  );
}
