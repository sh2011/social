const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
export let addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export let updatePostTextAC = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        text: text
    }
}
let initialState = {
    postItems: [
        { id: 1, likes: 2, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, vitae nisi! Dignissimos blanditiis ex consectetur incidunt fuga illum recusandae, vero eligendi! Repellat exercitationem recusandae veritatis facere ullam placeat eius sit?" },
        { id: 2, likes: 5, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nostrum illum fugiat sit nam veritatis molestiae ex nemo illo asperiores reiciendis, sapiente soluta accusantium fugit explicabo totam labore rerum inventore." },
        { id: 3, likes: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id maiores amet numquam, reprehenderit iusto sint eos aliquam dignissimos. Sunt officia sed quas qui cumque corrupti unde aliquid eos accusantium?" },
        { id: 4, likes: 10, message: "New message from ceo" },
    ],
    users: [
                { id: 1, name: "Elon Musk", ava: "avatar.jpeg", header: "spacex.jpg" },
    ],
    newPostText: "",
};
let ProfileReducer = (state = initialState  , action) => {
    
      if (action.type === ADD_POST) {
        
            if (state.newPostText.trim() === "") {
                return state;
            }
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            }
            state.postItems.unshift(newPost);
            state.newPostText = "";

        } else if (action.type === UPDATE_POST_TEXT) {
            state.newPostText = action.text;
        }
        return state;
    
}

export default ProfileReducer;