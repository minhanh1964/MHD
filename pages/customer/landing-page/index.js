import Link from 'next/link'

export default function LandingPage() {
    return (
      <div>
          <p>MHD Restaurant</p>
          <Link href='/customer/select-date'>Table Reservation</Link>
      </div>
    )
  }