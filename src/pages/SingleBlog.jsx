import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import { Check, Link2, ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import BlogSidebar from '../components/blog/BlogSidebar'
import Facebook from '../assets/iconsSocial/facebookSvg.svg?react'
import Twitter from '../assets/iconsSocial/twitterSvg.svg?react'
import discountBanner from '../assets/images/discountBanner.webp'
import {
  blogPosts,
  articleBody,
  findPostBySlug,
  formatBlogDate,
} from '../data/blogPosts'

const initialComments = [
  {
    id: 1,
    name: 'Kristin Watson',
    date: 'Jan 26, 2025',
    text: 'In vel convallis magna. Suspendisse congue, diam sed faucibus varius, metus dui tempus lectus, at blandit erat dui congue est. Nullam dignissim mauris at ex tincidunt.',
  },
  {
    id: 2,
    name: 'Dianne Russell',
    date: 'Jan 26, 2025',
    text: 'Morbi porttitor ligula in nunc venenatis sagittis. Donec dapibus ipsum ac turpis ullamcorper eros. Cras quis ultricies erat, morbi ac lectus arcu maecenas aliquet vel tellus ac accumsan.',
  },
  {
    id: 3,
    name: 'Cody Fisher',
    date: 'Jan 26, 2025',
    text: 'Vestibulum at diam pulvinar, pretium leo vitae, tincidunt est. Vestibulum quis lacus pellentesque, sodales lectus at, aliquam orci.',
  },
  {
    id: 4,
    name: 'Jenny Cooper',
    date: 'Jan 26, 2025',
    text: 'Maecenas tincidunt, augue nec vehicula pulvinar, nisi nibh elementum elit, quis vulputate diam justo non metus. Donec ut consequat dui.',
  },
  {
    id: 5,
    name: 'Dianne Russell',
    date: 'Jan 26, 2025',
    text: 'Nulla tincidunt eros id tempus accumsan. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
  },
]

const initialsOf = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const SingleBlog = () => {
  const { slug } = useParams()
  const post = findPostBySlug(slug)

  const [comments, setComments] = useState(initialComments)
  const [visibleCount, setVisibleCount] = useState(3)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', remember: false })

  if (!post) {
    return (
      <section className='bg-white py-20 sm:py-28'>
        <Container>
          <div className='mx-auto max-w-[520px] text-center'>
            <p className='font-pop text-[10px] uppercase tracking-[0.3em] text-primary'>
              The Ecobazar Journal
            </p>
            <h1 className='font-pop pt-3 text-[30px] font-semibold leading-tight tracking-[-0.01em] text-stone-900'>
              Article not found
            </h1>
            <p className='pt-4 font-pop text-[14px] leading-relaxed text-stone-500'>
              This story has moved or no longer exists. The archive is still open.
            </p>
            <Link
              to='/blog'
              className='mt-8 inline-flex items-center gap-2 bg-stone-900 px-8 py-3.5 font-pop text-[10px] uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-primary'
            >
              Back to the Journal
              <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  const { label } = formatBlogDate(post.date)
  const commentCount = post.comments + comments.length - initialComments.length
  const paragraphs = [...post.content, ...articleBody]
  const wordCount = paragraphs.join(' ').split(/\s+/).filter(Boolean).length
  const readTime = Math.max(3, Math.round(wordCount / 200))
  const related = blogPosts.filter((item) => item.id !== post.id)
  const visibleComments = comments.slice(0, visibleCount)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = form.name.trim()
    const message = form.message.trim()
    if (!name || !message) return

    setComments((prev) => [
      { id: Date.now(), name, date: 'Just now', text: message },
      ...prev,
    ])
    setVisibleCount((prev) => prev + 1)
    setForm((prev) => ({ ...prev, message: '' }))
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className='bg-white pb-16 pt-8 sm:pb-24 sm:pt-12'>
      <Container>
        <div className='flex flex-col gap-12 lg:flex-row lg:gap-16'>
          {/* ---------- article ---------- */}
          <article className='order-1 min-w-0 flex-1'>
            <div className='relative aspect-[16/9] overflow-hidden bg-stone-100'>
              <img src={post.image} alt={post.title} className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-wrap items-center gap-x-4 gap-y-2 pt-7 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'>
              <Link
                to={`/blog?category=${encodeURIComponent(post.category)}`}
                className='text-primary transition-colors duration-200 hover:text-stone-900'
              >
                {post.category}
              </Link>
              <span className='h-px w-5 bg-stone-200' aria-hidden='true' />
              <span>{label}</span>
              <span className='h-px w-5 bg-stone-200' aria-hidden='true' />
              <span>{readTime} min read</span>
            </div>

            <h1 className='font-pop pt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-stone-900 sm:text-[44px]'>
              {post.title}
            </h1>

            <p className='max-w-[62ch] pt-4 font-pop text-[15px] leading-[1.8] text-stone-500'>
              {post.excerpt}
            </p>

            {/* author + share */}
            <div className='mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-stone-200 py-5'>
              <div className='flex items-center gap-3.5'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 font-pop text-[11px] uppercase tracking-[0.08em] text-stone-600'>
                  {initialsOf(post.author)}
                </span>
                <div>
                  <p className='font-pop text-[14px] font-medium leading-tight text-stone-900'>
                    {post.author}
                  </p>
                  <p className='pt-1 font-pop text-[10px] uppercase tracking-[0.18em] text-stone-400'>
                    {commentCount} Comments
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <span className='pr-1 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'>
                  Share
                </span>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Share on Facebook'
                  className='flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900'
                >
                  <Facebook className='h-4 w-4' />
                </a>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Share on Twitter'
                  className='flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900'
                >
                  <Twitter className='h-4 w-4' />
                </a>
                <button
                  type='button'
                  onClick={copyLink}
                  aria-label='Copy article link'
                  className='flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900 cursor-pointer'
                >
                  {copied ? <Check size={14} className='text-primary' /> : <Link2 size={14} />}
                </button>
              </div>
            </div>

            {/* body */}
            <div className='max-w-[68ch] pt-8'>
              {paragraphs.map((text, index) => (
                <React.Fragment key={`${post.id}-p-${index}`}>
                  <p
                    className='pb-6 font-pop text-[14.5px] leading-[1.95] text-stone-600'
                  >
                    {text}
                  </p>
                  {index === 1 && (
                    <div className='grid grid-cols-2 gap-4 pb-6'>
                      <img
                        src={related[0].image}
                        alt={related[0].title}
                        loading='lazy'
                        className='aspect-[4/3] w-full object-cover'
                      />
                      <img
                        src={related[1].image}
                        alt={related[1].title}
                        loading='lazy'
                        className='aspect-[4/3] w-full object-cover'
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}

              <img
                src={discountBanner}
                alt='Fresh fruit discount banner'
                loading='lazy'
                className='w-full pt-2'
              />
            </div>

            {/* ---------- leave a comment ---------- */}
            <div className='mt-12 border-t border-stone-200 pt-10'>
              <h2 className='font-pop text-[22px] font-semibold leading-tight tracking-[-0.01em] text-stone-900'>
                Leave a Comment
              </h2>
              <p className='pt-2 font-pop text-[12px] text-stone-400'>
                Your email address will not be published.
              </p>

              <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-6'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='comment-name'
                      className='mb-1 block font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'
                    >
                      Full Name
                    </label>
                    <input
                      id='comment-name'
                      name='name'
                      type='text'
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder='Your name'
                      className='w-full border-b border-stone-300 bg-transparent py-2.5 font-pop text-[14px] text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-primary'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='comment-email'
                      className='mb-1 block font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'
                    >
                      Email
                    </label>
                    <input
                      id='comment-email'
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder='you@example.com'
                      className='w-full border-b border-stone-300 bg-transparent py-2.5 font-pop text-[14px] text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-primary'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='comment-message'
                    className='mb-1 block font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400'
                  >
                    Message
                  </label>
                  <textarea
                    id='comment-message'
                    name='message'
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder='Write your comment here...'
                    className='w-full resize-y border-b border-stone-300 bg-transparent py-2.5 font-pop text-[14px] leading-relaxed text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-primary'
                  />
                </div>

                <div className='flex items-start gap-2.5'>
                  <input
                    id='comment-remember'
                    name='remember'
                    type='checkbox'
                    checked={form.remember}
                    onChange={handleChange}
                    className='mt-0.5 h-3.5 w-3.5 cursor-pointer accent-primary'
                  />
                  <label
                    htmlFor='comment-remember'
                    className='cursor-pointer font-pop text-[11px] leading-relaxed text-stone-400'
                  >
                    Save my name and email in this browser for the next time I comment.
                  </label>
                </div>

                <button
                  type='submit'
                  className='self-start bg-stone-900 px-8 py-3.5 font-pop text-[10px] uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-primary cursor-pointer'
                >
                  Post Comment
                </button>
              </form>
            </div>

            {/* ---------- comments ---------- */}
            <div className='mt-12 border-t border-stone-200 pt-10'>
              <h2 className='font-pop text-[22px] font-semibold leading-tight tracking-[-0.01em] text-stone-900'>
                Comments
                <span className='pl-3 font-pop text-[11px] uppercase tracking-[0.2em] text-stone-400'>
                  {commentCount}
                </span>
              </h2>

              <ul className='mt-4 divide-y divide-stone-100'>
                {visibleComments.map((comment) => (
                  <li key={comment.id} className='flex gap-4 py-6'>
                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 font-pop text-[10px] uppercase tracking-[0.06em] text-stone-500'>
                      {initialsOf(comment.name)}
                    </span>
                    <div className='min-w-0'>
                      <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                        <p className='font-pop text-[14px] font-medium leading-tight text-stone-900'>
                          {comment.name}
                        </p>
                        <p className='font-pop text-[10px] uppercase tracking-[0.16em] text-stone-400'>
                          {comment.date}
                        </p>
                      </div>
                      <p className='pt-2 font-pop text-[13px] leading-[1.85] text-stone-500'>
                        {comment.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {visibleCount < comments.length && (
                <button
                  type='button'
                  onClick={() => setVisibleCount((prev) => prev + 2)}
                  className='mt-4 border border-stone-300 px-7 py-3 font-pop text-[10px] uppercase tracking-[0.22em] text-stone-900 transition-colors duration-200 hover:border-stone-900 cursor-pointer'
                >
                  Load More
                </button>
              )}
            </div>
          </article>

          {/* ---------- sidebar ---------- */}
          <aside className='order-2 shrink-0 lg:w-[260px]'>
            <BlogSidebar />
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default SingleBlog
