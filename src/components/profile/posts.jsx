import Post from "./post"

function Posts(props){
    return(
            <div className="posts">
                <input type="text" placeholder="enter new post" />
                <button>Send</button>
                <Post name={props.name} message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, vitae nisi! Dignissimos blanditiis ex consectetur incidunt fuga illum recusandae, vero eligendi! Repellat exercitationem recusandae veritatis facere ullam placeat eius sit?"/>
                <Post name={props.name} message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nostrum illum fugiat sit nam veritatis molestiae ex nemo illo asperiores reiciendis, sapiente soluta accusantium fugit explicabo totam labore rerum inventore."/>
                <Post name={props.name} message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id maiores amet numquam, reprehenderit iusto sint eos aliquam dignissimos. Sunt officia sed quas qui cumque corrupti unde aliquid eos accusantium?"/>
            </div> 
    )
}

export default Posts