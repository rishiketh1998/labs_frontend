import React from "react";
import {Card} from "react-bootstrap";

/**
 * @author Rishi
 * @description: component displays individual inquiry details in a card
 * @param inquiry
 * @returns {JSX.Element}
 * @constructor
 */
export const Inquiry = ({inquiry}) => {
    return (
        <Card className="rounded my-4">
            <Card.Body>
                <p className="text-secondary">
                    Name - {inquiry.Name} /  Email - {inquiry.Email} / Subscriber - {inquiry.Subscritpion ? "Yes": "No"}
                </p>
                <p className="text-secondary font-weight-light">
                </p>
                <p className="blockquote">
                    {inquiry.Message}
                </p>
            </Card.Body>
            <Card.Footer className="text-right text-secondary" style={{fontSize: "small"}}>
                Posted on: {inquiry.Date}
            </Card.Footer>
        </Card>
    )
}