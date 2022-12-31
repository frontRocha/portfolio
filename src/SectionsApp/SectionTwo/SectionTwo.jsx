import perfil from '../../assets/perfil.png'

export default function SectionTwo() {
    return (
        <section className="bg-white py-10 fontMont">
            <div>
                <h2 className='text-3xl text-center md:text-left md:text-5xl font-bold md:pl-32 pb-20 pt-10 tracking-tighter'>Desenvolvedor Front-end</h2>
                <div className='mt-10 flex flex-col md:flex-row items-start'>
                    <img src={perfil} alt="Fotografia minha" className='pr-20' />
                    <p className='max-w-[900px] mx-auto pt-10 px-10 text-[#6C6C6C] font-bold text-sm lg:text-base'>Sou desenvolvedor front-end com uma paixão pelo design e pelo desenvolvimento de experiências
                        de usuário excepcionais. Desde o início da minha carreira, tenho estudado as melhores
                        práticas em desenvolvimento web e tenho trabalhado em projetos de pequena e média escala.
                        Estou ansioso para começar minha carreira como desenvolvedor front-end e contribuir
                        para projetos de alto impacto.</p>
                </div>
            </div>
            
        </section>
    )
}