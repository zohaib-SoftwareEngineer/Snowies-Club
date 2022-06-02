import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Footer from '../components/Footer';
import HeroSection from "../components/HeroSection";
// import InfoSection from '../components/InfoSection';
// import InfoSection1 from "../components/InfoSection1";
// import FAQ from "../components/Faqs/index";
// import { homeObjTwo } from '../components/InfoSection/Data';
// import { homeObjOne } from "../components/InfoSection1/Data";
// import { roadMapOne } from '../components/RoadMap1/Data';
// import { roadMapTwo } from '../components/RoadMap2/Data';
// import { roadMapThree } from '../components/RoadMap3/Data';
// import { roadMapFour } from '../components/RoadMap4/Data';
// import { roadMapFive } from '../components/RoadMap5/Data';
// import Roadmap1 from '../components/RoadMap1';
// import Roadmap2 from '../components/RoadMap2';
// import Roadmap3 from '../components/RoadMap3';
// import Roadmap4 from '../components/RoadMap4';
// import Roadmap5 from '../components/RoadMap5';
import Services from "../components/Services";
import Welcome from "../components/Welcomesection";
import Specs from "../components/Specssection";
import Road from "../components/Road";
// import Road1 from "../components/Road1";
// import Road2 from "../components/Road2";
// import Road3 from "../components/Road3";
// import Road4 from "../components/Road4";
import Footer1 from "../components/Footer1";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <SideBar1 /> */}
      <HeroSection />
      <Welcome />
      <Specs />
      <Road />
      {/* <Road />
      <Road1 />
      <Road2 />
      <Road3 />
      <Road4 /> */}
      {/* <InfoSection1 {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Roadmap1 {...roadMapOne} /> */}
      {/* <Roadmap2 {...roadMapTwo} /> */}
      {/* <Roadmap3 {...roadMapThree} /> */}
      {/* <Roadmap4 {...roadMapFour} /> */}
      {/* <Roadmap5 {...roadMapFive} /> */}
      {/* <FAQ /> */}
      <Services />
      <Footer1 />
    </div>
  );
}

export default Home;
