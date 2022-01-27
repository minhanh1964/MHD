import { Button, Row, Col, Typography } from 'antd'
import Link from 'next/link'

const { Title } = Typography;

export default function CustomerList() {
  return (
    <div className="background-container">
      <div className="container pt-10">
        <Title level={1} className="text-gold">MHD Restaurant</Title>
        <div className="pt-1">
          <img src='/logo1.png' className="br-50" />
        </div>
        <Title level={2} className="pt-1 pb-1 text-gold">Customer list will be implement soon.</Title>
        <Row className='pt-2' justify='center'>
          <Col span={24}>
            <Link href='/staff/login' passHref>
              <Button type="primary">Back</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}
