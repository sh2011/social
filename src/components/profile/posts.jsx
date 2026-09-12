import Post from "./post"

let postItems=[
    {id:1, message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, vitae nisi! Dignissimos blanditiis ex consectetur incidunt fuga illum recusandae, vero eligendi! Repellat exercitationem recusandae veritatis facere ullam placeat eius sit?"},
    {id:2, message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nostrum illum fugiat sit nam veritatis molestiae ex nemo illo asperiores reiciendis, sapiente soluta accusantium fugit explicabo totam labore rerum inventore."},
    {id:3, message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id maiores amet numquam, reprehenderit iusto sint eos aliquam dignissimos. Sunt officia sed quas qui cumque corrupti unde aliquid eos accusantium?"},
    {id:4, message:"New message from ceo"},
]
function Posts(props){
    return(
            <div className="posts">
                <input type="text" placeholder="enter new post" />
                <button>Send</button>
                {postItems.map((e)=><Post name={props.name} message={e.message} id={e.id}/>)}
            </div> 
    )
}

export default Posts