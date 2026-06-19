import React from "react";
import { Tag, User, MessageCircle, ArrowRight } from "lucide-react";
import Container from "./Container";
import card1 from "../assets/images/card1.webp"
import card2 from "../assets/images/card2.webp"
import card3 from "../assets/images/card3.webp"
import { Link } from "react-router";

const newsItems = [
  {
    id: 1,
    image:card1,
    day: "18",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    id: 2,
    image:card2,
    day: "29",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: 42,
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper.",
  },
  {
    id: 3,
    image:card3,
    day: "21",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: 38,
    title: "Maecenas blandit risus elementum mauris malesuada.",
  },
];

export default function LatestNews() {
  return (
    <section className=" py-15 px-6 font-pop">
      <Container>
          <h2 className="text-gray-900 text-[32px] pb-6 font-bold text-center tracking-tight mb-3">
            Latest News
          </h2>
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1  max-[900px]:max-w-[420px] max-[900px]:mx-auto">

          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-md overflow-hidden transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <div className="relative h-[320px] overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute left-6 bottom-5 bg-white rounded-sm px-4 py-2 text-center shadow-lg leading-tight">
                  <span className="block text-xl font-bold text-gray-900">
                    {item.day}
                  </span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    {item.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 px-6 pb-7">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Tag size={14} className="text-green-600" />
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <User size={14} className="text-green-600" />
                    By {item.author}
                  </span>

                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} className="text-green-600" />
                    {item.comments} Comments
                  </span>
                </div>
                <h3 className="text-[18px] hover:text-primary duration-200 font-semibold leading-relaxed text-gray-900 mb-5">
                  {item.title}
                </h3>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-green-600 group hover:text-green-700"
                >
                  Read More
                  <ArrowRight size={19} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

              </div>
            </article>
          ))}

        </div>
      </Container>
    </section>
  );
}