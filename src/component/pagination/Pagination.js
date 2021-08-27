import {Fragment} from "react";
import {Link} from "react-router-dom";


export default function Pagination({info, url}) {
    const pageNumber = [];
    for (let i = 1; i <= info.pages; i++) {
        pageNumber.push(i)
    }
    return (
        <div className='pagination'>
            {
                pageNumber.map(number =>
                    <Fragment key={number}>
                        <Link to={{
                            pathname:`${url}/${number}`,
                            state: info
                        }}>
                            {number}
                        </Link>
                    </Fragment>
                )
            }
        </div>
    )
}