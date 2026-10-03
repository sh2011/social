function Me(props){
    return(
            <div className="me">
                <img src={require(`../../img/${props.user.header}`)} alt="" />
                <h2>{props.user.name}</h2>
            </div>
    )
}

export default Me