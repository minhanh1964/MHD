import Link from 'next/link'
import { Button, Typography, Row, Col } from 'antd';

const { Title } = Typography;

export default function Confirmation() {
  return (    
    <div className="background-container">
      <div className='container pt-5'>        
        <Title level={1} className="text-white">Confirmation</Title>
        <div className="pt-2 mx-auto w-50">
          <h3 className="text-white">
            Can you confirm your data?<br /><br />
            Name: Max Mustermann<br />
            E-Mail: max.mustermann@abc.de<br/>
            Phone: 012345678 <br />
          </h3>
          <Row className='pt-2' justify='center'>
            <Col span={8}>
              <Link href='/customer/customer-info' passHref>
                <Button>Back</Button>
              </Link>
            </Col>
            <Col span={8}>
              <Link href='/customer/thank-you' passHref>
                <Button type="primary">Continue</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}