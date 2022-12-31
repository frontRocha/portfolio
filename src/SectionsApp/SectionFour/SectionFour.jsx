import { Skills } from "../../Data/Skill";
import quadrado from '../../assets/quadrado.png'

export default function SectionFour() {
    return(
        <section className="bg-[#F0F0F0] py-10">
            <div className='relative md:pt-0 w-full flex justify-center items-center mb-24'>
                <img className="rotate" src={quadrado} draggable="false" unselectable="on"/>
                <h3 className='absolute text-3xl font-bold tracking-tighter'>Hard skills</h3>
            </div>
            <div className="max-w-[1400px] mx-auto px-10">
                <div className="grid grid-cols-1 phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center place-content-center gap-10">
                    {Skills.map((item, index) => (
                        <div className="bg-white px-10 shadow-xl flex flex-col items-center justify-center text-center rounded-2xl w-[150px] lg:w-[200px] mb-4" key={index}>
                            <div className="relative top-[-40px] w-[75px] h-[75px] lg:w-[80px] lg:h-[80px] bg-[#F0F0F0] rounded-full flex items-center justify-center">
                                <a href={item.link} target="_blank"><img className="w-[60px] h-[60px]" src={item.img}/></a>
                            </div>
                            <span className="fontPop text-sm font-bold relative top-[-10px] text-[#6C6C6C]">{item.name[0].toUpperCase() + item.name.substring(1)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}