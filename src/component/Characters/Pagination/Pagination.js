import {Fragment} from "react";
import {useHistory, useLocation} from "react-router-dom";
import * as queryString from "querystring";


export default function Pagination({info, url}) {
    const history = useHistory();
    const location = useLocation();
    const pageNumber = [];
    for (let i = 1; i <= info.pages; i++) {
        pageNumber.push(i)
    }
    const handlerClick = (number) => {
        const query = queryString.parse(location.search);
        query.page = number;

        history.push(`${url}?` + queryString.stringify(query));
    }

    return (
        <div className='pagination'>
            {
                pageNumber.map(number =>
                    <Fragment key={number}>
                        <button onClick={() => handlerClick(number)}
                        >
                            {number}
                        </button>
                    </Fragment>
                )
            }
        </div>
    )
}