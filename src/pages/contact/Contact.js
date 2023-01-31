import './Contact.css'
import CustomForm from '../../helper/CustomForm'
import { useState } from 'react'
import { sendEmailToLezzt } from '../../helper/helper'
import { useToast } from '../../hooks/useToast'

export default function Contact() {

    const { showToast, toast } = useToast(2000)
    

    // console.log(user);
    

    const [dName, setDName] = useState("Guest")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [isPending, setIsPending] = useState(false)

    const resetForm=(message)=>{
        setIsPending(false)
        setMessage("")
        setDName("Guest")
        if(message === "OK"){
            showToast({message: 'Message Sucessfully sent!'})
        }else{
            showToast({message: 'Something went wrong... please try again later'})
        }

    }

    const handleSubmit =e=>{
        e.preventDefault()
        sendEmailToLezzt({
            sender: {
                displayName: "Guest",
                name: dName,
                uid: "guestid"
            },
            message: message,
            callback: resetForm,
            email: email
        })
        setIsPending(true)
    }
    return (
        <div className="contact-container flex-col-center-start">
            {toast}
            <h1 className='title'>Lets get in touch</h1>
            <br />
            {/* <h3 className="contact-email"><a href="mailto:noelsantillan.com@gmail.com">noelsantillan.com@gmail.com</a></h3>
            <hr className="contact-divider"/>
            <h3 className="contact-number"><a href="tel:6477841890">+647 784 1890</a></h3> */}
           

            {/* <p>Wanna say hi? send me a message!</p> */}

            <CustomForm 
                handleSubmit={handleSubmit}
                className=""
                // title="Help me"
            >
                <div className="field">
                    <span>Name</span>
                    <input type="text" value={dName} onChange={e=> setDName(e.target.value)} required/>
                </div>
                <div className="field">
                    <span>Email</span>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} required/>
                </div>
                <div className="field">
                    <span>Message</span>
                    <textarea value={message} onChange={e=> setMessage(e.target.value)} placeholder="Max 1000 characters" maxLength="1000" required></textarea>
                </div>
                {isPending ? <button disabled>Sending</button> : <button>Submit</button>}
                

            </CustomForm>

            <br />
            <span>Lezzt &copy; 2022</span>


        </div>

    )
}
