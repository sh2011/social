import "./messages.css"
import Messagetext from './messagetext';
import UserItem from "./useritem";
import React from "react";
let messageText = React.createRef();

function Messages(props){
    let addMessage = () =>{
        props.addMessage(messageText.current.value)
    }
    return(
        <>
        <section className="users">
                {props.dialogPage.dialogNames.map((e)=><UserItem name={e.name} id={e.id}/>)}
        </section>
        <section className="messages">

            {props.dialogPage.messageItems.map((e)=><Messagetext message={e.message} id={e.id}/>)}
            <textarea ref={messageText} placeholder="type a message" />
            <button onClick={addMessage}>send</button>
        </section> 
        </>
    )
}

export default Messages