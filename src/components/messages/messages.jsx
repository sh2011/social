import "./messages.css"
import Messagetext from './messagetext';
import UserItem from "./useritem";

let dialogNames =[
    {name:"Mark antonii", id:1},
    {name:"John Paul", id:2},
    {name:"Mark Twen", id:3},
    {name:"Albert Luiska", id:4},
]

let messageItems =[
    {id:1, message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate quam expedita culpa eaque voluptatem veritatis! Repudiandae quia doloremque, magni incidunt culpa, natus temporibus dolorem qui voluptate perspiciatis ducimus ad."},
    {id:2, message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ab iure, omnis alias ea numquam ipsam soluta a neque delectus dolore tenetur praesentium ipsa aperiam officiis recusandae, aspernatur optio nemo?"},
    {id:3, message:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quam aspernatur perferendis harum, labore quos eos! Est hic explicabo libero, debitis reprehenderit sequi, temporibus odit veniam nulla ipsum magni modi."},
    {id:4, message:"New message from me"},
] 
function Messages(){
    return(
        <>
        <section className="users">
                {dialogNames.map((e)=><UserItem name={e.name} id={e.id}/>)}
        </section>
        <section className="messages">

            {messageItems.map((e)=><Messagetext message={e.message} id={e.id}/>)}
            <textarea placeholder="type a message" />
            <button>send</button>
        </section> 
        </>
    )
}

export default Messages