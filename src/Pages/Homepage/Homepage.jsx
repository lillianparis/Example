import React from 'react';
// import Parallax1 from "../Images/parallax1.jpg";
import { Card, Container, Row, Button } from 'react-bootstrap';
import "../Homepage/style.css";


const Homepage = () => {

    return (
        <>
            <Container>
                <Row>
                <Card style={{ width: '45rem' }}>
                    <Card.Body>
                        <Card.Title>Hello, My Name is [NAME]</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">[Pick Hobby Title]</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="secondary">Merchandise</Button>{' '}
                        <Button variant="outline-secondary">Contact</Button>{' '}
                    </Card.Body>
                </Card>
                </Row>
            </Container>
            <h1>Crafts</h1>

            {/* <Container>
                <Row xs={6} md={4} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container> */}

        </>
    )
}

export default Homepage;