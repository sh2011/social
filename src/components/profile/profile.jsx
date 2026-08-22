
import Me from "./me"
import Posts from "./posts"
import "./profile.css"
function Profile(props) {
    return (
        <section>
            <Me name={props.name}/>
            <Posts name={props.name}/>
        </section>
    )
}

export default Profile