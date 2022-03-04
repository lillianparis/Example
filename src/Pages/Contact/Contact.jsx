import React from 'react';
import Container from "react-bootstrap/Container";

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
                    <h1>Send a Message</h1>
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
                        <button class="help" type="submit" disabled={state.submitting}>
                            Submit
                        </button>

                        {/* <Button variant="contained" size="medium" type="submit" disabled={state.submitting}>
                            Send
                        </Button> */}
                    </form>

                </Container>
            </div>

        </>
    );
}
function App() {
    return (
        <Contact />
    );
}
export default App;