
import Me from "./me"
import Posts from "./posts"
import "./profile.css"
function Profile(props) {
    return (
        <section>
            <Me user={props.profilePage.users[0]}/>
            <Posts user={props.profilePage.users[0]} postItems={props.profilePage.postItems} addPost={props.addPost} />
        </section>
    )
}

export default Profile