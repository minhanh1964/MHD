import { Row, Col, DatePicker, TimePicker, Space } from 'antd';

import Link from 'next/link'
import style from './SelectDate.module.css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function SelectDate() {
  return (
    <Row>
      <Col span={24} className={style.select}>Select Date</Col>
      <Col span={24}>
        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="month" />
          <TimePicker onChange={onChange} />
        </Space>
      </Col>
      <Col span={24}>
        <Link href=''>Choose Table</Link></Col>
      <Col span={24}>
        <Link href=''>Choose Dish</Link></Col>

    </Row>
  )
}