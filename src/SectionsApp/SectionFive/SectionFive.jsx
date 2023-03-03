import { useState } from 'react';
import { Events } from '../../Data/Events'
import quadrado from '../../assets/quadrado.png'
import divide from '../../assets/waves.svg'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';

export default function SectionFive() {

    const [expandedCardId, setExpandedCardId] = useState(null);

    return (
        <section id="section5" className="bg-[#F0F0F0] pt-32">
            <div className='relative md:pt-0 w-full flex justify-center items-center mb-24'>
                <img className="rotate" src={quadrado} draggable="false" unselectable="on" />
                <h3 className='absolute text-3xl font-bold tracking-tighter'>Eventos</h3>
            </div>
            <div className='max-w-[1000px] px-10 mx-auto pb-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-6'>
                {Events.map((item) => (
                    <div key={item.id} className={`${expandedCardId === item.id ? 'h-[750px]' : 'h-[485px]'} duration-700 bg-white w-[320px] lg:w-[416px]  py-4 px-4 rounded-xl shadow-xl`}>

                    <a target="_blank" href={item.link}><img className='hover:opacity-80 duration-500 rounded-md' src={item.tumb} /></a>

                    <div className="flex items-center gap-1">
                        <h4 className='text-xl font-bol fontPop'>{item.name}</h4>
                        -
                        <p className="text-xs text-[#B6B6B6] fontPop">{item.inst}</p>
                    </div>
                    <p className='text-[#B6B6B6] pb-10 pt-2 text-sm fontPop'>{item.desc}</p>
                    <div className={`${expandedCardId === item.id ? 'opacity-100 duration-1000' : 'opacity-0 duration-500'} durato`}>
                        <h5>Tecnologias usadas:</h5>
                        <div className='grid grid-cols-3'>
                            {item.tecTumbs.map((tec, index) => (
                                <div key={index} className="text-center flex flex-col items-center justify-center py-6">
                                    <img className='w-[50px] h-[50px]' src={tec} />
                                    <p className='text-[#B6B6B6] fontPop text-sm'>{item.tecNames[index][0].toUpperCase() + item.tecNames[index].substring(1)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <button className={`${expandedCardId !== item.id ? 'relative top-[-270px]' : 'relative top-[0px]'} outline-none duration-700`} onClick={expandedCardId !== item.id ? () => setExpandedCardId(item.id) : () => setExpandedCardId('')}>{expandedCardId === item.id ?
                            <div className='flex flex-col items-center justify-center text-[#B6B6B6]'>
                                <span>Retrair</span>
                                <FiArrowUpCircle />
                            </div> :
                            <div className='flex flex-col items-center justify-center text-[#B6B6B6]'>
                                <span>Expandir</span>
                                <FiArrowDownCircle />
                            </div>
                        }</button>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <img className="rotate-180 py-0 relative top-1 w-full" src={divide} />
        </section>
    )
}