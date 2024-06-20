import React from "react"
import { Card } from "antd"
import './style.css'
import {Intro} from '../intro'
import {Skills} from '../skills'
import {Projects} from '../projects'
import { SoftwareKnown } from "../softwareKnown"

export const Home = (props:any) => {

    const {aboutme, skills, projects, softwares} = props

    return (
        <>
        <Card className="homeCard">
            <section ref={aboutme} className="mainPortion">
            <Intro/>
            </section>
            <section ref={skills} className="mainPortion">
            <Skills/>
            </section>
            <section ref={projects} className="mainPortion">
            <Projects/>
            </section>
            <section ref={softwares} className="mainPortion">
            <SoftwareKnown/>
            </section>
        </Card>
        </>
    )
}