import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import Container from '../components/Container'
import faqImage from '../assets/images/faq.jpg'

const faqs = [
  {
    question: 'In elementum est a ante sodales iaculis.',
    answer:
      'Morbi porttitor ligula in nunc venenatis sagittis. Donec dapibus ipsum ac turpis ullamcorper eros. Cras quis ultricies erat. Morbi ac lectus arcu. Maecenas aliquet vel tellus ac accumsan. Donec a eros non metus vulputate aliquam. Vestibulum commodo commodo ante, ut commodo felis congue vitae.',
  },
  {
    question: 'Etiam lobortis massa eu nibh tempor elementum.',
    answer:
      'Suspendisse potenti. Vivamus blandit, lacus a rhoncus tristique, urna nibh faucibus nulla, at dignissim lectus erat non sem. Integer congue, felis at cursus viverra, purus neque pretium nisl, ut varius arcu sem vitae erat.',
  },
  {
    question: 'In elementum est a ante sodales iaculis.',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Aenean quis quam nec lacus semper dignissim.',
    answer:
      'Curabitur tempus, nibh vitae tincidunt aliquet, eros nisi sagittis urna, nec tincidunt lorem arcu vel augue. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    question: 'Nulla tincidunt eros id tempus accumsan.',
    answer:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className='bg-white py-10 sm:py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-14'>
          {/* ---------- heading + accordion ---------- */}
          <div className='w-full lg:flex-1'>
            <h1 className='dheading max-w-[340px] pb-6 sm:pb-8 leading-snug'>
              Welcome, Let&apos;s Talk About Our Ecobazar
            </h1>

            <div className='flex flex-col gap-3'>
              {faqs.map((item, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={`${index}-${item.question}`}
                    className={`rounded-md border overflow-hidden transition-colors duration-200 ${
                      isOpen ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <button
                      type='button'
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className='w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 py-4 cursor-pointer'
                    >
                      <span className='dfont text-gray-800'>{item.question}</span>
                      <span
                        aria-hidden='true'
                        className={`shrink-0 flex justify-center items-center w-6 h-6 rounded bg-gray-100 transition-transform duration-200 ${
                          isOpen ? 'rotate-45 text-primary' : 'text-gray-500'
                        }`}
                      >
                        <Plus size={18} />
                      </span>
                    </button>

                    <div
                      id={`faq-panel-${index}`}
                      className={`grid transition-all duration-300 ease-in-out bg-gray-50 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className='overflow-hidden'>
                        <p className='dfont text-gray-500 px-4 sm:px-5 pb-5 leading-relaxed'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ---------- image ---------- */}
          <div className='w-full lg:w-[46%] lg:shrink-0'>
            <img
              src={faqImage}
              alt='A smiling Ecobazar farmer holding a basket of fresh vegetables'
              className='w-full h-auto max-h-[560px] object-contain'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Faq