import Link from 'next/link'
import { Button, Typography } from 'antd'
import style from './LandingPage.module.css';

const { Title } = Typography;

export default function LandingPage() {
  return (
    <div className="background-container">
      <div className="container pt-5">
        <Title level={1} className="text-gold">MHD Restaurant</Title>
        <div className="pt-1">
          <img src='/logo1.png' />
        </div>
        <Title level={2} className="pt-1 pb-1 text-gold">Make reservation, make life!</Title>
        <Link href='/customer/select-date'>
          <Button type="primary" className={style.antdButton}>Begin now</Button>
        </Link>
      </div>
    </div>
  )
}