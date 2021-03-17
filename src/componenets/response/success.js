import React from "react";
import {Alert} from "react-bootstrap";

export const Success = ({message}) => {
    return (
        <Alert variant="success">
            <Alert.Heading>Successful</Alert.Heading>
            <p className="my-1 lead">
                {message}
            </p>
            <hr />
        </Alert>
    )
}