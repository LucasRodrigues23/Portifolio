"use client"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import styles from './styles.module.scss'
import { ReactElement } from "react";
import stackData from "@/utils/stacksData";

export default function StacksCarrousel() {

    const items: ReactElement[] = [];
    stackData.map((stack, i) => {
        items.push(
            <div key={i} className={styles.stackCard}>
                <a href={stack.url} target="_blank" >
                    {stack.img}
                </a>
            </div>

        )
    })

    const carouselSettings = {
        mouseTracking: true,
        touchTracking: true,
        responsive: {
            0: { items: 2 },
            400: { items: 4 },
            568: { items: 5 },
            780: { items: 6 },
            1024: { items: 8 },
        },
        disableButtonsControls: true,
        animationDuration: 2000,
        autoPlay: true,
        paddingLeft: 70,
        infinite: true,
        disableDotsControls: true,
    };
    return (
        <div className={styles.carrousel}>
            <AliceCarousel
                {...carouselSettings}
                items={items}
            />
        </div>
    )
}