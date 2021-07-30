import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <img src="https://www.polar.com/og-polar-logo.jpg" alt="" width='150px'/>
                    <nav className='nav'>
                        <a href="https://" className='nav__link'>Home</a>
                        <a href="https://" className='nav__link'>About</a>
                        <a href="https://" className='nav__link'>Portfolio</a>
                        <a href="https://" className='nav__link'>Blog</a>
                    </nav>
                </div>
            </div>
        </header>


    )
}