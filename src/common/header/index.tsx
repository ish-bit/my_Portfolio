import React from "react"
import { Header } from "antd/es/layout/layout"
import { Menu } from "antd"
import "./style.css"

export const AppHeader = (props:any) => {

    const {scrollToElement, aboutme, skills, projects, softwares, contact} = props

    const items = [
    {
        key: "1",
        label: <a href="#about-me" onClick={()=>scrollToElement(aboutme)}>About Me</a>,
    },
    {
        key: "2",
        label: <a href="#skills" onClick={()=>scrollToElement(skills)}>Skills</a>,
    },
    {
        key: "3",
        label: <a href="#projects" onClick={()=>scrollToElement(projects)}>Projects</a>,
    },
    {
        key: "4",
        label: <a href="#softwareknown" onClick={()=>scrollToElement(softwares)}>Software Known</a>,
    },
    {
        key: "5",
        label: <a href="#contact" onClick={()=>scrollToElement(contact)}>Contact</a>,
    }]

    return (
        <Header className="headerClass" style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            height: '8vh',
            background: 'transparent'
        }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                className="menuClass"
            />

        </Header>
    )
}