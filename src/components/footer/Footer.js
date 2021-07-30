import './Footer.css'
export default function Footer({item}) {
    return (
        <footer>
            <div className="container">
                {
                    item.map((value, index) =>
                        <div key={index} className='footer__content'>
                            <p>@{value.author} from {value.createdAt}</p>
                            <p>Date of update {value.updatedAt}</p>
                        </div>
                    )
                }
            </div>
        </footer>
    )
}