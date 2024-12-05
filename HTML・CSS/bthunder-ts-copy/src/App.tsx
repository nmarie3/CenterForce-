import { useState } from "react";
import {Navi} from "./components/Navi";
import {Banners} from "./components/Banners";
import {BannersMobile} from "./components/BannersMobile";
import {Pickup} from "./components/Pickup";
import {News} from "./components/News";
import {Footer} from "./components/Footer";
import {Splash} from "./components/Splash";



function App() {
  // const [showSplash, setShowSplash] = useState(true);

  // const closeSplash = () => {
  //   setShowSplash(false);
  // };



  return (

    <>
    {/* {showSplash && <Splash onClose={closeSplash} />} */}
      <Navi/>
      {/* <Banners/> */}
      <BannersMobile/>
      <Pickup/>
      <News/>
      <Footer/>
    </>



  );
}

export default App;
