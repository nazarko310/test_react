import './Post.css'

export default function Post({item, likes, reposts, editHistory}) {

    return (
        <div>
            <div className='polar'>
                <img src={item.postImage} alt={item.postTitle}/>
                <div className='polar__content'>
                    <h2>{item.postTitle}</h2>
                    <p>{item.postBody}</p>
                </div>
            </div>
            <div className='blog'>
                {
                    editHistory.map((value, index) =>
                        <div className='blog__post' key={index}>
                            <img src={value.postImage} alt={value.postTitle}/>
                            <div className='blog__post-content'>
                                <h2>{value.postTitle}</h2>
                                <p>{value.postBody}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='users-seen'>
                <p>Likes: {`${item.likes}`}</p>
                <p>Reposts: {`${item.reposts}`}</p>
            </div>

        </div>
    )
}