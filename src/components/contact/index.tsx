import { Col, Row, message } from "antd"
import { MailFilled, LinkedinFilled, PhoneFilled, CopyOutlined, ExportOutlined } from '@ant-design/icons'
import './style.css'

export const ContactDetails = () => {

    return (
        <>
            <Row justify='center'>
                <Col span={24} className="tittle contacts">
                    Contact Details
                </Col>
            </Row>
            <Row className="contactRow" gutter={100} justify={"center"}>
            <a target="_blank" href="https://www.linkedin.com/in/ishika-rastogi321/" ><Col className="contactCol hoverlink">
                   <LinkedinFilled className="mailIcon2" /><span className="contacturl">Linkedin</span><ExportOutlined className="mailIcon3" />
                </Col></a>
                <Col className="contactCol hoverEmail" onClick={() => { navigator.clipboard.writeText("ishika321rastogi@gmail.com") , message.success({content: 'Copied to clipboard!', key: "notify"})}}>
                    <MailFilled className="mailIcon2" /><span
                        className="contacturl">ishika321rastogi@gmail.com</span><CopyOutlined className="mailIcon3" />
                </Col>
                <Col className="contactCol hoverNumber" onClick={() => { navigator.clipboard.writeText("9910847025") , message.success({content: 'Copied to clipboard!', key: "notify"})}}>
                    <PhoneFilled className="mailIcon2" /><span className="contacturl">9910847025</span><CopyOutlined className="mailIcon3"/>
                </Col>
            </Row>
            <Row className="detailesRow">
                <Col span={12} className="nameIshika">
                    ISHIKA
                </Col>
                <Col span={12} className="reserveRigts">
                    © 2024 All Rights Reserved.
                </Col>
            </Row>
            <Row className="detailesRow">
                <Col span={24} className="thanks">
                    Thanks for the Visit 🙏
                </Col>
            </Row>

        </>
    )
}