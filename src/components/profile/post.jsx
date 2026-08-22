function Post(props){
    return(
                <div className="post">
                    <img src={require("../../img/avatar.jpeg")} alt="" className="ava" />
                    <span className="name">{props.name}</span>
                    <p>{props.message}</p>
                </div>
    )
}

export default Post