import { Button, Typography, Row, Col, DatePicker, TimePicker, Space } from 'antd';

import Link from 'next/link'
import style from './SelectDate.module.css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Title } = Typography;

export default function SelectDate() {
  return (    
    <div className="background-container">
      <div className='container pt-5'>
        <div className={style.select}>
          <Title level={1} className="text-white">Select Date</Title>
        </div>
        <div className='pt-2'>
          <Space direction="horizontal">
            <DatePicker onChange={onChange} />
            <TimePicker onChange={onChange} />
          </Space>
        </div>
        <div className='pt-2 text-white'>
          <Link href='/customer/choose-table'>            
          <Button>
            Choose Table (*optional)
          </Button>
          </Link></div>
        <div className='pt-1 text-white'>
          <Link href='/customer/choose-dish'>      
            <Button>
              Choose Dish (*optional)
            </Button>    
          </Link></div>
        <Row className='pt-2' justify='center'>
          <Col span={8}>
            <Link href='/'>
              <Button>Back</Button>
            </Link>
          </Col>
          <Col span={8}>
            <Link href='/customer/customer-info'>
              <Button type="primary">Continue</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}