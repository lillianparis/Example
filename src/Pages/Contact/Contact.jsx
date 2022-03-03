import React from 'react';
import Container from "react-bootstrap/Container";
import Dial from "../../Components/SpeedDial/SpeedDial";
import { useForm, ValidationError } from '@formspree/react';
import "../Contact/style.css";
function Contact() {
    const [state, handleSubmit] = useForm("xgedyzlv");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
        <div class="hello">
            <Container>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                      <label htmlFor="email">
                       Leave a Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>

            </Container>
            </div>
            <Dial />
        </>
    );
}
function App() {
    return (
        <Contact />
    );
}
export default App;