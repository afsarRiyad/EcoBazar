import React from 'react'
import { X, Search } from 'lucide-react'

const SearchPopup = ({ open, setOpen }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      ></div>
      <div
        className="relative mt-16 w-[92%] max-w-lg bg-white rounded-xl shadow-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={() => setOpen(false)}
          className="absolute top-9 right-6 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5 cursor-pointer" />
        </button>

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-3 mt-2 focus-within:border-green-500 transition">
          <Search className="w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none text-sm"
          />
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Type to search products, categories, or brands
        </p>

      </div>
    </div>
  )
}

export default SearchPopup