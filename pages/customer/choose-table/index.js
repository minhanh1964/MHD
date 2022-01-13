import {
  Button, InputNumber, Typography,
  Row, Col, DatePicker, TimePicker, Space
} from 'antd';
import Link from 'next/link'
import style from './ChooseTable.module.css';

const { Title } = Typography;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function ChoosingTable() {

  return (
    <div className="background-container">
      <div className='container'>
        <Row>
          <Col span={16} className={style.BoxLeft}>
            <img src='/restaurant.png' className='w-100' />
          </Col>
          <Col span={8} className={style.BoxRight}>
            <Title level={2} className="pt-1 text-white">Choosing Table</Title>
            <div className='pt-1'>
              <Title level={3} className="text-left text-white">Time and Date:</Title>
              <Space direction="horizontal">
                <DatePicker onChange={onChange} />
                <TimePicker onChange={onChange} />
              </Space>
            </div>
            <div className='pt-1'>
              <Title level={3} className="text-left text-white">Your Table: </Title>
            </div>
            <Row className='pt-1'>
              <Col span={19}>
                <Title level={3} className="text-left text-white">Number of people: </Title>
              </Col>
              <Col span={5}>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  className="w-100"
                /></Col>

            </Row>
            {/* 2 BUTTON  */}
            <Row className='pt-2' justify='space-around'>
              <Col span={8}>
                <Link href='/customer/select-date'>
                  <Button>Back</Button>
                </Link>
              </Col>
              <Col span={8}>
                <Link href='/customer/choose-dish'>
                  <Button type="primary">Choose Dish</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}