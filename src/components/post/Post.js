import './Post.css'
import {Link, Route} from "react-router-dom";
import EditHistory from "../edit-history/EditHistory";

export default function Post({item, editHistory}) {

    return (
        <div className='post'>
            <div className='polar'>
                <img src={item.postImage} alt={item.postTitle}/>
                <div className='polar__content'>
                    <h2>{item.postTitle}</h2>
                    <p>{item.postBody}</p>
                </div>
                <div className='post__btn'>
                    <Link to={
                        {
                            pathname: '/more',
                            state: editHistory
                        }
                    }>More</Link>
                </div>
                <div className='post__likes'>
                    <Link to={
                        {
                            pathname: '/likes',
                            state: item
                        }
                    }><img src="https://img.icons8.com/color/32/000000/heart-health.png" alt='heart'/></Link>
                    <Route path={'/likes'} render={({location:{state}})=><div className='people'>{state.likes}</div>}/>
                </div>
                <div className='post__reposts'>
                    <Link to={
                        {
                            pathname: '/reposts',
                            state: item
                        }
                    }><img src="https://img.icons8.com/ios-glyphs/30/fa314a/sent.png" alt='reposts'/></Link>
                    <Route path={'/reposts'} render={({location:{state}})=><div className='people'>{state.reposts}</div>}/>
                </div>
            </div>
            <Route path={'/more'} component={EditHistory}/>
        </div>
    )
}

