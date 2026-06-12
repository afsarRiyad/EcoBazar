import React from 'react'
import { Home, Search, Heart, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router'

const BottomNav = ({ setSearchOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-t-gray-400 sm:hidden">
      <div className="flex justify-between items-center  py-3">

        <Link to="/" className="flex flex-col items-center flex-1">
          <Home className="w-7 h-7" />
          <span className="text-xs">Home</span>
        </Link>

        <button
          onClick={() => setSearchOpen(true)}
          className="flex flex-col items-center flex-1 cursor-pointer"
        >
          <Search className="w-7 h-7" />
          <span className="text-xs">Search</span>
        </button>

        <Link to="#" className="flex flex-col items-center flex-1">
          <Heart className="w-7 h-7" />
          <span className="text-xs">Wishlist</span>
        </Link>

        <Link to="#" className="flex flex-col items-center flex-1">
          <ShoppingCart className="w-7 h-7" />
          <span className="text-xs">Cart</span>
        </Link>

        <Link to="/registration" className="flex flex-col items-center flex-1">
          <User className="w-7 h-7" />
          <span className="text-xs">Account</span>
        </Link>

      </div>
    </div>
  )
}

export default BottomNav