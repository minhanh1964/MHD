import { Button, Typography } from 'antd'
import Link from 'next/link'

const { Title } = Typography;

export default function Reservation() {
  return (
    <div className="background-container">
      <div className="container pt-10">
        <Title level={1} className="text-gold">MHD Restaurant</Title>
        <div className="pt-1">
          <img src='/logo1.png' className="br-50" />
        </div>
        <Title level={2} className="pt-1 pb-1 text-gold">Staff reservation will be implement soon.</Title>
        <Link href='/staff/login' passHref>
          <Button type="primary">Back</Button>
        </Link>
      </div>
    </div>
  )
}