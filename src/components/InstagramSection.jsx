import { useState, useEffect } from "react";
import { X } from "lucide-react";
import instapost1 from '../assets/images/instapost1.webp'
import instapost2 from '../assets/images/instapost2.webp'
import instapost3 from '../assets/images/instapost3.webp'
import instapost4 from '../assets/images/instapost4.webp'
import instapost5 from '../assets/images/instapost5.webp'
import instapost6 from '../assets/images/instapost6.webp'
import Container from "./Container";
import { Link } from "react-router";

const instagramPosts = [
  {
    id: 1,
    image: instapost1,
    alt: "Fresh vine tomatoes",
  },
  {
    id: 2,
    image: instapost2,
    alt: "Green leaf with water drops",
  },
  {
    id: 3,
    image: instapost3,
    alt: "Wet green leaves",
  },
  {
    id: 4,
    image: instapost4,
    alt: "Peppers splashing in water",
  },
  {
    id: 5,
    image: instapost5,
    alt: "Fresh spinach leaves",
  },
  {
    id: 6,
    image:instapost6,
    alt: "Fresh spinach leaves",
  },

];

function InstagramIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activePost ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  return (
    <Container className="font-pop w-full py-14 px-4 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-pop font-bold text-gray-900 mb-8">
        Follow us on Instagram
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {instagramPosts.map((post) => (
          <button
            key={post.id}
            type="button"
            onClick={() => setActivePost(post)}
            className="group relative aspect-square overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 ease-out group-hover:bg-black/40 group-hover:opacity-100">
              <InstagramIcon className="h-8 w-8 text-white scale-75 transition-transform duration-300 ease-out group-hover:scale-100" />
            </div>
          </button>
        ))}
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePost(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={activePost.image}
              alt={activePost.alt}
              className="max-h-[80vh] w-full object-cover"
            />

            <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-4">
              <InstagramIcon className="h-5 w-5 text-gray-800" />
              <span className="text-sm font-medium text-gray-800">
                @yourstorehandle
              </span>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm font-semibold text-green-700 hover:underline"
              >
                View on Instagram
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
