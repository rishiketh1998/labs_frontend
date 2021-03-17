import React from "react";
import {Alert} from "react-bootstrap";

export const Message = ({message, variant, type}) => {
    return (
        <Alert variant={variant}>
            <Alert.Heading>{type}</Alert.Heading>
            <p className="my-1 lead">
                {message}
            </p>
            <hr />
        </Alert>
    )
}