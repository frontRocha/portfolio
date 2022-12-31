import './Header.css'

export default function Header() {
    return (
        <header className="fixed w-full bg-[#91AED6] z-30">
            <nav className="flex flex-wrap justify-between items-center py-4 px-4 gap-4">
                <h3 className="fontPop font-bold text-white logo px-4 py-1 rounded-full">MEU PORTFÓLIO</h3>
                <ul className="flex items-center gap-4 fontPop text-white">
                    <a href="#section1  outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Home
                        </li>
                    </a>
                    <a href="#section2  outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Sobre mim
                        </li>
                    </a>
                    <a href="#section3  outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Projetos
                        </li>
                    </a>
                    <a href="#section4  outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Skills
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}