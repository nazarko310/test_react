import Post from "../post/Post";

export default function Posts({item}) {

    return (
        <div>
            {
                item.map((value, index) => <Post item={value} key={index} editHistory={value.editHistory}/>)
            }
        </div>
    )
}