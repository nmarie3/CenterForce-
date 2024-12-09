import { useState, useEffect } from "react";
import {Navi} from "./components/Navi";
import {Banners} from "./components/Banners";
import {BannersMobile} from "./components/BannersMobile";
import {Pickup} from "./components/Pickup";
import {News} from "./components/News";
import {Footer} from "./components/Footer";
//import {Splash} from "./components/Splash";



function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (

    <div style={{ overflow: "hidden" }}>
      {/* {showSplash && <Splash onClose={closeSplash} />} */}
      <Navi />
      {isMobile ? <BannersMobile /> : <Banners />}
      <Pickup />
      <News />
      <Footer />
    </div>


  );
}

export default App;
