import React from 'react';
// import Parallax1 from "../Images/parallax1.jpg";
import { Card, Container, Row, Button } from 'react-bootstrap';
import ShopCard from "../../Components/ShopCards/ShopCards";
import Dial from "../../Components/SpeedDial/SpeedDial"
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
            <h1>Shop Some Products</h1>
            <ShopCard />


            <Dial />

        </>
    )
}

export default Homepage;