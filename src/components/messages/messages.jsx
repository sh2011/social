import "./messages.css"
import Messagetext from './messagetext';
import UserItem from "./useritem";

function Messages(){
    return(
        <>
        <section className="users">
                <UserItem name="Mark antonii" id="1"/>
                <UserItem name="John Paul" id="2"/>
                <UserItem name="Mark Twen" id="3"/>
        </section>
        <section className="messages">

            <Messagetext message="       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate quam expedita culpa eaque voluptatem veritatis! Repudiandae quia doloremque, magni incidunt culpa, natus temporibus dolorem qui voluptate perspiciatis ducimus ad."/>
            <Messagetext message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ab iure, omnis alias ea numquam ipsam soluta a neque delectus dolore tenetur praesentium ipsa aperiam officiis recusandae, aspernatur optio nemo?"/>
            <Messagetext message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quam aspernatur perferendis harum, labore quos eos! Est hic explicabo libero, debitis reprehenderit sequi, temporibus odit veniam nulla ipsum magni modi."/>
            <textarea placeholder="type a message" />
            <button>send</button>
        </section> 
        </>
    )
}

export default Messages