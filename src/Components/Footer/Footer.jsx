import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-[#AFB1D5] py-20 px-10">
            <div className='z-20 flex items-center justify-center gap-4'>
            <a href='https://github.com/frontRocha' target="_blank">
                            <div className="bg-white text-3xl py-2 px-2 rounded-full shadow-xl text-[#90AED6]"><RiGithubFill /></div>
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=5543998293565&text=Ol%C3%A1!' target="_blank">
                            <div className="bg-white text-3xl py-2 px-2 rounded-full shadow-xl text-[#90AED6]"><RiWhatsappFill /></div>
                        </a>
                        <a href='https://www.linkedin.com/in/frontrocha' target="_blank">
                            <div className="bg-white text-3xl py-2 px-2 rounded-full shadow-xl text-[#90AED6]"><RiLinkedinFill /></div>
                        </a>
            </div>
            <p className="fontMot tracking-tighter text-white text-center max-w-[700px] mx-auto pt-10 text-xl">O sucesso não é o resultado de um acaso, mas sim o resultado da determinação, da dedicação e do trabalho duro. -- Expressão popular</p>
        </footer>
    )
}