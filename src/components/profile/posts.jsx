import Post from "./post"
import react from "react"
let postText =react.createRef()


function Posts(props){
    let addPost = () =>{
       props.addPost(postText.current.value)
    }
    let onPostTextChange = () =>{
        let text = postText.current.value;
        props.postTextChange(text);
    }
    return(
            <div className="posts">
                <input ref={postText} type="text" placeholder="enter new post" value={props.newPostText} onChange={onPostTextChange} />
                <button onClick={addPost}>Send</button> 
                {props.postItems.map((e)=><Post user={props.user} message={e.message} id={e.id}/>)}
            </div> 
    )
}

export default Posts