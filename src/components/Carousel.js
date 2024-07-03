import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageCarousel.css';

const ImageCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://image.shutterstock.com/image-photo/beautiful-details-nature-morning-dew-260nw-2473212807.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/dock-lake_UBHIXTOCI7.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/evergreen-tree_B8TK393LXX.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/lake-mountains_VZBJUVPO25.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/NX6XW0ECSK.jpg"
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image,index)=>(
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default ImageCarousel;