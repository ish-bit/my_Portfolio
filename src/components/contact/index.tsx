import { Col, Row } from "antd"
import {MailFilled, LinkedinFilled} from '@ant-design/icons'
import './style.css'

export const ContactDetails = () => {
    return (
        <>
         <Row justify='center'>
                <Col span={24} className="tittle contacts">
                    Contact Details
                </Col>
                </Row>
                <Row gutter={100}>
                        <Col className="icons contact">
                        <a target="_blank" href="https://www.linkedin.com/in/ishika-rastogi321/" ><LinkedinFilled className="mailIcon"/><span className="contacturl">https://www.linkedin.com/in/ishika-rastogi321</span></a>
                        </Col>
                        <Col className="icons contact">
                        <MailFilled className="mailIcon"/><span className="contacturl">ishika321rastogi@gmail.com</span>
                        </Col>
            </Row>
        </>
    )
}