import Link from 'next/link'
import { Button, Typography, Row, Col } from 'antd';

const { Title } = Typography;

export default function ThankYou() {
  return (    
    <div className="background-container">
      <div className='container pt-5'>        
        <Title level={1} className="text-white">Thank You</Title>
        <div className="pt-2 mx-auto w-50">
          <h3 className="text-white">
            Thank you, your Reservation was successfull.<br/>
            You will get a confirmation e-mail soon.<br /><br />
            Name: Max Mustermann<br />
            E-Mail: max.mustermann@abc.de<br/>
            Phone: 012345678 <br />
          </h3>
          <Row className='pt-2' justify='center'>
            <Col span={8}>
              <Link href='/' passHref>
                <Button>Back to Start</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}