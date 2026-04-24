import Container from '../Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import useDropdown from "../../hooks/useDropdown"
import './TopBar.css'


const TopBar = () => {
    const lang = useDropdown()
    const currency = useDropdown()

    return (
        <div className='border-b border-gry text-[#666666] font-pop text-sm py-3.5'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </div>
                    <div className='flex items-center gap-5 relative'>
                        <div ref={lang.ref}>
                            <div className='toggleBtn' onClick={lang.toggle}>Eng <FaAngleDown /></div>
                            {
                                lang.open &&
                                (<div className='absolute top-6  bg-gry  ' >
                                    <ul className='select-none cursor-pointer'>
                                        <li className='dropLi'>En</li>
                                        <li className='dropLi'>HI</li>
                                        <li className='dropLi'>ZH</li>
                                    </ul>
                                </div>)
                            }
                        </div>
                        <div ref={currency.ref}>
                            <div className='toggleBtn' onClick={currency.toggle}>BDT <FaAngleDown /></div>
                            {
                                currency.open &&
                                (<div className='absolute left-16 top-6 bg-gry cursor-pointer px-1 '>
                                    <ul className='select-none cursor-pointer '>
                                        <li className='dropLi'>USD</li>
                                        <li className='dropLi'>EUR</li>
                                        <li className='dropLi'>INR</li>
                                    </ul>
                                </div>)
                            }
                        </div>
                        <div className='select-none'>Sign In / Sign Up</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar