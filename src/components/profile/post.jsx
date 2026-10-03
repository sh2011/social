function Post(props){
    return(
                <div className="post">
                    <img src={require(`../../img/${props.user.ava}`)} alt="" className="ava" />
                    <span className="name">{props.user.name}</span>
                    <p>{props.message}</p>
                </div>
    )
}

export default Post