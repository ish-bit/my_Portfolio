import React, { useState } from "react"
import { Button, Card } from "antd"
import './style.css'
import {Intro} from '../intro'
import {Skills} from '../skills'
import {Projects} from '../projects'
import { SoftwareKnown } from "../softwareKnown"
import { ContactDetails } from "../contact"
import switchTheme from "../../utils/helper/switchTheme"
import '../../light-theme.less';


export const Home = (props:any) => {

    const {aboutme, skills, projects, softwares, contact} = props
    const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    switchTheme(newTheme);
  };

    return (
        <>
        {/* <Button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </Button> */}
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
            <section ref={contact} className="mainPortion">
            <ContactDetails/>
            </section>
        </Card>
        </>
    )
}