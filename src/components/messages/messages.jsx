import "./messages.css"
import Messagetext from './messagetext';
import UserItem from "./useritem";

function Messages(props){
    return(
        <>
        <section className="users">
                {props.dialogNames.map((e)=><UserItem name={e.name} id={e.id}/>)}
        </section>
        <section className="messages">

            {props.messageItems.map((e)=><Messagetext message={e.message} id={e.id}/>)}
            <textarea placeholder="type a message" />
            <button>send</button>
        </section> 
        </>
    )
}

export default Messages