import HeroSection from "../../organisms/HeroSection/HeroSection";
import SecondSection from "../../organisms/SecondSection/SecondSection";

const HomePage: React.FC = () => (
  <div
    className={`
      flex items-center m-auto gap-[50px]
      max-[1335px]:flex-col max-[1335px]:gap-[30px]
      max-[1024px]:flex-col 
      max-[768px]:w-full
    `}
  >
    <HeroSection />
    <SecondSection/>
  </div>
);

export default HomePage;
