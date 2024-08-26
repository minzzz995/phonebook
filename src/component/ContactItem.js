import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
        <Row>
            <Col lg={1}>
                <img width={50} src="data:image/png;base64,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" />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem
