import React, {useEffect, useState} from "react";
import { Message } from "./response/Message";
import axios from "axios"
import { Inquiry } from "./inquiry";

/**
 * @author Rishi
 * @description: Component that displays all the inquires made by users with the newest showing first.
 * @returns {JSX.Element}
 * @constructor
 */
export const Inquiries = () => {
    const [inquiries, setInquiries] = useState("There are no inquiries yet.")
    const [error, setError] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    useEffect(() => {
        /**
         * @author Rishi
         * @description: makes an ajax call to retrieve all the inquires data from the server
         * @returns {Promise<void>}
         */
        const getInquiries = async () => {
            try {
                const response = await axios.get("http://localhost:5000/v1/inquiries")
                setInquiries(response.data.Data)
                setError(false)
            } catch (e) {
                setError(true)
                setErrMessage(e.response.data.Error)
            }
        }
        getInquiries()
    }, [])
    return (
        <div className="container my-5">
            {error && <Message message={errMessage}/>}
            {
                typeof(inquiries) === "string" ?
                    <Message type="Note" message={inquiries} variant="info"/>
                    :
                    <>
                        {
                            inquiries.map((inquiry) => <Inquiry inquiry={inquiry}/>)
                        }
                    </>
            }
        </div>
    )
}