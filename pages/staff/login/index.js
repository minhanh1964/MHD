import Link from 'next/link'
import { Button, Input, Row, Col, Typography, Space } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const { Title } = Typography;

export default function Login() {
  return (
    <div className="background-container">
      <div className="container pt-5">
        <Title level={1} className="text-gold">MHD Restaurant</Title>
        <div className="pt-1">
          <img src='/logo1.png' className="br-50" />
        </div>
        <div className="pt-5 mx-auto text-white w-50">
          <Space direction="vertical">
            <Input placeholder="input username" />
            <Input.Password
              placeholder="input password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Space>
          <Row className='pt-2' justify='center'>
            <Col span={24}>
              <Link href='/staff/customer-list' passHref>
                <Button type="primary">Login</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}