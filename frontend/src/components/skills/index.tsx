import { Col, Flex, Progress, Row } from "antd"
import React, { useEffect, useState } from "react"
import './style.css'
import { Percent } from "antd/es/progress/style"
import reactjs from "../../assets/images/reactjs.png"
import nodejs from "../../assets/images/nodejs.png"
import javascript from "../../assets/images/javascript.png"
import typescript from "../../assets/images/typescript.png"
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"



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
        }, 1800); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);


    const skills: any = [{
        percent: 95,
        name: "React Js"
    },
    {
        percent: 95,
        name: "Node Js"
    },
    {
        percent: 70,
        name: "Javascript"
    },
    {
        percent: 80,
        name: "Typescript"
    },
    {
        percent: 90,
        name: "HTML"
    },
    {
        percent: 70,
        name: "CSS"
    },
    {
        percent: 90,
        name: "MySQL"
    },
    {
        percent: 90,
        name: "MongoDB"
    },
    {
        percent: 95,
        name: "WebSocket"
    },
    ]

    const getClass = (index: any) => {
        if (index === currentIndex) {
            return 'animate';
        }
    };

    return (
        <>
         <Row className="fullWidth">
             <Col span={24}>
                    <Row justify='center'>
                        <Col span={3} className="tittle">
                            SKILLS
                        </Col>
                    </Row>
                    <Row justify='center' className="sectionPddingMarging">
                        <Col span={24}>
                            <Row justify='center' gutter={100}>
                                {skills.map((item: any, index: any) => (

                                    <Col className="skillCol">
                                        <Progress type="circle" className="progress" percent={item.percent} size={190} strokeColor='aqua' trailColor='grey' />
                                        <div className="skillName">{item.name}</div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <Row justify={"center"} className="sectionPddingMarging">
                        <Col span={20.5}>
                            <div className="carousel">
                                <div className="wrapper">
                                    {images.map((image, index) => (
                                        <div className="carousel-item" key={index}>
                                            <img src={image} alt={`Logo ${index}`} className={`icon ${getClass(index)}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
             </Col>
        </Row>
        </>
    )
}