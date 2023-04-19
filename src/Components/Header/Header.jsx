import curriculo from '../../SectionsApp/SectionOne/Curriculo/Curriculo-mauricio-pedro-da-rocha.pdf.pdf'
import './Header.css'

export default function Header() {
    return (
        <header className="fixed sm:block hidden w-full bg-[#91AED6] z-30">
            <nav className="flex flex-wrap justify-between items-center py-4 px-4 gap-4 max-w-[1400px] mx-auto">
                <h3 className="fontPop font-bold text-white logo px-4 py-1 rounded-full">MEU PORTFÓLIO</h3>
                <ul className="flex items-center gap-4 fontPop text-white">
                    <a href="#section1" className="outline-none">
                        <li className='text-xs sm:text-base hover:text-[#C9B4D5] duration-500'>
                            Home
                        </li>
                    </a>
                    <a href="#section2" className="outline-none">
                        <li className='text-xs sm:text-base hover:text-[#C9B4D5] duration-500'>
                            Sobre mim
                        </li>
                    </a>
                    <a href="#section3" className="outline-none">
                        <li className='text-xs sm:text-base hover:text-[#C9B4D5] duration-500'>
                            Projetos
                        </li>
                    </a>
                    <a href="#section5" className="outline-none">
                        <li className='text-xs sm:text-base hover:text-[#C9B4D5] duration-500'>
                            Eventos
                        </li>
                    </a>
                    <a href="#section4" className="outline-none">
                        <li className='text-xs sm:text-base hover:text-[#C9B4D5] duration-500'>
                            Skills
                        </li>
                    </a>
                    <a href={curriculo} target="_blank">
                        <li className='text-xs sm:text-base rounded-xl py-1 px-4 text-[#383838] bg-white font-medium'>
                            Currículo
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}