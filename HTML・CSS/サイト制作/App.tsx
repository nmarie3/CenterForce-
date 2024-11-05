import {Header} from "./components/Header";
import "./App.css";
import {Info} from "./components/Info";
import {Slider} from "./components/Slider"
//import Navi from "./components/Navi";
import Slider1 from "./assests/event1.png";
import Slider2 from "./assests/event2.png";
import Slider3 from "./assests/event3.png";



const IMAGES = [Slider1, Slider2, Slider3]


export default function App() {
  return (
    <>
    <div className="wrapper">
    <Header/>
    <Slider images={IMAGES}/>
    <Info/>
    </div>
    </>
  );
}

