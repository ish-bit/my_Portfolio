import { Col, Modal, Row } from "antd"
import './style.css'

export const ProjectInfoModal = (props: any) => {
    const { visible, setVisible, details } = props
    const handleClose = () => {
        setVisible(false)
    }
    return (
        <Modal open={visible} centered onCancel={handleClose} footer={null} width={600} className="projectModalClass" title={<Row>
            <Col span={20} className="heading1">
                {details?.H1}
            </Col>
        </Row>} >
            
            <Row>
                <Col span={24} className="title">
                Introduction
                </Col>
                <Col span={24} className="detail">
                {details?.introduction}
                </Col>
            </Row>
            <Row>
                <Col span={24} className="title">
                Problem Statement
                </Col>
                <Col span={24} className="detail">
                {details?.problem}
                </Col>
            </Row>
            <Row>
                <Col span={24} className="title">
                Solution
                </Col>
                <Col span={24} className="detail">
                {details?.solution}
                </Col>
            </Row>
            <Row>
                <Col span={24} className="title">
                Conclusion
                </Col>
                <Col span={24} className="detail">
                {details?.conclusion}
                </Col>
            </Row>
        </Modal>
    )
}