import {Header} from "./components/Header";
import "./App.css";
import {Info} from "./components/Info";
import {Navi} from "./components/Navi";
import {Slider} from "./components/Slider";
import {Beako} from "./components/Beako";
import Slider1 from "./assests/gerokasu2.png";
import Slider2 from "./assests/event1.png";
import Slider3 from "./assests/event2.png";
import Slider4 from "./assests/event3.png";



const IMAGES = [Slider1, Slider2, Slider3, Slider4]


export default function App() {
  return (
    <>
    <Header/>
    <Navi/>
    <Beako/>
    <Slider images={IMAGES}/>
    <div className="wrapper">
    <Info/>
    </div>
    </>
  );
}

