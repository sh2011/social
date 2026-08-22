function Me(props){
    return(
            <div className="me">
                <img src={require("../../img/spacex.jpg")} alt="" />
                <h2>{props.name}</h2>
            </div>
    )
}

export default Me