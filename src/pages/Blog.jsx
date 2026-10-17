import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import Container from '../components/Container'
import BlogCard from '../components/blog/BlogCard'
import BlogSidebar from '../components/blog/BlogSidebar'
import Pagination from './shop/Pagination'
import { blogPosts } from '../data/blogPosts'

const POSTS_PER_PAGE = 6
const SORT_OPTIONS = ['Latest', 'Oldest', 'Title: A-Z']

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('Latest')
  const [filterOpen, setFilterOpen] = useState(false)

  const query = (searchParams.get('q') || '').trim()
  const tag = searchParams.get('tag') || ''
  const category = searchParams.get('category') || ''
  const page = Math.max(Number(searchParams.get('page')) || 1, 1)

  const setPage = (nextPage) => {
    const params = new URLSearchParams(searchParams)
    if (nextPage <= 1) params.delete('page')
    else params.set('page', String(nextPage))
    setSearchParams(params)
  }

  const handleSort = (event) => {
    setSort(event.target.value)
    setPage(1)
  }

  const filtered = blogPosts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt}`.toLowerCase()
    const matchesQuery = query === '' || haystack.includes(query.toLowerCase())
    const matchesTag = tag === '' || post.tags.includes(tag)
    const matchesCategory = category === '' || post.category === category
    return matchesQuery && matchesTag && matchesCategory
  })

  const sorted = [...filtered]
  if (sort === 'Oldest') sorted.reverse()
  if (sort === 'Title: A-Z') sorted.sort((a, b) => a.title.localeCompare(b.title))

  const totalPages = Math.ceil(sorted.length / POSTS_PER_PAGE)
  const currentPage = Math.min(page, Math.max(totalPages, 1))
  const visiblePosts = sorted.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const activeFilters = [
    query && { label: `"${query}"`, clear: '/blog' },
    tag && {
      label: tag,
      clear: `/blog${category ? `?category=${encodeURIComponent(category)}` : ''}`,
    },
    category && {
      label: category,
      clear: `/blog${tag ? `?tag=${encodeURIComponent(tag)}` : ''}`,
    },
  ].filter(Boolean)

  return (
    <section className='bg-white pb-16 pt-12 sm:pb-24 sm:pt-16'>
      <Container>
        {/* ---------- masthead ---------- */}
        <header className='max-w-[620px] pb-10'>
          <p className='font-pop text-[10px] uppercase tracking-[0.32em] text-primary'>
            The Ecobazar Journal
          </p>
          <h1 className='font-pop text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-stone-900 pt-3 sm:text-[38px]'>
            Stories from the field
          </h1>
          <p className='pt-4 font-pop text-[14px] leading-relaxed text-stone-500'>
            Seasonal cooking, grower notes and quiet rituals from the people who bring
            food to your table.
          </p>
        </header>

        <div className='flex flex-col gap-10 lg:flex-row lg:gap-16'>
          {/* ---------- sidebar ---------- */}
          <aside className='order-2 lg:order-1 lg:w-[250px] shrink-0'>
            <BlogSidebar />
          </aside>

          {/* ---------- articles ---------- */}
          <div className='order-1 min-w-0 flex-1 lg:order-2'>
            <div className='mb-9 flex flex-wrap items-end justify-between gap-4 border-t border-stone-200 pt-5'>
              <div className='flex items-center gap-6'>
                <button
                  type='button'
                  onClick={() => setFilterOpen(true)}
                  className='flex items-center gap-2 border border-stone-300 px-4 py-2.5 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-900 hover:border-stone-900 transition-colors duration-200 lg:hidden cursor-pointer'
                >
                  <SlidersHorizontal size={12} />
                  Filter
                </button>

                <div className='flex items-center gap-3'>
                  <label
                    htmlFor='blog-sort'
                    className='font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'
                  >
                    Sort
                  </label>
                  <div className='relative'>
                    <select
                      id='blog-sort'
                      value={sort}
                      onChange={handleSort}
                      className='cursor-pointer appearance-none border-b border-stone-300 bg-transparent pb-1 pr-6 font-pop text-[12px] text-stone-800 outline-none transition-colors duration-200 focus:border-primary'
                    >
                      {SORT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={13}
                      className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-stone-400'
                    />
                  </div>
                </div>
              </div>

              <p className='font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'>
                {sorted.length} Stories
              </p>
            </div>

            {activeFilters.length > 0 && (
              <div className='mb-8 flex flex-wrap items-center gap-2'>
                {activeFilters.map((filter) => (
                  <Link
                    key={filter.label}
                    to={filter.clear}
                    className='flex items-center gap-2 border border-stone-300 px-3 py-1.5 font-pop text-[10px] uppercase tracking-[0.16em] text-stone-600 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900'
                  >
                    {filter.label}
                    <X size={11} />
                  </Link>
                ))}
              </div>
            )}

            {visiblePosts.length > 0 ? (
              <>
                <div className='grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2'>
                  {visiblePosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <div className='border-t border-stone-200 py-16 text-center'>
                <h2 className='font-pop text-[24px] font-semibold leading-tight tracking-[-0.01em] text-stone-900'>
                  Nothing in the archive yet
                </h2>
                <p className='mx-auto max-w-[400px] pt-3 font-pop text-[13px] leading-relaxed text-stone-500'>
                  No story matches this filter. Try another tag, or browse the full
                  collection.
                </p>
                <Link
                  to='/blog'
                  className='mt-8 inline-flex items-center gap-2 bg-stone-900 px-7 py-3.5 font-pop text-[10px] uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-primary'
                >
                  View All Stories
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* ---------- mobile filter drawer ---------- */}
      {filterOpen && (
        <div className='fixed inset-0 z-50 lg:hidden'>
          <div
            className='absolute inset-0 bg-stone-900/40 backdrop-blur-sm animate-fadeIn'
            onClick={() => setFilterOpen(false)}
          />
          <div className='absolute left-0 top-0 h-full w-[86%] max-w-[330px] overflow-y-auto border-r border-stone-200 bg-white p-6 shadow-2xl animate-slideIn'>
            <div className='flex items-center justify-between pb-8'>
              <span className='font-pop text-[18px] font-semibold text-stone-900'>Filters</span>
              <button
                type='button'
                onClick={() => setFilterOpen(false)}
                aria-label='Close filters'
                className='flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900 cursor-pointer'
              >
                <X size={15} />
              </button>
            </div>
            <BlogSidebar />
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
