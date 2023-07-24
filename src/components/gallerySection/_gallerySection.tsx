'use client'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { CustomImage, images } from "./images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../nextjsImage/_nextjsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
}));

export const GallerySection = () => {
    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    return (
        <div>
            <Gallery images={images} enableImageSelection={false} onClick={handleClick} />
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                plugins={[Thumbnails]}
                close={() => setIndex(-1)}
                render={{ slide: NextJsImage }}
            />
        </div>
    )
}