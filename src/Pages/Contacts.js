import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';
import d1Img from '../assets/1.jpg';
import d2Img from '../assets/2.jpg';
import d3Img from '../assets/3.jpg';
import d4Img from '../assets/4.jpg';
import dan11Img from '../assets/11.JPG';
import dan12Img from '../assets/12.JPG';
import dan13Img from '../assets/13.JPG';
import dan14Img from '../assets/14.JPG';
import friends1Img from '../assets/f1.jpg';
import friends2Img from '../assets/f2.jpg';
import friends3Img from '../assets/f3.jpg';
import friends4Img from '../assets/f4.jpg';
import billy1Img from '../assets/Billy1.jpg';
import billy2Img from '../assets/Billy2.jpg';
import billy3Img from '../assets/Billy3.jpg';
import billy4Img from '../assets/Billy4.jpg';
import who1Img from '../assets/Nazi1.jpg';
import who2Img from '../assets/Racism.jpg';
import who3Img from '../assets/Racism2.jpg';
import who4Img from '../assets/rasic.jpg';
import diet1Img from '../assets/Salo1.jpg';
import diet2Img from '../assets/chernyi xleb.jpg';
import diet3Img from '../assets/Garlic.jpg';
import diet4Img from '../assets/Gorilka1.jpg';
import { Carousel } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Nature</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Forever young</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Friends</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fouth" >My Idol one love</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Who i'm</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sex" >Diet</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ d1Img }
                                                alt="d1"
                                            />
                                            <Carousel.Caption>
                                                <h3>Raining Mamai</h3>
                                                <p>Just enjoy, gachi, pringles</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ d2Img }
                                                alt="d2"
                                            />
                                            <Carousel.Caption>
                                                <h3>Raining Mamai</h3>
                                                <p>Just enjoy, salo</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ d3Img }
                                                alt="d3"
                                            />
                                            <Carousel.Caption>
                                                <h3>Raining Mamai</h3>
                                                <p>Just enjoy, JS, Nazi</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ d4Img }
                                                alt="d4"
                                            />
                                            <Carousel.Caption>
                                                <h3>Raining Mamai</h3>
                                                <p>Just enjoy, Vorkuta</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ dan11Img }
                                                alt="dan11"
                                            />
                                            <Carousel.Caption>
                                                <h3>Young Mamai</h3>
                                                <p>Spy behind</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ dan12Img }
                                                alt="dan12"
                                            />
                                            <Carousel.Caption>
                                                <h3>Young Mamai</h3>
                                                <p>Pink in ur area</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ dan13Img }
                                                alt="dan13"
                                            />
                                            <Carousel.Caption>
                                                <h3>Young Mamai</h3>
                                                <p>My school days</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ dan14Img }
                                                alt="dan14"
                                            />
                                            <Carousel.Caption>
                                                <h3>Young Mamai</h3>
                                                <p>KalmGU foreva</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ friends1Img }
                                                alt="friends1"
                                            />
                                            <Carousel.Caption>
                                                <h3>My niga</h3>
                                                <p>Sexy</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ friends2Img }
                                                alt="friends2"
                                            />
                                            <Carousel.Caption>
                                                <h3>My niga</h3>
                                                <p>Shine</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ friends3Img }
                                                alt="friends3"
                                            />
                                            <Carousel.Caption>
                                                <h3>My niga</h3>
                                                <p>Everglow</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ friends4Img }
                                                alt="friends4"
                                            />
                                            <Carousel.Caption>
                                                <h3>My niga</h3>
                                                <p>Gachi Troopers</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fouth">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ billy1Img }
                                                alt="billy1"
                                            />
                                            <Carousel.Caption>
                                                <h3>IDOL</h3>
                                                <p>Just enjoy wings</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ billy2Img }
                                                alt="billy2"
                                            />
                                            <Carousel.Caption>
                                                <h3>IDOL</h3>
                                                <p>Just enjoy shirt</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ billy3Img }
                                                alt="billy3"
                                            />
                                            <Carousel.Caption>
                                                <h3>IDOL</h3>
                                                <p>Just enjoy smile</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ billy4Img }
                                                alt="billy4"
                                            />
                                            <Carousel.Caption>
                                                <h3>IDOL</h3>
                                                <p>Just enjoy eyes</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ who1Img }
                                                alt="who1"
                                            />
                                            <Carousel.Caption>
                                                <h3>Who i'm</h3>
                                                <p>Only white</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ who2Img }
                                                alt="who2"
                                            />
                                            <Carousel.Caption>
                                                <h3>Who i'm</h3>
                                                <p>People should be like snow. Any deviation dirty snow</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ who3Img }
                                                alt="who3"
                                            />
                                            <Carousel.Caption>
                                                <h3>Who i'm</h3>
                                                <p>If a person washes his hands and his hands remain black, then he does not need hands.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ who4Img }
                                                alt="who4"
                                            />
                                            <Carousel.Caption>
                                                <h3>Who i'm</h3>
                                                <p>If a shadow follows a person. Shoot maybe it's not a shadow.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sex">
                                    <Carousel color='Black'>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ diet1Img }
                                                alt="diet1"
                                            />
                                            <Carousel.Caption>
                                                <h3>Slim Mamai</h3>
                                                <p>Hohol menu</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ diet2Img }
                                                alt="diet2"
                                            />
                                            <Carousel.Caption>
                                                <h3>Slim Mamai</h3>
                                                <p>Hohol menu</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ diet3Img }
                                                alt="diet3"
                                            />
                                            <Carousel.Caption>
                                                <h3>Slim Mamai</h3>
                                                <p>Hohol menu</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100" 
                                                src={ diet4Img }
                                                alt="diet4"
                                            />
                                            <Carousel.Caption>
                                                <h3>Slim Mamai</h3>
                                                <p>Hohol menu</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}