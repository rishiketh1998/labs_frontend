import React from "react";
import {Alert} from "react-bootstrap";

/**
 * @author Rishi
 * @description: component that displays an Alert message depending on the type (error, success etc) of the message and
 * variant (colour indicator)
 * @param message - message needed to be displayed
 * @param variant - colour indication of the message (error - red)
 * @param type - type of the message (error, success etc)
 * @returns {JSX.Element}
 * @constructor
 */
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