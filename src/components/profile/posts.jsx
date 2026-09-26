import Post from "./post"


function Posts(props){
    return(
            <div className="posts">
                <input type="text" placeholder="enter new post" />
                <button>Send</button>
                {props.postItems.map((e)=><Post name={props.name} message={e.message} id={e.id}/>)}
            </div> 
    )
}

export default Posts