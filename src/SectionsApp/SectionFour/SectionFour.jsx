import { Skills } from "../../Data/Skill";
import quadrado from '../../assets/quadrado.png'

export default function SectionFour() {
    return(
        <section className="bg-[#F0F0F0] py-10">
            <div className='relative md:pt-0 w-full flex justify-center items-center min-h-screen'>
                <img src={quadrado} draggable="false" unselectable="on"/>
                <h3 className='absolute text-3xl font-bold tracking-tighter'>Hard skills</h3>
            </div>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-4 place-items-center place-content-center gap-10">
                    {Skills.map((item, index) => (
                        <div className="bg-white py-2 px-20 shadow-xl flex flex-col items-center justify-center text-center rounded-xl">
                            <div className="relative top-[-40px] w-[80px] h-[80px] bg-[#F0F0F0] rounded-full flex items-center justify-center">
                                <img className="w-[60px] h-[60px]" src={item.img}/>
                            </div>
                            <span className="fontPop text-sm font-bold">{item.name[0].toUpperCase() + item.name.substring(1)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}