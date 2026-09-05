import { NavLink } from "react-router-dom";
function UserItem(props){
    return(
                <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    )
}

export default UserItem