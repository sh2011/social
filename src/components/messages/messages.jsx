import "./messages.css"
import Messagetext from './messagetext';
import UserItem from "./useritem";
import React from "react";
let messageText = React.createRef();

function Messages(props){
    let addMessage = () =>{
        props.dispatch({type: "ADD-MESSAGE"})
    }
    let onMessageTextChange = () =>{
        let text = messageText.current.value;
        props.dispatch({type: "UPDATE-MESSAGE-TEXT", text: text});
    }
    return(
        <>
        <section className="users">
                {props.dialogPage.dialogNames.map((e)=><UserItem name={e.name} id={e.id}/>)}
        </section>
        <section className="messages">

            {props.dialogPage.messageItems.map((e)=><Messagetext message={e.message}  id={e.id}/>)}
            <textarea ref={messageText} placeholder="type a message" onChange={onMessageTextChange} value={props.newMessageText} />
            <button onClick={addMessage}>send</button>
        </section> 
        </>
    )
}

export default Messages