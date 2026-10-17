import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Search } from 'lucide-react'
import {
  blogPosts,
  blogTags,
  blogGallery,
  topCategories,
  formatBlogDate,
} from '../../data/blogPosts'

const SectionTitle = ({ children }) => (
  <h2 className='flex items-center gap-3 pb-4 font-pop text-[10px] uppercase tracking-[0.26em] text-stone-900'>
    {children}
    <span className='h-px flex-1 bg-stone-200' aria-hidden='true' />
  </h2>
)

const BlogSidebar = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || ''
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const recentPosts = blogPosts.slice(3, 6)

  const handleSearch = (event) => {
    event.preventDefault()
    const value = query.trim()
    navigate(value ? `/blog?q=${encodeURIComponent(value)}` : '/blog')
  }

  return (
    <div className='flex w-full flex-col gap-10 font-pop'>
      {/* ---------- search ---------- */}
      <form onSubmit={handleSearch} className='relative border-b border-stone-300 focus-within:border-primary transition-colors duration-200'>
        <input
          id='blog-sidebar-search'
          type='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search the journal'
          aria-label='Search articles'
          className='w-full bg-transparent py-3 pr-9 font-pop text-[13px] tracking-wide text-stone-700 outline-none placeholder:text-stone-400'
        />
        <button
          type='submit'
          aria-label='Search'
          className='absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-primary transition-colors duration-150 cursor-pointer'
        >
          <Search size={16} />
        </button>
      </form>

      {/* ---------- top categories ---------- */}
      <div>
        <SectionTitle>Top Categories</SectionTitle>
        <ul>
          {topCategories.map((category) => (
            <li key={category.name}>
              <Link
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className='flex items-center justify-between gap-3 border-b border-stone-100 py-2.5 text-[13px] text-stone-600 hover:text-primary transition-colors duration-150'
              >
                <span>{category.name}</span>
                <span className='text-[11px] tabular-nums tracking-wider text-stone-400'>
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- popular tags ---------- */}
      <div>
        <SectionTitle>Popular Tag</SectionTitle>
        <div className='flex flex-wrap gap-1.5'>
          {blogTags.map((tag) => {
            const isActive = activeTag === tag
            return (
              <Link
                key={tag}
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                className={`border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 text-stone-500 hover:border-stone-900 hover:text-stone-900'
                }`}
              >
                {tag}
              </Link>
            )
          })}
        </div>
      </div>

      {/* ---------- our gallery ---------- */}
      <div>
        <SectionTitle>Our Gallery</SectionTitle>
        <div className='grid grid-cols-3 gap-1.5'>
          {blogGallery.map((item) => (
            <div key={item.alt} className='aspect-square overflow-hidden bg-stone-100'>
              <img
                src={item.image}
                alt={item.alt}
                loading='lazy'
                className='h-full w-full object-cover hover:opacity-80 transition-opacity duration-300'
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- recently added ---------- */}
      <div>
        <SectionTitle>Recently Added</SectionTitle>
        <ul>
          {recentPosts.map((post) => {
            const { label } = formatBlogDate(post.date)
            return (
              <li key={post.id} className='border-b border-stone-100 last:border-0'>
                <Link to={`/blog/${post.slug}`} className='group flex items-center gap-3.5 py-3'>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading='lazy'
                    className='h-14 w-14 shrink-0 object-cover'
                  />
                  <div className='min-w-0'>
                    <p className='font-pop text-[13px] font-medium leading-snug text-stone-800 group-hover:text-primary transition-colors duration-150'>
                      {post.title}
                    </p>
                    <p className='pt-1 font-pop text-[10px] uppercase tracking-[0.16em] text-stone-400'>
                      {label}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BlogSidebar
