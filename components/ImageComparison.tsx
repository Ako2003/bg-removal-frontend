'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface ImageRevealSliderProps {
    img1: string;
    img2: string;
    position ? : number;
    portrait?: boolean;
}


export default function ImageRevealSlider({img1, img2, position = 50, portrait = false} : ImageRevealSliderProps) {
    return (
        <ReactCompareSlider
            className="border-emerald-500 border-2 rounded-xl"
            portrait={portrait}
            position={position}
            itemTwo={
                <ReactCompareSliderImage
                    src={img1}
                    alt="After"
                    className="object-cover max-h-[600px]"
                />
            }
            itemOne={
                <ReactCompareSliderImage
                    src={img2}
                    alt="Before"
                    style={{ width: '100%' }}
                    className="image-wrapper object-cover max-h-[600px]"
                />
            }
            style={{
                display: "flex",
                width: "100%",
                // height: "60vh",
            }}
        />
    );
}
