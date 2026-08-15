import ava from "../../img/avatar.jpeg"
import hdr from "../../img/spacex.jpg"
import "./profile.css"
function Profile() {
    return (
        <section>
            <div className="me">
                <img src={hdr} alt="" />
                <h2>Elon Musk</h2>
            </div>
            <div className="posts">
                <input type="text" placeholder="enter new post" />
                <button>Send</button>
                <div className="post">
                    <img src={ava} alt="" className="ava" />
                    <span className="name">Elon Musk</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi modi, eum, temporibus distinctio nesciunt possimus praesentium ea suscipit aliquid iure nulla, eius rem animi a voluptatum ducimus odio blanditiis.</p>
                </div>
                <div className="post">
                    <img src={ava} alt="" className="ava" />
                    <span className="name">Elon Musk</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non mollitia dolore atque inventore omnis eum doloribus tempora, minus aspernatur laudantium? Nam minus fuga, error non nesciunt aliquam. Sequi, dolor perspiciatis.</p>
                </div>
                <div className="post">
                    <img src={ava} alt="" className="ava" />
                    <span className="name">Elon Musk</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus delectus nulla perferendis quasi magni ab obcaecati ut consectetur quo amet, quidem fuga asperiores eveniet unde nobis impedit praesentium veniam?</p>
                </div>
            </div>
        </section>
    )
}

export default Profile