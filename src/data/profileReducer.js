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

let ProfileReducer = (state, action) => {
    
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