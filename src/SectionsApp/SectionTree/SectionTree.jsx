import desktop from '../../assets/vetorDesktop.png'
import quadrado from '../../assets/quadrado.png'

export default function SectionTree() {
    return(
        <section className="bg-[#F0F0F0] min-h-screen w-full fontMont">
            <img src={desktop} className="w-full" draggable="false" unselectable="on"/>
            <div className='relative pt-40 md:pt-0 w-full flex justify-center items-center'>
                <img className='rotate' src={quadrado} draggable="false" unselectable="on"/>
                <h3 className='absolute text-3xl font-bold tracking-tighter'>Projetos do momento</h3>
            </div>
        </section>
    )
}