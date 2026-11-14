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
let initialState = {
    dialogNames: [
        { name: "Mark antonii", id: 1 },
        { name: "John Paul", id: 2 },
        { name: "Mark Twen", id: 3 },
        { name: "Albert Luiska", id: 4 },
    ],
    messageItems: [
                { id: 1, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate quam expedita culpa eaque voluptatem veritatis! Repudiandae quia doloremque, magni incidunt culpa, natus temporibus dolorem qui voluptate perspiciatis ducimus ad." },
                { id: 2, message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ab iure, omnis alias ea numquam ipsam soluta a neque delectus dolore tenetur praesentium ipsa aperiam officiis recusandae, aspernatur optio nemo?" },
                { id: 3, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quam aspernatur perferendis harum, labore quos eos! Est hic explicabo libero, debitis reprehenderit sequi, temporibus odit veniam nulla ipsum magni modi." },
                { id: 4, message: "New message from me" },
    ],
    newMessageText: "",
};
let dialogReducer = (state = initialState   , action) => {
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