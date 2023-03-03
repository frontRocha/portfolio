import aquarela from '../../assets/aquarela.png'
import './SectionOne.css'
import user from '../../assets/user.png'
import { RiGithubFill, RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri'
import curriculo from './Curriculo/Curriculo-mauricio-pedro-da-rocha.pdf'

export default function SectionOne() {
    return (
        <section id='section1' className="h-auto bg-[#F0F0F0] py-10 min-h-screen bg-fixed overflow-hidden">
            <div className="fontMont flex flex-col md:flex-row items-center justify-between min-h-screen max-w-[1400px] mx-auto gap-10 md:gap-0 ">
                <div className='relative flex flex-col items-center justify-end w-full '>
                    <img className='min-w-[800px] md:min-w-[400px]' src={aquarela} />
                    <div className='absolute top-[40%] md:top-[35%] lg:top-[40%] z-20'>
                        <p className="text-[#8680d4] text-2xl md:text-3xl font-medium">Sejá bem vindo(a) <br /> ao meu</p>
                        <div>
                            <span className='text-5xl md:text-6xl lg:text-8xl font-bold'>PORT</span>
                            <span className='text-5xl md:text-6xl lg:text-8xl font-bold text-[#C3B3D5] bg-white rounded-full px-2'>FÓLIO</span>
                        </div>
                    </div>
                    <div className='absolute top-[70%] md:top-[76%] lg:top-[75%] z-20 flex gap-4'>
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
                    <a className='absolute top-[75%] md:top-[90%] lg:top-auto z-20 rounded bg-[#383838] hover:bg-white text-white hover:text-[#383838] py-3 px-8 shadow-xl mt-8 duration-500 outline-none' href={curriculo} target="_blank">
                        Ver currículo
                    </a>
                </div>
                <img className='avatar min-w-[300px] w-[40%]' src={user} alt="user" />
            </div>
        </section>
    )
}