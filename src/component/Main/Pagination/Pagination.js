import {Fragment} from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";


export default function Pagination(pages) {
    const location = useLocation();
    const history = useHistory();

    const pageNumber = [];
    for (let i = 1; i <= pages.info; i++) {
        pageNumber.push(i)
    }


    const paginate = (number) => {
        // const query = queryString.parse(location.search);
        // query.page = number;
        const urlPaginate = new URLSearchParams(location.search);
        urlPaginate.set('page', number);
        history.push(location.pathname + "?" + urlPaginate.toString());

    }

    return (
        <div className='pagination'>
            {
                pageNumber.map(number =>
                    <Fragment key={number}>
                        <button onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    </Fragment>
                )
            }
        </div>
    )
}