import aquarela from '../../assets/aquarela.png'
import './SectionOne.css'
import user from '../../assets/user.png'
import { RiGithubFill, RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri'

export default function SectionOne() {
    return (
        <section className="h-auto bg-[#F0F0F0] py-10 min-h-screen">
            <div className="fontMont flex flex-col md:flex-row items-center justify-between min-h-[600px] max-w-[1400px] mx-auto gap-10 md:gap-0 overflow-x-hidden">
                <div className='relative flex flex-col items-center justify-end w-full overflow-x-hidden'>
                    <img className='min-w-[800px] md:min-w-[400px]' src={aquarela}/>
                    <div className='absolute top-[40%] md:top-[35%] lg:top-[40%] z-20'>
                        <p className="text-white text-3xl font-medium">Sejá bem vindo(a) <br /> ao meu</p>
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">PORTFÓLIO</h2>
                    </div>
                    <div className='absolute top-[65%] md:top-[72%] lg:top-[75%] z-20 flex gap-4'>
                        <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiGithubFill /></div>
                        <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiWhatsappFill /></div>
                        <div className="bg-[#D9D9D9] text-3xl py-2 px-2 rounded-full shadow-xl"><RiLinkedinFill /></div>
                    </div>
                    <button className='absolute top-[75%] md:top-auto z-20 rounded bg-[#383838] text-white py-3 px-8 shadow-xl mt-8'>Baixar currículo</button>
                </div>
                <img className='min-w-[300px] w-[40%]' src={user} alt="user" />
            </div>
        </section>
    )
}