import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';
import d1Img from '../assets/vorkuta.jpg';
import d2Img from '../assets/taganrog.jpg';
import d3Img from '../assets/5gorsk.jpg';
import d4Img from '../assets/pri5.jpg';
import d5Img from '../assets/city5.jpg';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Vorkuta</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Tagangor</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Fivescity</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fouth" >Prifive</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Halo</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={ d1Img } />
                                    <p>
                                        Relax
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={ d2Img } />
                                    <p>
                                        Sit
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={ d3Img } />
                                    <p>
                                        Nature
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fouth">
                                    <img src={ d4Img } />
                                    <p>
                                        Enjoy
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={ d5Img } />
                                    <p>
                                        Hookah
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}