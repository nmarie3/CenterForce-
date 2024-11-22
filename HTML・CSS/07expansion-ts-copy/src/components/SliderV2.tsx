import React, { useState, useRef } from "react";
import styles from "../styles/SliderV2.module.css"
//import { IoIosArrowBack } from "react-icons/io";
//import { IoIosArrowForward } from "react-icons/io";
import Slider1 from "../assests/gerokasu2.png";
import Slider2 from "../assests/event1.png";
import Slider3 from "../assests/event2.png";
import Slider4 from "../assests/event3.png";

// type SliderProps = {
//     images: {
//     image: string;
//     url: string;
//     }[]
// }
//export function SliderV2({images}: SliderProps) {


export function SliderV2() {
    const itemsRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const images = [
        {image: Slider1, url: 'https://07th-expansion.net/topics/topics23.html'},
        {image: Slider2, url: 'https://07th-expansion.net/eventpage/event03.html'},
        {image: Slider3, url: 'https://07th-expansion.net/eventpage/event05.html'},
        {image: Slider4, url: 'https://07th-expansion.net/eventpage/event02.html'}
      ];


      const handleMouseDown = (e:React.MouseEvent) => {
        if (!itemsRef.current) return;
        setIsMouseDown(true);
        setStartX(e.pageX - itemsRef.current.scrollLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
      }

      const handleMouseLeave = () =>{
        setIsMouseDown(false);
      }

      const handleMouseUp = () => {
        setIsMouseDown(false);
      }

      const handleMouseMove = (e:React.MouseEvent) => {
        if(!isMouseDown || !itemsRef.current) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x-startX)*1;
        itemsRef.current.scrollLeft = scrollLeft - walk
      }


    return (
        // <div className={styles.sliderContainer}>
            <div className={styles.imgContainer}
            ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.bannerImg}
                    >
                            <a href={image.url}>
                            <img 
                            src={image.image}/>
                            </a>
                    </div>
                ))}
            </div>

        // </div>
    )

};