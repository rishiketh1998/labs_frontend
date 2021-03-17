import React from "react";
import {Alert} from "react-bootstrap";

export const Error = ({message}) => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p className="my-1 lead">
                {message}
            </p>
            <hr />
        </Alert>
    )
}