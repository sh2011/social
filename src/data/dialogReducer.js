const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateMessageTextAC = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        text: text
    }
}

let dialogReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
                if (state.newMessageText.trim() === "") {
                    return state;
                }
                let newMessage = {
                    id: 5,
                    message: state.newMessageText,
                }
                state.messageItems.push(newMessage);
                state.newMessageText = "";
            } else if (action.type === UPDATE_MESSAGE_TEXT) {
                state.newMessageText = action.text;
            }
            return state;
}

export default dialogReducer;