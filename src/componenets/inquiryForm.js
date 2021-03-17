import React, {useRef, useState} from "react";
import {Card, Form, Button} from "react-bootstrap";
import useFormHook from "../hooks/useFormHook";
import { Message } from "./response/Message";
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha";

/**
 * @author Rishi
 * @description: component that allows users to enter their inquiry
 * @returns {JSX.Element}
 * @constructor
 */
export const InquiryForm = () => {
    const [formValue, handleChange, handleReset] = useFormHook({
        name: "",
        email: "",
        message: ""
    })
    const recaptchaRef = useRef();
    const [subscription, setSubscription] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [captcha, setCaptcha] = useState("")
    /**
     * @author Rishi
     * @description: handles the input change of subscription
     * @param e
     */
    const handleSubscription = (e) => {
        setSubscription(e.target.checked)
    }
    /**
     * @author Rishi
     * @description: sets the recaptcha value to the state
     * @param value
     */
    const onChangeRecaptcha = (value) => {
        setCaptcha(value)
    }
    /**
     * @author Rishi
     * @description: an ajax call is made to the server to store inquiry, all errors are handled here
     * @param e
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = JSON.parse(JSON.stringify(formValue))
        data.subscription = subscription
        data.captcha = captcha
        try {
            const response = await axios.post("http://localhost:5000/v1/inquiry", data)
            setSuccessMessage(response.data.Message)
            setError(false)
            setSuccess(true)
            handleReset()
            recaptchaRef.current.reset()
            setSubscription(false)
        } catch (e) {
            setError(true)
            setSuccess(false)
            recaptchaRef.current.reset()
            setErrMessage(e.response.data.Error)
        }
    }
    return (
        <div className="container my-5">
            {error && <Message message={errMessage} variant="danger" type="Error"/>}
            {success && <Message message={successMessage} variant="success" type="Success" />}
            <Card>
                <Card.Header className="lead" style={{fontFamily: "cursive"}}>Inquiry Form</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name"
                                          value={formValue.name} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"
                                          value={formValue.email} onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} type="text" name="message"
                                          placeholder="Enter message" value={formValue.message} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Subscribe to Tasty Treats"
                                        onChange={handleSubscription} name="subscription" checked={subscription}/>
                        </Form.Group>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Ldt_oIaAAAAAKmX_4H_IiwR26tRaPJmzhGlKXom"
                            onChange={onChangeRecaptcha}
                        />
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}