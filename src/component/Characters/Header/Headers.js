import {Link} from "react-router-dom";

export default function Headers() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>

                    <img
                        src="https://i.pinimg.com/736x/1a/08/7e/1a087e4a9c2a1c729a0ca6b9491b3830--star-logo-rick-and-morty.jpg"
                        alt="" className='header__logo'/>
                    <nav className='header__menu'>
                        <Link to={'/character'}>Character</Link>
                        <Link to={'/location'}>Location</Link>
                        <Link to={'/episode'}>Episode</Link>


                    </nav>
                </div>
            </div>
        </header>
    )
}