import { Card, Col, Flex, Progress, Row } from "antd"
import React, { useEffect, useState } from "react"
import './style.css'
import { Percent } from "antd/es/progress/style"
import reactjs from "../../assets/images/reactjs.png"
import nodejs from "../../assets/images/nodejs.png"
import javascript from "../../assets/images/javascript.png"
import typescript from "../../assets/images/typescript.png"
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const CustomPrevArrow = (props:any) => {
    const { onClick, className } = props;
    return (
      <button className={`custom-prev-arrow2`} onClick={onClick}>
        <CaretLeftOutlined/>
      </button>
    );
  };
  
  const CustomNextArrow = (props:any) => {
    const { onClick,className } = props;
    return (
      <button className={`custom-next-arrow2`} onClick={onClick}>
        <CaretRightOutlined/>
      </button>
    );
  };
export const Skills = () => {

    const images = [
        reactjs, // Replace with your image paths
        nodejs,
        javascript,
        typescript,
        html,
        css
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);


    const skills: any = [{
        percent: 95,
        name: "React Js",
        image:reactjs
    },
    {
        percent: 95,
        name: "Node Js",
        image:reactjs

    },
    {
        percent: 70,
        name: "Javascript",
        image:reactjs

    },
    {
        percent: 80,
        name: "Typescript",
        image:reactjs

    },
    {
        percent: 90,
        name: "HTML",
        image:reactjs

    },
    {
        percent: 70,
        name: "CSS",
        image:reactjs

    },
    {
      percent: 90,
      name: "Redux",
      image:reactjs

  },
  {
    percent: 90,
    name: "REST API",
    image:reactjs

},
    {
        percent: 90,
        name: "MySQL",
        image:reactjs

    },
    {
        percent: 90,
        name: "MongoDB",
        image:reactjs

    },
    {
        percent: 95,
        name: "WebSocket",
        image:reactjs

    },
    ]


    const settings = {

        centerMode: true,
        centerPadding: '40',
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 2400,
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

      const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      const [animate, setAnimate] = useState(false);
    
      // Toggle animation based on inView status
      useEffect(() => {
        setAnimate(inView);
      }, [inView]);

    return (
        <>
         <Row ref={ref} className="fullWidth">
             <Col span={24}>
                    <Row justify='center' style={{paddingTop:100}}>
                        <Col span={3} className="tittle">
                            skills
                        </Col>
                    </Row>
                    <Row justify='center' className="sectionPddingMarging">
                        <Col span={24}>
                            <Row justify='center' gutter={[30, 30]}>
                                {/* {skills.map((item: any, index: any) => (

                                    <Col className="skillCol">
                                        <Progress type="circle" className="progress" percent={item.percent} size={190} strokeColor='#00FFD1' trailColor='grey' />
                                        <div className="skillName">{item.name}</div>
                                    </Col>
                                ))} */}
                                {skills.map((skill:any, index:any) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="skillCard">
                <span style={{ color: '#fff', fontSize: '18px' }}>{skill.name}</span>
                <Progress
                  percent={skill.percent}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                // strokeColor="#00FFD1"
                className="progress"
                  showInfo={true}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
                            </Row> 
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col span={12} className="colClassinSkills">
                    <Slider {...settings} className="iconSlider">
                {images.map((image, index) => (
                                        <div className="iconSliderDiv">
                                            <Image src={image} alt={`Logo ${index}`} className={`icon`} />
                                        </div>
                                    ))}
            </Slider>

                        </Col>
                    </Row>
             </Col>
        </Row>
        </>
    )
}