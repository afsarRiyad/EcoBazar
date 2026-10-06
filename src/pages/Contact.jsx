import React, { useState } from 'react'
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'
import Container from '../components/Container'

const initialForm = { name: '', email: '', subject: '', message: '' }

const iconClass = 'w-5 h-5 text-gray-500 shrink-0 mt-0.5'

const contactDetails = [
  {
    id: 'location',
    icon: <MapPin className={iconClass} />,
    lines: ['Dhanmondi, Dhaka 1205', 'Bangladesh'],
  },
  {
    id: 'email',
    icon: <Mail className={iconClass} />,
    links: [
      { text: 'Proxy@gmail.com', href: 'mailto:Proxy@gmail.com' },
      { text: 'Help.proxy@gmail.com', href: 'mailto:Help.proxy@gmail.com' },
    ],
  },
  {
    id: 'phone',
    icon: <Phone className={iconClass} />,
    links: [
      { text: '(219) 555-0114', href: 'tel:+12195550114' },
      { text: '(164) 333-0487', href: 'tel:+16433330487' },
    ],
  },
]

const labelClass = 'dfont text-gray-800 block pb-2'
const fieldClass =
  'dfont w-full border border-gray-200 rounded-md px-4 py-3 text-gray-800 placeholder:text-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-150'

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState([])
  const [sent, setSent] = useState(null)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => prev.filter((k) => k !== key))
  }

  const badField = (key) =>
    `${fieldClass} ${errors.includes(key) ? 'border-destructive' : ''}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const missing = ['name', 'email', 'subject', 'message'].filter((k) => !form[k].trim())
    const invalidEmail = form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())
    const problems = invalidEmail && !missing.includes('email') ? [...missing, 'email'] : missing
    setErrors(problems)
    if (problems.length) return

    setSent({ name: form.name })
    setForm(initialForm)
  }

  return (
    <>
      <section className='py-10 sm:py-16'>
        <Container>
          <div className='flex flex-col lg:flex-row gap-6 items-start'>
            {/* ---------- contact details ---------- */}
            <div className='w-full lg:w-[340px] lg:shrink-0 border border-gray-100 rounded-md p-6 sm:p-8'>
              {contactDetails.map(({ id, icon, lines, links }, index) => (
                <div key={id}>
                  {index > 0 && (
                    <div className='border-t border-dashed border-gray-200 my-6' />
                  )}
                  <div className='flex items-start gap-4'>
                    {icon}
                    <div className='flex flex-col gap-1 min-w-0'>
                      {lines?.map((line) => (
                        <p key={line} className='dfont text-gray-700'>
                          {line}
                        </p>
                      ))}
                      {links?.map((link) => (
                        <a
                          key={link.text}
                          href={link.href}
                          className='dfont text-gray-700 break-words hover:text-primary transition-colors duration-150'
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- message form ---------- */}
            <div className='w-full lg:flex-1 border border-gray-100 rounded-md p-6 sm:p-8'>
              {sent ? (
                <div className='flex flex-col items-center text-center py-8'>
                  <CheckCircle className='w-12 h-12 text-primary' />
                  <h2 className='dfont text-gray-900 font-semibold text-xl pt-5 pb-2'>
                    Thank you, {sent.name}!
                  </h2>
                  <p className='default pb-8'>
                    Your message has been sent. We will get back to you shortly.
                  </p>
                  <button
                    type='button'
                    onClick={() => setSent(null)}
                    className='bg-primary text-white dfont font-semibold px-7 py-3 rounded-full hover:brightness-95 transition-all duration-150 cursor-pointer'
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h1 className='dfont text-gray-900 font-semibold text-xl pb-3'>
                    Just Say Hello!
                  </h1>
                  <p className='default pb-6'>
                    Feel free to contact with us, we&apos;ll be glad to answer your questions
                    about our products and services.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      <div>
                        <label className={labelClass} htmlFor='name'>Name</label>
                        <input
                          id='name'
                          className={badField('name')}
                          placeholder='Your name'
                          value={form.name}
                          onChange={update('name')}
                          aria-invalid={errors.includes('name')}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor='contactEmail'>Email</label>
                        <input
                          id='contactEmail'
                          type='email'
                          className={badField('email')}
                          placeholder='Email address'
                          value={form.email}
                          onChange={update('email')}
                          aria-invalid={errors.includes('email')}
                        />
                      </div>
                    </div>

                    <div className='pt-4'>
                      <label className={labelClass} htmlFor='subject'>Subject</label>
                      <input
                        id='subject'
                        className={badField('subject')}
                        placeholder='How can we help?'
                        value={form.subject}
                        onChange={update('subject')}
                        aria-invalid={errors.includes('subject')}
                      />
                    </div>

                    <div className='pt-4'>
                      <label className={labelClass} htmlFor='message'>Message</label>
                      <textarea
                        id='message'
                        rows={5}
                        className={`${badField('message')} resize-y`}
                        placeholder='Write your message here'
                        value={form.message}
                        onChange={update('message')}
                        aria-invalid={errors.includes('message')}
                      />
                    </div>

                    {errors.length > 0 && (
                      <p className='dfont text-destructive pt-5' role='alert'>
                        Please fill in all the fields with a valid email address.
                      </p>
                    )}

                    <button
                      type='submit'
                      className='bg-primary text-white dfont font-semibold px-8 py-3 rounded-full mt-6 hover:brightness-95 active:scale-[0.99] transition-all duration-150 cursor-pointer'
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- location map (full width) ---------- */}
      <iframe
        title='Ecobazar store location — Dhaka, Bangladesh'
        src='https://maps.google.com/maps?q=Dhaka%2C%20Bangladesh&z=12&output=embed'
        className='w-full h-[360px] sm:h-[420px] border-0 block'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </>
  )
}

export default Contact
