import perfil from '../../assets/perfil.png'

export default function SectionTwo() {
    return (
        <section id='section2' className="bg-white py-10 fontMont">
            <div>
                <h2 className='text-3xl text-center md:text-left md:text-5xl font-bold md:pl-32 pb-20 pt-10 tracking-tighter'>Desenvolvedor Front-end</h2>
                <div className='mt-10 flex flex-col md:flex-row items-start'>
                    <img src={perfil} alt="Fotografia minha" className='pr-20' />
                    <p className='max-w-[900px] mx-auto pt-10 px-10 text-[#6C6C6C] font-bold text-sm lg:text-base'>Desde o início de 2022, sou um desenvolvedor Front-End com
                        uma paixão pelo Design e pelo desenvolvimento de experiências
                        de usuários excepcionais. Iniciei minha carreira estudado as
                        melhores práticas em Desenvolvimento Web e tenho trabalhado
                        em projetos de pequena a média escala. Estou ansioso para
                        começar minha carreira como desenvolvedor Front-End e
                        contribuir para projetos de alto impacto a partir deste momento.
                    </p>
                </div>
            </div>

        </section>
    )
}