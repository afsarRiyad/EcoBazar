import React, { useRef } from 'react'
import { X } from 'lucide-react';
import useOutsideClick from '../hooks/outsideClick';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems, selectCartCount, selectCartTotal } from '../slices/cartSlice';

const CartPopup = ({ open, setOpen }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  useOutsideClick(ref, () => setOpen(false), open);

  return (
    <>
      {open && <div className='fixed inset-0 bg-black/60 z-50' />}
      <div ref={ref} className={`fixed top-0 right-0 bottom-0 sm:w-116 w-75 bg-white z-50 shadow-xl font-pop transform transition-transform transition-opacity duration-200 ${open ? 'opacity-100 translate-x-0' : 'translate-x-full opacity-0'}`}>
        <div className='flex flex-col overflow-hidden h-full'>
          <div className='relative text-gray-900 font-semibold text-xl sm:p-10 p-6'>
            Shopping Cart <span className='text-gray-400'>({count})</span>
            <X className='absolute sm:right-8 right-4 sm:top-10 top-6 cursor-pointer' onClick={() => setOpen(false)} />
          </div>
          <div className='flex-1 overflow-y-auto space-y-4 sm:px-10 p-2'>
            {items.length === 0 && (
              <p className="text-gray-400 text-center py-10 text-[14px]">Your cart is empty</p>
            )}
            {items.map((item) => (
              <div key={item.id} className='flex relative items-center mb-4 border-t border-gray-100 py-4'>
                <img src={item.image} alt={item.name} className='w-25 h-auto object-contain' />
                <div className='px-2 flex-1 min-w-0'>
                  <span className='text-gray-900 truncate block'>{item.name}</span>
                  <div>
                    <span className='text-gray-300'>{item.qty} × </span>
                    <span className='font-bold text-black'>{item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer shrink-0" aria-label="Remove item">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className='bg-gray-50 w-full'>
            <div className='flex justify-between items-center sm:py-6 py-3 sm:px-10 px-5'>
              <span className='text-[18px] text-gray-500'>{count} Product{count !== 1 && 's'}</span>
              <span className='text-[18px] font-semibold text-black'>${total.toFixed(2)}</span>
            </div>
            <div className='space-y-3 flex flex-col sm:p-8 p-4'>
              <button className='cursor-pointer bg-primary text-white rounded-full font-semibold text-[18px] sm:py-4 py-2 active:scale-95 transition transform hover:bg-green-600 duration-200 ease-in-out'>Checkout</button>
              <Link to='/cart' onClick={() => setOpen(false)} className='cursor-pointer bg-[#56AC59]/10 text-center hover:bg-[#56AC59]/20 rounded-full font-semibold text-[18px] text-primary sm:py-4 py-2 active:scale-95 transition transform duration-200 ease-in-out'>Go To Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPopup