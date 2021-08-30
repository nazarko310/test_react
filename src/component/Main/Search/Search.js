
import {useState} from "react";


export default function Search() {
    const [value, setValue] = useState([])

    const functionOnSubmit = (e) => {
        if (value) {
            e.preventDefault()


        }
    }
    const functionOnChange = (e) => {
        setValue(e.target.value)
    }


    return (
        <>
            <form onSubmit={functionOnSubmit} id='form' className='form'>
                <input
                    type="search"
                    name='search'
                    placeholder='Search...'
                    value={value}
                    onChange={functionOnChange}
                />
            </form>
        </>
    )
}