import './EditHistory.css'

export default function EditHistory({location: {state}}) {

    return (
        <div className='edit-history'>
            {
                state.map((value, index) =>
                    <div key={index} className='edit-history__block'>
                        <img src={value.postImage} alt={value.postTitle}/>
                        <div className='edit-history__content'>
                            <h2>{value.postTitle}</h2>
                            <p>{value.postBody}</p>
                        </div>
                        <div className='edit-history__date'>
                            <p>{value.date}</p>
                        </div>
                    </div>)
            }
        </div>
    )
}