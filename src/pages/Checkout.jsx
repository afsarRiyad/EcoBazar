import React, { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CheckCircle, ShoppingBag } from 'lucide-react'
import Container from '../components/Container'
import { clearCart, selectCartItems, selectCartTotal } from '../slices/cartSlice'

const initialForm = {
  firstName: '',
  lastName: '',
  company: '',
  street: '',
  country: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
  notes: '',
  shipToDifferent: false,
  payment: 'cod',
}

const requiredFields = ['firstName', 'lastName', 'street', 'country', 'state', 'zip', 'email', 'phone']

const countryOptions = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Bangladesh', 'India', 'Germany']
const stateOptions = ['Illinois', 'California', 'New York', 'Texas', 'Florida', 'Washington']
const paymentMethods = [
  { id: 'cod', label: 'Cash on Delivery' },
  { id: 'paypal', label: 'Paypal' },
  { id: 'amazon', label: 'Amazon Pay' },
]

const labelClass = 'dfont text-gray-800 block pb-2'

const Checkout = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState([])
  const [placed, setPlaced] = useState(null)

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((prev) => prev.filter((k) => k !== key))
  }

  const fieldClass = (key) =>
    `dfont w-full rounded-md px-4 py-3 text-gray-800 placeholder:text-gray-300 outline-none transition-colors duration-150 border focus:ring-2 focus:ring-primary/20 ${
      errors.includes(key) ? 'border-destructive' : 'border-gray-200 focus:border-primary'
    }`

  const handleSubmit = (e) => {
    e.preventDefault()
    const missing = requiredFields.filter((key) => !form[key].trim())
    setErrors(missing)
    if (missing.length) return

    setPlaced({
      orderId: `#ECO-${String(Date.now()).slice(-6)}`,
      firstName: form.firstName,
      payment: paymentMethods.find((m) => m.id === form.payment)?.label,
      total,
    })
    dispatch(clearCart())
  }

  /* ---------- order placed ---------- */
  if (placed) {
    return (
      <section className='py-10 sm:py-16'>
        <Container>
          <div className='mx-auto flex max-w-[560px] flex-col items-center border border-gray-100 rounded-md px-6 py-12 text-center'>
            <CheckCircle className='w-14 h-14 text-primary' />
            <h1 className='dfont text-gray-900 font-semibold text-xl pt-5 pb-2'>
              Thank you, {placed.firstName}!
            </h1>
            <p className='default pb-1'>Your order has been placed successfully.</p>
            <p className='default pb-8'>
              Order <span className='text-gray-900 font-medium'>{placed.orderId}</span> &middot; {placed.payment} &middot; $
              {placed.total.toFixed(2)}
            </p>
            <Link
              to='/shop'
              className='bg-primary text-white dfont font-semibold px-8 py-3 rounded-full hover:brightness-95 transition-all duration-150'
            >
              Continue Shopping
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  /* ---------- nothing to check out ---------- */
  if (!items.length) {
    return (
      <section className='py-10 sm:py-16'>
        <Container>
          <div className='flex flex-col items-center text-center py-10'>
            <ShoppingBag className='w-14 h-14 text-gray-300' />
            <h1 className='dheading pt-6 pb-3'>Your Cart Is Empty</h1>
            <p className='default max-w-[420px] pb-8'>
              Add a few products to your cart before heading to checkout.
            </p>
            <Link
              to='/shop'
              className='bg-primary text-white dfont font-semibold px-8 py-3 rounded-full hover:brightness-95 transition-all duration-150'
            >
              Start Shopping
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  /* ---------- checkout ---------- */
  return (
    <section className='py-10 sm:py-16'>
      <Container>
        <form className='flex flex-col lg:flex-row gap-6 items-start' onSubmit={handleSubmit} noValidate>
          {/* ---------- left: billing + additional info ---------- */}
          <div className='w-full lg:flex-1 flex flex-col gap-6'>
            <div className='border border-gray-100 rounded-md p-5 sm:p-8'>
              <h2 className='dfont text-gray-900 font-semibold text-lg pb-6'>
                Billing Information
              </h2>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div>
                  <label className={labelClass} htmlFor='firstName'>First name</label>
                  <input
                    id='firstName'
                    className={fieldClass('firstName')}
                    placeholder='Your first name'
                    value={form.firstName}
                    onChange={update('firstName')}
                    aria-invalid={errors.includes('firstName')}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor='lastName'>Last name</label>
                  <input
                    id='lastName'
                    className={fieldClass('lastName')}
                    placeholder='Your last name'
                    value={form.lastName}
                    onChange={update('lastName')}
                    aria-invalid={errors.includes('lastName')}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor='company'>Company Name (optional)</label>
                  <input
                    id='company'
                    className={fieldClass('company')}
                    placeholder='Company name'
                    value={form.company}
                    onChange={update('company')}
                  />
                </div>
              </div>

              <div className='pt-4'>
                <label className={labelClass} htmlFor='street'>Street Address</label>
                <input
                  id='street'
                  className={fieldClass('street')}
                  placeholder='House number and street name'
                  value={form.street}
                  onChange={update('street')}
                  aria-invalid={errors.includes('street')}
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
                <div>
                  <label className={labelClass} htmlFor='country'>Country / Region</label>
                  <select
                    id='country'
                    className={`${fieldClass('country')} ${form.country ? '' : 'text-gray-300'}`}
                    value={form.country}
                    onChange={update('country')}
                    aria-invalid={errors.includes('country')}
                  >
                    <option value=''>Select</option>
                    {countryOptions.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='state'>States</label>
                  <select
                    id='state'
                    className={`${fieldClass('state')} ${form.state ? '' : 'text-gray-300'}`}
                    value={form.state}
                    onChange={update('state')}
                    aria-invalid={errors.includes('state')}
                  >
                    <option value=''>Selects</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor='zip'>Zip Code</label>
                  <input
                    id='zip'
                    className={fieldClass('zip')}
                    placeholder='Zip Code'
                    value={form.zip}
                    onChange={update('zip')}
                    aria-invalid={errors.includes('zip')}
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                <div>
                  <label className={labelClass} htmlFor='email'>Email</label>
                  <input
                    id='email'
                    type='email'
                    className={fieldClass('email')}
                    placeholder='Email Address'
                    value={form.email}
                    onChange={update('email')}
                    aria-invalid={errors.includes('email')}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor='phone'>Phone</label>
                  <input
                    id='phone'
                    className={fieldClass('phone')}
                    placeholder='Phone number'
                    value={form.phone}
                    onChange={update('phone')}
                    aria-invalid={errors.includes('phone')}
                  />
                </div>
              </div>

              <label className='flex items-center gap-2 pt-5 dfont text-gray-700 cursor-pointer select-none'>
                <input
                  type='checkbox'
                  className='w-4 h-4 accent-primary cursor-pointer'
                  checked={form.shipToDifferent}
                  onChange={update('shipToDifferent')}
                />
                Ship to a different address
              </label>
            </div>

            <div className='border border-gray-100 rounded-md p-5 sm:p-8'>
              <h2 className='dfont text-gray-900 font-semibold text-lg pb-6'>
                Additional Info
              </h2>
              <label className={labelClass} htmlFor='notes'>Order Notes (Optional)</label>
              <textarea
                id='notes'
                rows={4}
                className={`${fieldClass('notes')} resize-y`}
                placeholder='Notes about your order, e.g. special notes for delivery.'
                value={form.notes}
                onChange={update('notes')}
              />
            </div>
          </div>

          {/* ---------- right: order summary ---------- */}
          <div className='w-full lg:w-[424px] lg:shrink-0 border border-gray-100 rounded-md p-5 sm:p-8'>
            <h2 className='dfont text-gray-900 font-semibold text-lg pb-6'>
              Order Summary
            </h2>

            <div className='flex flex-col gap-4 pb-5'>
              {items.map((item) => (
                <div key={item.id} className='flex items-center gap-3'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-10 h-10 object-contain shrink-0'
                  />
                  <span className='dfont text-gray-800 flex-1 min-w-0 truncate'>
                    {item.name} <span className='text-gray-400'>x{item.qty}</span>
                  </span>
                  <span className='dfont text-gray-900 font-medium shrink-0'>
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className='flex items-center justify-between py-3 border-t border-gray-100'>
              <span className='default'>Subtotal:</span>
              <span className='dfont text-gray-900 font-medium'>${total.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-between py-3 border-t border-gray-100'>
              <span className='default'>Shipping:</span>
              <span className='dfont text-gray-900 font-medium'>Free</span>
            </div>
            <div className='flex items-center justify-between py-3 border-t border-gray-100'>
              <span className='default'>Total:</span>
              <span className='dfont text-gray-900 font-semibold'>${total.toFixed(2)}</span>
            </div>

            <h3 className='dfont text-gray-900 font-semibold text-base pt-6 pb-4 border-t border-gray-100 mt-3'>
              Payment Method
            </h3>

            <div className='flex flex-col gap-3'>
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className='flex items-center gap-2 dfont text-gray-700 cursor-pointer select-none'
                >
                  <input
                    type='radio'
                    name='payment'
                    value={method.id}
                    className='w-4 h-4 accent-primary cursor-pointer'
                    checked={form.payment === method.id}
                    onChange={update('payment')}
                  />
                  {method.label}
                </label>
              ))}
            </div>

            {errors.length > 0 && (
              <p className='dfont text-destructive pt-5' role='alert'>
                Please fill in all required fields.
              </p>
            )}

            <button
              type='submit'
              className='w-full bg-primary text-white dfont font-semibold py-3 rounded-full mt-6 hover:brightness-95 active:scale-[0.99] transition-all duration-150 cursor-pointer'
            >
              Place Order
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default Checkout
