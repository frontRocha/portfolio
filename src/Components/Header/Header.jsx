import curriculo from '../../SectionsApp/SectionOne/Curriculo/Curriculo-Mauricio-Pedro-da-Rocha-Front-end.pdf'
import './Header.css'

export default function Header() {
    return (
        <header className="fixed w-full bg-[#91AED6] z-30">
            <nav className="flex flex-wrap justify-between items-center py-4 px-4 gap-4 max-w-[1400px] mx-auto">
                <h3 className="fontPop font-bold text-white logo px-4 py-1 rounded-full">MEU PORTFÓLIO</h3>
                <ul className="flex items-center gap-4 fontPop text-white">
                    <a href="#section1" className="outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Home
                        </li>
                    </a>
                    <a href="#section2" className="outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Sobre mim
                        </li>
                    </a>
                    <a href="#section3" className="outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Projetos
                        </li>
                    </a>
                    <a href="#section4" className="outline-none">
                        <li className='hover:text-[#C9B4D5] duration-500'>
                            Skills
                        </li>
                    </a>
                    <a href={curriculo} target="_blank">
                        <li className='rounded-xl py-1 px-4 text-[#383838] text-sm bg-white font-medium'>
                            Curriculo
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}