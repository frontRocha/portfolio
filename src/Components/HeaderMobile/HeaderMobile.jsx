import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import curriculo from '../../SectionsApp/SectionOne/Curriculo/Curriculo-Mauricio-Pedro-Front-End.pdf'
import './HeaderMobile.css'

export default function HeaderMobile() {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        if (isOpen) {
            setIsOpen(false)
            return
        }

        setIsOpen(true)
    }

    return (
        <header className="fixed w-full bg-[#91AED6] z-30 sm:hidden block">
            <nav className="flex flex-col flex-wrap py-4 px-4 gap-4 max-w-[1400px] mx-auto">
                <div className='w-full flex justify-between items-center'>
                    <h3 className="fontPop font-bold text-white logo px-4 py-1 rounded-full">MEU PORTFÓLIO</h3>
                    <HiMenuAlt1 onClick={handleOpen} className='text-white text-2xl cursor-pointer'/>
                </div>
                <div className={`${isOpen ? 'h-[230px] opacity-100' : 'h-[0px] opacity-0'} duration-500 flex flex-col`}>
                    <ul className="flex flex-col items-start gap-4 fontPop text-white">
                        <a href="#section1" className="outline-none">
                            <li onClick={() => setIsOpen(false)} className='text-sm sm:text-base hover:text-[#C9B4D5] duration-500'>
                                Home
                            </li>
                        </a>
                        <a href="#section2" className="outline-none">
                            <li onClick={() => setIsOpen(false)} className='text-sm hover:text-[#C9B4D5] duration-500'>
                                Sobre mim
                            </li>
                        </a>
                        <a href="#section3" className="outline-none">
                            <li onClick={() => setIsOpen(false)} className='text-sm hover:text-[#C9B4D5] duration-500'>
                                Projetos
                            </li>
                        </a>
                        <a href="#section5" className="outline-none">
                            <li onClick={() => setIsOpen(false)} className='text-sm hover:text-[#C9B4D5] duration-500'>
                                Eventos
                            </li>
                        </a>
                        <a href="#section4" className="outline-none">
                            <li onClick={() => setIsOpen(false)} className='text-sm hover:text-[#C9B4D5] duration-500'>
                                Skills
                            </li>
                        </a>
                        <a href={curriculo} target="_blank">
                            <li onClick={() => setIsOpen(false)} className='text-sm rounded-xl py-1 px-4 text-[#383838] bg-white font-medium'>
                                Currículo
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}