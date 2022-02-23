import React from 'react';
import Parallax1 from "../Images/parallax1.jpg";
import { Card, Container} from 'react-bootstrap';
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
            <h1>Helllloooo Worlllldddd</h1>

        </>
    )
}

export default Homepage;