import React, { Ref, useRef } from "react"
import Layout, { Content } from "antd/es/layout/layout"
import { AppHeader } from "../common/header"
import { Outlet } from "react-router-dom"
import './style.css'
import { Home } from "../components/home"

export const AppLayout = () => {

    const aboutme = useRef(null)
    const skills = useRef(null)
    const projects = useRef(null)
    const softwares = useRef(null)


    const scrollToElement = (myRef:  any) => {

        if (myRef.current) {
         
          myRef.current.scrollIntoView({ behavior: 'smooth',block: 'center',
          inline: 'center', });
        }

      };

    return (
        <>
            <Layout className="colorsLayeout">
                <AppHeader aboutme={aboutme} skills={skills} projects={projects} softwares={softwares} scrollToElement={scrollToElement} />
                <Content
                    style={{
                        marginTop: "0 0px",
                    }}
                >
                    <div
                        className="layout-background"
                        style={{
                            padding: 24,
                        }}
                    >
                        <Home aboutme={aboutme} skills={skills} projects={projects} softwares={softwares}/>
                    </div>
                </Content>
            </Layout>
        </>
    )
}