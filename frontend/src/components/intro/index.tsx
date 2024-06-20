import React from "react";
import { Col, Row } from "antd";
import './style.css'
import {ImageUploader} from '../../common/imageUploader'
import {email, insta, linkedin} from '../../assets/svgs/image'
import { SecondaryButton } from "../../common/button";
import {MailFilled, LinkedinFilled} from '@ant-design/icons'

export const Intro = () => {
    return (
        <>
            <Row justify='space-between'>
                <Col span={12}>
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
                            I am a dedicated Full Stack Developer with 2.5+ years of experience, specializing in crafting responsive web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript frameworks, and adept in back-end development with Node.js, Express, and databases. Passionate about delivering innovative solutions and enhancing user experiences through clean and efficient code.
                        </Col>
                    </Row>
                    <Row gutter={50}>
                        <Col className="icons">
                        <LinkedinFilled className="mailIcon"/>
                        </Col>
                        <Col className="icons">
                        <MailFilled className="mailIcon"/>
                        </Col>
                    </Row>
                    <Row className="resumenBtn">
                        <Col>
                        <SecondaryButton>Resume</SecondaryButton>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} className="portfolioimage">
                    <ImageUploader />
                </Col>
            </Row>
        </>
    );
};
