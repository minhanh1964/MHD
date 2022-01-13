import Link from 'next/link'
import { Button, Typography, Form, Input, Row, Col } from 'antd';

const { Title } = Typography;

export default function CustomerInfo() {
  return (    
    <div className="background-container">
      <div className='container pt-5'>        
        <Title level={1} className="text-white">Customer Information</Title>
        <div className="pt-2 mx-auto text-white w-50">
          <Form.Item label={<label style={{ color: "white" }}>Name</label>} name="name" rules={[{message: 'Please input your name!'},]}>
            <Input />
          </Form.Item>
          <Form.Item label={<label style={{ color: "white" }}>E-Mail</label>} name="e-mail" rules={[{message: 'Please input your e-mail!'},]}>
            <Input />
          </Form.Item>
          <Form.Item label={<label style={{ color: "white" }}>Phone</label>} name="phone" rules={[{message: 'Please input your phone!'},]}>
            <Input />
          </Form.Item>
          <Row className='pt-2' justify='center'>
            <Col span={8}>
              <Link href='/customer/select-date'>
                <Button>Back</Button>
              </Link>
            </Col>
            <Col span={8}>
              <Link href='/customer/confirmation'>
                <Button type="primary">Continue</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}