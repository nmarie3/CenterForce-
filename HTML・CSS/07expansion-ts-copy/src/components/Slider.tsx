import { useState } from "react";
import styles from "../styles/Slider.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


type SliderProps = {
    images: string[];
    currentIndex: number;
    totalImgs: number;
    goPrevImg: () => void;
    
}

export function Slider({images}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalImgs = images.length;

    const goPrevImg = (currentIndex: number, totalImgs: number) => {
        if (currentIndex === 0) {
            setCurrentIndex(totalImgs - 1);
        }else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goNextImg = (currentIndex: number, totalImgs: number) => {
        if (currentIndex === totalImgs - 1) {
            setCurrentIndex(0);
        }else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const addClass = (index:number, currentIndex:number, totalImgs: number) => {
        if (index === currentIndex)
            return 'topImg';
        if (index === currentIndex - 1 || (currentIndex === 0 && index === totalImgs -1))
            return 'prevImg';
        if (index === currentIndex + 1 || (currentIndex == totalImgs - 1 && index === 0))
            return 'nextImg';
    };





    return (
        <div className={styles.sliderContainer}>
            <div className="slider">
                {images.map((image, index) => (
                    <div key={index} className={addClass(index, currentIndex, totalImgs)}>
                        <img src={image}/>
                    </div>
                ))}
            </div>
            {/* <button onClick={goPrevImg} className={styles.arrows}><IoIosArrowBack /></button>
            <button onClick={goNextImg} className={styles.arrows}><IoIosArrowForward /></button> */}
        </div>
    
    )
};

