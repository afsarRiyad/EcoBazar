import React from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { formatBlogDate } from '../../data/blogPosts'

const BlogCard = ({ post }) => {
  const { label } = formatBlogDate(post.date)

  return (
    <article className='group flex flex-col'>
      <Link
        to={`/blog/${post.slug}`}
        className='block overflow-hidden bg-stone-100'
        aria-label={post.title}
      >
        <img
          src={post.image}
          alt={post.title}
          loading='lazy'
          className='aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]'
        />
      </Link>

      <div className='flex flex-1 flex-col pt-5'>
        <div className='flex items-center gap-3 font-pop text-[10px] uppercase tracking-[0.22em] text-stone-400'>
          <Link
            to={`/blog?category=${encodeURIComponent(post.category)}`}
            className='text-primary hover:text-stone-900 transition-colors duration-200'
          >
            {post.category}
          </Link>
          <span className='h-px w-5 bg-stone-200' aria-hidden='true' />
          <span>{label}</span>
        </div>

        <h3 className='font-pop text-[20px] font-semibold leading-snug tracking-[-0.01em] text-stone-900 pt-3'>
          <Link
            to={`/blog/${post.slug}`}
            className='transition-colors duration-200 hover:text-primary'
          >
            {post.title}
          </Link>
        </h3>

        <p className='flex-1 font-pop text-[13px] leading-[1.75] text-stone-500 pt-2.5 line-clamp-2'>
          {post.excerpt}
        </p>

        <div className='mt-5 flex items-center justify-between gap-4 border-t border-stone-200/70 pt-3.5'>
          <span className='font-pop text-[10px] uppercase tracking-[0.18em] text-stone-400'>
            By {post.author}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className='inline-flex items-center gap-1.5 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-900 hover:text-primary transition-colors duration-200'
          >
            Read Story
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
