
let state = {
    profilePage: {
        postItems: [
            { id: 1,likes:2, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, vitae nisi! Dignissimos blanditiis ex consectetur incidunt fuga illum recusandae, vero eligendi! Repellat exercitationem recusandae veritatis facere ullam placeat eius sit?" },
            { id: 2, likes: 5, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nostrum illum fugiat sit nam veritatis molestiae ex nemo illo asperiores reiciendis, sapiente soluta accusantium fugit explicabo totam labore rerum inventore." },
            { id: 3, likes: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id maiores amet numquam, reprehenderit iusto sint eos aliquam dignissimos. Sunt officia sed quas qui cumque corrupti unde aliquid eos accusantium?" },
            { id: 4, likes: 10, message: "New message from ceo" },
        ],
        users:[
            {id:1, name: "Elon Musk",ava:"avatar.jpeg",header:"spacex.jpg" },
        ],
        newPostText: "",
    },
    dialogPage: {
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
    }
}
let rerender = () => {
    return;
}
export let subscribe = (observer) => {
    rerender = observer;
}
export let addPost = () => {
    if(state.profilePage.newPostText.trim() === ""){
        return;
    }
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.postItems.unshift(newPost);
    state.profilePage.newPostText = "";
    rerender();
}
export let postTextChange = (text) => {
    state.profilePage.newPostText = text;
    rerender();
}

export let addMessage = () => {
    if(state.dialogPage.newMessageText.trim() === ""){
        return;
    }
    let newMessage = {
        id: 5,
        message: state.dialogPage.newMessageText,
    }
    state.dialogPage.messageItems.push(newMessage);
    state.dialogPage.newMessageText = "";
    rerender();
}

export let messageTextChange = (text) => {
    state.dialogPage.newMessageText = text;
    rerender();
}

export default state