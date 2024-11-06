import { useState } from "react";
import styles from "../styles/Slider.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


type SliderProps = {
    images: string[]
    
}

export function Slider({images}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className={styles.sliderImage}>
            <img src={images[currentIndex]}/>
            <button className={styles.arrows}><IoIosArrowBack /></button>
            <button className={styles.arrows}><IoIosArrowForward /></button>
        </div>

    )
};

export default Slider;

