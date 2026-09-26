
import Me from "./me"
import Posts from "./posts"
import "./profile.css"
function Profile(props) {
    return (
        <section>
            <Me name={props.profilePage.users[0].name}/>
            <Posts name={props.profilePage.users[0].name} postItems={props.profilePage.postItems} />
        </section>
    )
}

export default Profile