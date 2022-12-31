export default function Header() {
    return (
        <header className="fixed w-full bg-[#91AED6] z-30">
            <nav className="flex flex-wrap justify-between items-center py-4 px-4 gap-4">
                <h3 className="fontPop font-bold text-[white]">PORTFÓLIO</h3>
                <ul className="flex items-center gap-4 fontPop text-white">
                    <a href="#section1">
                        <li>
                            Home
                        </li>
                    </a>
                    <a href="#section2">
                        <li>
                            Sobre mim
                        </li>
                    </a>
                    <a href="#section3">
                        <li>
                            Projetos
                        </li>
                    </a>
                    <a href="#section4">
                        <li>
                            Skills
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}