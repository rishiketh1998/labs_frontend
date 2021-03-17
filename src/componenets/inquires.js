import React, {useEffect, useState} from "react";
import { Message } from "./response/Message";
import axios from "axios"
import { Inquiry } from "./inquiry";

export const Inquiries = () => {
    const [inquiries, setInquiries] = useState("There are no inquiries yet.")
    const [error, setError] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    useEffect(() => {
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