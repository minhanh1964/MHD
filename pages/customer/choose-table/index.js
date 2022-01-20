import {
  Button, InputNumber, Typography,
  Row, Col, DatePicker, TimePicker, Space
} from 'antd';
import { useState, useEffect } from 'react';
import interact from 'interactjs'
import Link from 'next/link'
import style from './ChooseTable.module.css';

const { Title } = Typography;



export default function ChoosingTable() {
  const [_document, set_document] = useState(null)
  useEffect(() => {
    set_document(document)
    const element1 = document.getElementById('table-1')
    const element2 = document.getElementById('table-2')

    const position1 = { x: 0, y: 0 }
    interact(element1).draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      listeners: {
        start(event) {
          console.log(event.type, event.target)
        },
        move(event) {
          position1.x += event.dx
          position1.y += event.dy

          event.target.style.transform =
            `translate(${position1.x}px, ${position1.y}px)`
        },
      }
    })
    const position2 = { x: 0, y: 0 }
    interact(element2).draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      listeners: {
        start(event) {
          console.log(event.type, event.target)
        },
        move(event) {
          position2.x += event.dx
          position2.y += event.dy

          event.target.style.transform =
            `translate(${position2.x}px, ${position2.y}px)`
        },
      }
    })
  })


  return (
    <div className="background-container">
      <div className='container'>
        <Row>
          <Col span={16} className={style.BoxLeft}>

            <div className={style.BoxTableReservation}>
              <img src='/restaurant_booked.png' className={style.groundPlan} alt="" />
              <img id='table-1' src='/table2.png' className={style.table2} alt="" />
              <img id='table-2' src='/table4.png' className={style.table4} alt="" />
            </div>
          </Col>
          <Col span={8} className={style.BoxRight}>
            <Title level={2} className="pt-1 text-white">Choosing Table</Title>
            <div className='pt-1'>
              <Title level={3} className="text-left text-white">Time and Date:</Title>
              <Space direction="horizontal">
                <DatePicker />
                <TimePicker />
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