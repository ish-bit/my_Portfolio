import React, { useEffect, useState } from "react"
import './cardComponent.css';
import { Badge, Card, Col, Divider, Row } from "antd";
import warehouse from '../../assets/images/warehouse.jpeg'
import { ExportOutlined } from '@ant-design/icons'
import Paragraph from "antd/es/typography/Paragraph";
import { ProjectInfoModal } from "../../common/modal/projectModal";


export const CardComponent = (props: any) => {

  const { project, setCurrentProject } = props
  const [ visible, setVisible ] = useState(false)

  const [isHovered, setIsHovered] = useState(false);

 const handleOpenModal = () => {
  setVisible(true)
 }
 const handleClick = () => {

 }

  return (
    <>
      <Card
        className="card-container"
        onMouseEnter={() => {setIsHovered(true); setCurrentProject(project?.id)}}
        onMouseLeave={() => {setIsHovered(false); setCurrentProject("")}}
        style={{ backgroundImage: `url(${project?.image})`, backgroundSize: 'cover' }}
        onClick={handleClick}
      >
        {isHovered && (
          <div className="draggable-component">
            <Row>
              <Col span={24} className="ProjectHeading">
                {project.H1}
              </Col>
            </Row>
            <Row>
              <Col >
                <Paragraph ellipsis={{ rows: 3 }} className="introductionProject">
                  {project.introduction}
                </Paragraph>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={20} className="justifyCol">
                <span className="movePageIcon" onClick={handleOpenModal}>See More</span>
              </Col>
            </Row>
          </div>
        )}
      </Card>
      <ProjectInfoModal visible={visible} setVisible={setVisible} details={project}/>
      </>
  );
};