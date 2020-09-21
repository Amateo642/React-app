import React, { Component } from 'react'
import { Carousel, Container, CardDeck, Card, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox'
import team1Img from '../assets/45.jpg'
import team2Img from '../assets/team2.jpg'
import team3Img from '../assets/team3.jpg'
/*import Carousel from 'react-bootstrap/Carousel';*/

export default class Home extends Component {
    render() {
        return (
        <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">                   
                    <Card>
                        <Card.Img variant="top" 
                        src={ team2Img }
                        />
                        <Card.Body>
                            <Card.Title>Backend</Card.Title>
                            <Card.Text>
                                My Pizdyki
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="info" border="primary" text="white">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Watcher Msc
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" 
                        src={ team1Img }
                        />
                    </Card>
                    <Card>
                        <Card.Img variant="top" 
                        src={ team3Img }
                        />
                        <Card.Body>
                            <Card.Title>Frontend</Card.Title>
                            <Card.Text>
                                My Juniors
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </>
        )
    }
}