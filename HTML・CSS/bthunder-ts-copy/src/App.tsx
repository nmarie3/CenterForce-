import { useState } from "react";
import {Header} from "./components/Header";
import {Banners} from "./components/Banners";
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
      <Header/>
      <Banners/>
      <News/>
      <Footer/>
    </>



  );
}

export default App;
