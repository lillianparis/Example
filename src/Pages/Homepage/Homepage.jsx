import React from 'react';
// import Parallax1 from "../Images/parallax1.jpg";
import { Card, Container, Row, Button } from 'react-bootstrap';
import ShopCard from "../../Components/ShopCards/ShopCards";

import Contact from "../../Pages/Contact/Contact";
import "../Homepage/style.css";

const Homepage = () => {

    return (
        <>

            <Container>
                <Row>

                    <Card style={{ width: '60rem' }}>

                        <Card.Body>

                            <Card.Title>Personalized Cricket Crafts</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Request One Today</Card.Subtitle>
                            <Card.Text>
                                Make an empty space in any corner of your mind, and creativity will instantly fill it. -Dee Hock
                            </Card.Text>
                            <Button variant="outline-secondary">Request</Button>{' '}
                            <Button variant="outline-secondary">Shop</Button>{' '}


                        </Card.Body>

                    </Card>
                </Row>
            </Container>


            <ShopCard />

            <Contact />
         

        </>
    )
}

export default Homepage;