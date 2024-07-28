import React from 'react';
import Slider from 'react-slick';
import './style.css'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const CenteredCarousel = (props: any) => {

    const { items } = props

    const settings = {

        centerMode: true,
        centerPadding: '0',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container" style={{ width: '80%', margin: 'auto' }}>
            <Slider {...settings}>
                {items.map((item: any) => (
                    <div key={item.id} className="carousel-item1">
                        <div className='carousal-div'>
                            <div className='internalDiv'>
                                <Image className="imageCSS" src={item.image} alt={item.content} />
                                <div className="carousel-item-content">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const CustomPrevArrow = (props:any) => {
    const { onClick, className } = props;
    return (
      <button className={`custom-prev-arrow `} onClick={onClick}>
        <CaretLeftOutlined/>
      </button>
    );
  };
  
  const CustomNextArrow = (props:any) => {
    const { onClick,className } = props;
    return (
      <button className={`custom-next-arrow`} onClick={onClick}>
        <CaretRightOutlined/>
      </button>
    );
  };

  export default CenteredCarousel;
  
