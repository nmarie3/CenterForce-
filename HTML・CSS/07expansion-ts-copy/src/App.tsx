import {Header} from "./components/Header";
import "./App.css";
import {Info} from "./components/Info";
import {Navi} from "./components/Navi";
// import {Slider} from "./components/Slider";
import {SliderV2} from "./components/SliderV2";
// import {TestSlider} from "./components/TestSlider";
import {Beako} from "./components/Beako";
// import Slider1 from "./assests/gerokasu2.png";
// import Slider2 from "./assests/event1.png";
// import Slider3 from "./assests/event2.png";
// import Slider4 from "./assests/event3.png";



// const IMAGES = [
//   {image: Slider1, url: 'https://07th-expansion.net/topics/topics23.html'},
//   {image: Slider2, url: 'https://07th-expansion.net/eventpage/event03.html'},
//   {image: Slider3, url: 'https://07th-expansion.net/eventpage/event05.html'},
//   {image: Slider4, url: 'https://07th-expansion.net/eventpage/event02.html'}
// ];


export default function App() {
  return (
    <>
    <Header/>
    <Navi/>
    <Beako/>
    {/* <TestSlider /> */}
    <SliderV2/>
    {/* <Slider images={IMAGES}/> */}
    <div className="wrapper">
    <Info/>
    </div>
    </>
  );
}

