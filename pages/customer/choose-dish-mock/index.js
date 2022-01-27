import {
    Button, Typography,
    Row, Col, Menu, Input
} from 'antd';
import Link from 'next/link'
import style from './ChooseDish.module.css';

const { Title } = Typography;
const { Search } = Input;

export default function ChoosingDish() {
    return (
        <div className="container">
            <Row>
                {/* BOX LEFT */}
                <Col span={16} className={style.BoxLeft}>
                    {/* MENU NAV BAR */}
                    <Menu mode="horizontal" className='pt-05'>
                        <Menu.Item className='pt-05'>
                            <Search placeholder="Type in dish ..." style={{ width: 200 }} />
                        </Menu.Item>
                        <Menu.Item>
                            Beloved dishes
                        </Menu.Item>
                        <Menu.Item>
                            Action
                        </Menu.Item>
                        <Menu.Item>
                            Meat
                        </Menu.Item >
                        <Menu.Item>
                            Green
                        </Menu.Item>
                        <Menu.Item>
                            Desert
                        </Menu.Item>
                    </Menu>
                    {/* MENU SECTION */}
                    <div className={style.MenuSection}>
                        <Title level={3} className='mb-0'>Beloved Dishes</Title>
                    </div>
                    <Row className={style.MenuItem}>
                        <Col span={16}>
                            <Title level={4} className='text-left'>Cheese Beef Burger</Title>
                            <p className={style.FoodDesc}>Beloved choice for who like cheese, beef and burger. Contain fat</p>
                            <Title level={4} className='text-left'>14.99$ </Title>
                        </Col>
                        <Col span={8}>
                            <img src='/burger.jpg' className={style.FoodImage} />
                        </Col>
                    </Row>
                    <Row className={style.MenuItem}>
                        <Col span={16}>
                            <Title level={4} className='text-left'>Vegan Burger</Title>
                            <p className={style.FoodDesc}>Beloved choice for who not like cheese, beef and burger. Does not contain meat</p>
                            <Title level={4} className='text-left'>16.99$ </Title>
                        </Col>
                        <Col span={8}>
                            <img src='/burger_vegan.jpg' className={style.FoodImage} />
                        </Col>
                    </Row>
                </Col>
                {/* BOX RIGHT */}
                <Col span={8} className={style.BoxRight}>
                    <Title level={2} className="text-white pt-1">Choosing Dish</Title>
                    <Title level={3} className="text-white text-left pt-1">Your Order: </Title>
                    <Row justify='space-between'>
                        <Col span={14} className="text-white text-left pt-1">1 Cheese Beef Burger</Col>
                        <Link href="/customer/choose-dish" passHref>
                            <Col span={2} className="text-red text-left pt-1 cursor-pointer">x</Col>
                        </Link>
                        <Col span={8} className="text-white text-right pt-1">14.99$</Col>
                    </Row>

                    <Row justify='space-between'>
                        <Col span={16} className="text-white text-left pt-1">
                            <Title level={3} className="text-white text-left pt-1">Total:</Title>
                        </Col>
                        <Col span={8} className="text-white text-right pt-1">
                            <Title level={3} className="text-white text-left pt-1">14.99$</Title>
                        </Col>
                    </Row>
                    {/* 2 BUTTON  */}
                    <Row className='pt-2' justify='space-between'>
                        <Col span={1}>
                            <Link href='/customer/select-date' passHref>
                                <Button>Back</Button>
                            </Link>
                        </Col>
                        <Col span={5}>
                            <Link href='/customer/choose-table' passHref>
                                <Button type="primary">Choose table</Button>
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Link href='/customer/customer-info' passHref>
                                <Button type="primary">Check out</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}