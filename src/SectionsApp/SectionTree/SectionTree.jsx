import desktop from '../../assets/vetorDesktop.png'
import quadrado from '../../assets/quadrado.png'
import { Pages } from '../../Data/Pages'
import { useState } from 'react';
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'

export default function SectionTree() {

    const [expandedCardId, setExpandedCardId] = useState(null);

    return (
        <section id='section3' className="bg-[#F0F0F0] min-h-screen w-full fontMont">
            <img src={desktop} className="w-full" draggable="false" unselectable="on" />
            <div className='relative pt-40 pb-20 md:pt-0 w-full flex justify-center items-center'>
                <img className='rotate' src={quadrado} draggable="false" unselectable="on" />
                <h3 className='absolute text-3xl font-bold tracking-tighter'>Projetos do momento</h3>
            </div>
            <div className='max-w-[1400px] px-10 mx-auto pb-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-6'>
                    {Pages.map((item, key) => (
                        <div key={key} className={`${expandedCardId === item.id ? 'h-[650px] ' : 'h-[445px]'} duration-700 bg-white w-[320px] lg:w-[416px]  py-4 px-4 rounded-xl shadow-xl`}>
                            <a target="_blank" href={item.link}><img className='hover:opacity-80 duration-500' src={item.tumb} /></a>
                            <h4 className='text-xl font-bol fontPop'>{item.tittle}</h4>
                            <p className='text-[#B6B6B6] pb-10 text-sm fontPop'>{item.description}</p>
                            <div className={`${expandedCardId === item.id ? 'opacity-100 duration-1000' : 'opacity-0 duration-500'} durato`}>
                                <h5>Técnologias usadas:</h5>
                                <div className='flex items-center justify-around flex-wrap'>
                                    {item.tec.map((tec, index) => (
                                        <div key={index} className="text-center flex flex-col items-center justify-center py-6">
                                            <img className='w-[50px] h-[50px]' src={tec} />
                                            <p className='text-[#B6B6B6]'>{item.tecNames[index]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <button className={`${expandedCardId !== item.id ? 'relative top-[-120px]' : 'relative top-[80px]'} duration-700`} onClick={expandedCardId !== item.id ? () => setExpandedCardId(item.id) : () => setExpandedCardId('')}>{expandedCardId === item.id ?
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
        </section>
    )
}