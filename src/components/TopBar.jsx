import Container from './Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import useDropdown from "../hooks/useDropdown"
import { useState } from 'react';


const TopBar = () => {
    const lang = useDropdown()
    const currency = useDropdown()
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
        <div className='border-b border-gry text-[#666666] font-pop text-sm py-3.5'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </div>
                    <div className='flex items-center gap-x-5 relative '>
                        <div ref={lang.ref} className='relative min-w-[50px] z-50'>
                            <div className='flex items-center gap-2.5  cursor-pointer select-none hover:bg-gray-200 active:bg-gray-100 ' onClick={lang.toggle}>{selectedLang} <FaAngleDown /></div>
                            {
                                lang.open &&
                                (<div className='absolute top-full left-0 mt-1  bg-gry  ' >
                                    <ul className='select-none w-full cursor-pointer '>
                                        {
                                            langOptions.map((item, index )=> (
                                            <li key={index} className={`pe-5 ps-3 py-1 hover:bg-gray-200 active:bg-gray-100 ${selectedLang == item ? 'bg-gray-200' : 'bg-gray-100'}`} onClick={()=>{ setSelectedLag(item) ; lang.close() }} >{item}</li>
                                            )) 
                                        }
                                    </ul>
                                </div>)
                            }
                        </div>
                        <div ref={currency.ref} className='relative min-w-[50px] z-50'>
                            <div className=' hover:bg-gray-200 active:bg-gray-100 flex items-center gap-1 cursor-pointer select-none' onClick={currency.toggle}>{selectedCrncy} <FaAngleDown /></div>
                            {
                                currency.open &&
                                (<div className='absolute top-full left-0 bg-gry cursor-pointer px-1 '>
                                    <ul className='select-none w-full cursor-pointer '>
                                        {
                                            currencyOptions.map((item, index) =>(
                                                <li key={index} className= {`pe-5 ps-3 py-1 hover:bg-gray-200 active:bg-gray-100 ${selectedCrncy == item ? 'bg-gray-200' : 'bg-gray-100' }`} onClick={()=> {setSelectedCrncy(item) ; currency.close()}}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>)
                            }
                        </div>
                        <div className='select-none relative ml-2 after:content[""] after:w-[1px] after:h-5 after:bg-gray-300 after:absolute after:left-[-18px] after:top-0'>Sign In / Sign Up</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar