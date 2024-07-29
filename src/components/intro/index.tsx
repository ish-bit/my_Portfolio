import React from "react";
import { Col, Row } from "antd";
import './style.css'
import {ImageUploader} from '../../common/imageUploader'
import { SecondaryButton } from "../../common/button";

export const Intro = () => {
    return (
        <>
            <Row justify='space-between' gutter={[0, 20]}>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Row>
                        <Col className="homecss">Hello, It’s Me</Col>
                    </Row>
                    <Row>
                        <Col className="homeName">
                            Ishika Rastogi
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ display: 'flex' }}>
                                <div className="homecss"><span>And I am a</span></div><div className="homecss typing-animation "><span className="colorDesignation">Full Stack Developer</span></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="homeDescription">
                        I am a passionate Full Stack Developer with over 2.5 years of experience in building responsive web applications. I excel in front-end technologies such as HTML, CSS, and JavaScript frameworks, and am adept at back-end development using Node.js, Express, and databases. My expertise includes designing and integrating REST APIs, managing state with Redux, and adhering to SOLID principles for maintainable and scalable code. I have extensive experience working with both MongoDB and MySQL, ensuring efficient data storage and retrieval. My focus is on delivering innovative solutions and enhancing user experiences through clean, efficient, and well-structured code.
                        </Col>
                    </Row>
                    <Row className="resumenBtn">
                        <Col>
                        <a href="IshikaRastogi.pdf" download><SecondaryButton>Resume</SecondaryButton></a>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} className="portfolioimage">
                    <ImageUploader preview={true} width={200}/>
                </Col>
            </Row>
        </>
    );
};
