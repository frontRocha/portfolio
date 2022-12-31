import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-[#AFB1D5] py-20 px-10">
            <div className='z-20 flex items-center justify-center gap-4'>
                <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiGithubFill /></div>
                <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiWhatsappFill /></div>
                <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiLinkedinFill /></div>
            </div>
            <p className="fontMot tracking-tighter text-white text-center max-w-[700px] mx-auto pt-10 text-xl">O sucesso não é o resultado de um acaso, mas sim o resultado da determinação, da dedicação e do trabalho duro.</p>
        </footer>
    )
}