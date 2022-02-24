import React from 'react';
import Parallax1 from "../Images/parallax1.jpg";
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../Homepage/style.css";


const Homepage = () => {

    return (
        <>
            <Container>
                <Card className="bg-dark text-white">
                    <Card.Img src={Parallax1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Welcome</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <h1>Crafts</h1>

            <Container>
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
            </Container>

        </>
    )
}

export default Homepage;