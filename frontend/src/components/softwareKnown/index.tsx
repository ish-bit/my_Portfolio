import { Col, Row } from "antd"
import { ImageUploader } from "../../common/imageUploader"

export const SoftwareKnown = () => {
    return (
        <Row className="fullWidth">
            <Col span={24}>
                <Row justify='center'>
                    <Col span={24} className="tittle">
                        Software Known
                    </Col>
                </Row>
                <Row justify='center' className="sectionPddingMarging" gutter={28}>
                   <Col>
                   <ImageUploader shape={true} width={200}/>
                   </Col>
                </Row>
            </Col>
        </Row>
    )
}