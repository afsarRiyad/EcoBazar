import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { HeartOff, ShoppingCart, Trash2 } from 'lucide-react'
import Container from '../components/Container'
import Tooltip from '../components/ui/Tooltip'
import { removeFromWishlist, selectWishlistItems } from '../slices/wishlistSlice'
import { addToCart } from '../slices/cartSlice'
import { showToast } from '../hooks/useActionToast'

const Wishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectWishlistItems)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    showToast('cart', item.name)
  }

  if (!items.length) {
    return (
      <section className='py-10 sm:py-16'>
        <Container>
          <div className='flex flex-col items-center justify-center text-center py-10'>
            <HeartOff className='w-14 h-14 text-gray-300' />
            <h1 className='dheading pt-6 pb-3'>Your Wishlist Is Empty</h1>
            <p className='default max-w-[420px] pb-8'>
              Save your favourite organic picks here and come back to them any time.
            </p>
            <Link
              to='/shop'
              className='bg-primary text-white font-pop font-semibold px-8 py-3.5 rounded-full hover:bg-emerald-800 active:bg-emerald-900 transition-colors duration-200'
            >
              Start Shopping
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className='py-10 sm:py-16'>
      <Container>
        <h1 className='dheading text-center mb-8 sm:mb-12'>My Wishlist</h1>

        <div className='border border-gray-100 rounded-md'>
          {items.map((item) => (
            <div
              key={item.id}
              className='flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-5 border-b border-gray-100 last:border-b-0'
            >
              <Link to={`/product/${item.id}`} className='shrink-0'>
                <img
                  src={item.image}
                  alt={item.name}
                  loading='lazy'
                  className='w-14 h-14 sm:w-16 sm:h-16 object-contain'
                />
              </Link>

              <Link
                to={`/product/${item.id}`}
                className='dfont text-gray-800 font-medium flex-1 min-w-0 truncate hover:text-primary transition-colors duration-150'
              >
                {item.name}
              </Link>

              <p className='dfont text-gray-800 font-semibold shrink-0'>
                ${item.price.toFixed(2)}
              </p>

              <Tooltip text='Add to Cart' position='left'>
                <button
                  type='button'
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => handleAddToCart(item)}
                  className='w-10 h-10 shrink-0 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer'
                >
                  <ShoppingCart size={18} />
                </button>
              </Tooltip>

              <Tooltip text='Remove from Wishlist' position='left'>
                <button
                  type='button'
                  aria-label={`Remove ${item.name} from wishlist`}
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className='w-10 h-10 shrink-0 flex justify-center items-center rounded-full border border-gray-200 text-gray-400 hover:border-destructive hover:text-destructive transition-colors duration-200 cursor-pointer'
                >
                  <Trash2 size={18} />
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Wishlist