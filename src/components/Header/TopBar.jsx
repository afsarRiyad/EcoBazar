import Container from '../Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import useOutsideClick from "../../hooks/outsideClick"
import { useRef, useState } from 'react';


const TopBar = () => {
    const [langOpen, setLangOpen] = useState(false)
    const [currencyOpen, setCurrencyOpen] = useState(false)
    const langRef = useRef(null)
    const currencyRef = useRef(null)
    useOutsideClick({
        ref: langRef, 
        callback: () => setLangOpen(false),
        enable: langOpen })
    useOutsideClick({
        ref: currencyRef,
        callback: () => setCurrencyOpen(false),
        enable: currencyOpen 
    })
    const [selectedLang, setSelectedLag] = useState('ENG')
    const [selectedCrncy, setSelectedCrncy] = useState('BDT')

    const langOptions = [
                       'ENG',
                       'BN',
                       'HI', 
                       'ZH'
                    ]
    const currencyOptions = [
                        'BDT',
                         'USD', 
                         'EUR', 
                         'INR'
                        ]

    return (
        <div className='border-b border-gry text-[#666666] font-pop text-sm  sm:py-3.5 py-2'>
            <Container>
                <div className='flex items-center justify-between gap-3 z-10'>
                       {/* location starts here  */}
                    <div className='flex items-center sm:gap-2  min-w-0'>
                        <CiLocationOn className='shrink-0 hidden sm:block'/> 
                        <p className='truncate hidden sm:block sm:max-w-[260px] md:max-w-none'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                        <CiLocationOn className='shrink-0 block sm:hidden'/> 
                        <p className='inline sm:hidden'>BD</p>
                    </div>
                          {/* location ends here  */}
                    <div className='flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 relative flex-wrap'>
                             {/* language dropdown section starts here  */}
                        <div ref={langRef} className='relative min-w-[50px] z-50'>
                            <div className='flex items-center justify-around  cursor-pointer select-none hover:bg-gray-200 active:bg-gray-100 ' onClick={()=> setLangOpen(!langOpen)}>{selectedLang}
                              <FaAngleDown className={`transition transform duration-300 ${langOpen && 'rotate-180'}`}/>
                            </div>
                            
                                <div className='absolute top-full left-0 mt-1  bg-gry  ' >
                                    <ul className={`select-none absolute top-full  cursor-pointer transform transition-all duration-300 ease-in-out ${langOpen ? 'translate-y-0 opacity-100 z-50' : '-translate-y-3 opacity-0 pointer-events-none'}`}>
                                        {
                                            langOptions.map((item, index )=> (
                                            <li key={index} className={`pe-5 ps-3 py-1 hover:bg-gray-200 active:bg-gray-100 ${selectedLang == item ? 'bg-gray-200' : 'bg-gray-100'}`} onClick={()=>{ setSelectedLag(item) ; setLangOpen(false) }} >{item}</li>
                                            )) 
                                        }
                                    </ul>
                                </div>
                            
                        </div>
                             {/* language dropdown ends here   */}
                                          
                                {/* currency dropdown starts here  */}
                        <div ref={currencyRef} className='relative min-w-[50px] z-50'>
                            <div className=' hover:bg-gray-200 justify-around active:bg-gray-100 flex items-center cursor-pointer  items-center select-none' onClick={()=> setCurrencyOpen(!currencyOpen)}>{selectedCrncy}
                                 <FaAngleDown className={`transition transform duration-300 ${currencyOpen && 'rotate-180'}`}/>
                            </div>
                           
                               <div className='absolute top-full left-0 bg-gry cursor-pointer px-1 '>
                                    <ul className={`select-none absolute top-full cursor-pointer transform transition-all duration-300 ease-in-out ${currencyOpen ? 'translate-y-1 opacity-100 z-50' : '-translate-y-3 opacity-0 pointer-events-none'}`}>
                                        {
                                            currencyOptions.map((item, index) =>(
                                                <li key={index} className= {`pe-5 ps-3 py-1 hover:bg-gray-200 active:bg-gray-100 ${selectedCrncy == item ? 'bg-gray-200' : 'bg-gray-100' }`} onClick={()=> {setSelectedCrncy(item) ; setCurrencyOpen(false)}}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                        </div>
                        {/* currency dropdown ends here  */}
                        <div className='select-none relative ml-2 after:content[""] after:w-[1px] after:h-5 after:bg-gray-300 after:absolute after:left-[-14px] sm:after:left-[-18px] whitespace-nowrap sm-after:top-0 '>Sign In / Sign Up</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar
