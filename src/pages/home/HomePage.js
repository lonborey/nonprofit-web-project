import HeaderComponent from "../../components/HeaderComponent";
import HeroComponent from "../../components/HeroComponent";
import PartnerComponent from "../../components/PartnerComponent";
import TopBarComponent from "../../components/TopBarComponents";

const HomePage = () => {
  return (
    <>
      <TopBarComponent />
      <HeaderComponent />
      <HeroComponent />
      <PartnerComponent />
    </>
  );
};

export default HomePage;
