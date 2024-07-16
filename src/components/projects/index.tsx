import { Badge, Col, Row } from "antd"
import React, { useState } from "react"
import { CardComponent } from './cardComponent'
import { Bibliotheca, FPH, PMS, Smartcosmos, healthLink, thereYouGo } from "./dummyEnums"

export const Projects = () => {

    const [currentProject, setCurrentProject] = useState()
    const projects: any = [Smartcosmos, FPH, PMS, healthLink, thereYouGo]

    return (
        <Row className="fullWidth">
            <Col span={24}>
                <Row justify='center'>
                    <Col span={24} className="tittle">
                        projects
                    </Col>
                </Row>
                <Row justify='center' className="sectionPddingMarging" gutter={28}>
                    {projects.map((e: any) => (
                        <Col span={8}>
                            <Badge.Ribbon text={e?.name} className={(currentProject === e?.id) ? "displayOptional" : "badge"} color="rgb(83, 81, 81)">
                                <CardComponent project={e} setCurrentProject={setCurrentProject}/>
                            </Badge.Ribbon>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}