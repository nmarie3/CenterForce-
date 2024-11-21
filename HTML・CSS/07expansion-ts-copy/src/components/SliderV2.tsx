import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SliderV2.module.css"
//import { IoIosArrowBack } from "react-icons/io";
//import { IoIosArrowForward } from "react-icons/io";


type SliderProps = {
    images: {
    image: string;
    url: string;
    }[]
}


export function SliderV2({images}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imgContainer}>
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

        </div>
    )

};