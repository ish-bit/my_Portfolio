import React, { useState } from "react"
import { Button, Card, Col, Row } from "antd"
import './style.css'
import {Intro} from '../intro'
import {Skills} from '../skills'
import {Projects} from '../projects'
import { SoftwareKnown } from "../softwareKnown"
import { ContactDetails } from "../contact"


export const Home = (props:any) => {

    const {aboutme, skills, projects, softwares, contact} = props
    const [theme, setTheme] = useState('light');

    return (
        <>
        {/* <Card className="homeCard"> */}
        <Row>
            <Col span={24}>
            <section ref={aboutme} className="mainPortion">
            <Intro/>
            </section>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <section ref={skills} className="mainPortion">
            <Skills/>
            </section>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <section ref={projects} className="mainPortion">
            <Projects/>
            </section>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <section ref={softwares} className="mainPortion">
            <SoftwareKnown/>
            </section>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <section ref={contact} className="contactPortion">
            <ContactDetails/>
            </section>
            </Col>
        </Row>
       
        </>
    )
}