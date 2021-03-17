import React, {useState} from "react";
import {Card, Form, Button} from "react-bootstrap";
import useFormHook from "../hooks/useFormHook";
import { Message } from "./response/Message";
import axios from "axios"

export const InquiryForm = () => {
    const [formValue, handleChange, handleReset] = useFormHook({
        name: "",
        email: "",
        message: ""
    })
    const [subscription, setSubscription] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const handleSubscription = (e) => {
        setSubscription(e.target.checked)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = JSON.parse(JSON.stringify(formValue))
        data.subscription = subscription
        try {
            const response = await axios.post("http://localhost:5000/v1/inquiry", data)
            setSuccessMessage(response.data.Message)
            setError(false)
            setSuccess(true)
            handleReset()
            setSubscription(false)
        } catch (e) {
            setError(true)
            setSuccess(false)
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}