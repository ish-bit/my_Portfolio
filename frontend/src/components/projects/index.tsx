import { Col, Row } from "antd"
import React from "react"
import { CardComponent } from './cardComponent'

export const Projects = () => {
    const projects: any = [{

    }, {}, {},{},{}]
    return (
        <Row className="fullWidth">
            <Col span={24}>
            <Row justify='center'>
                <Col  span={4} className="tittle">
                    PROJECTS
                </Col>
            </Row>
            <Row justify='center' className="sectionPddingMarging" gutter={28}>
                {projects.map(() => (
                    <Col span={8}>
                        <CardComponent />
                        <div className="projectName">Smartcosmos</div>
                    </Col>
                ))}
            </Row>
            </Col>
        </Row>
    )
}