"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Tag,
  Clock,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Play,
  ArrowRight,
} from "lucide-react"

export default function VideoPage({ params }) {
  const { slug } = params

  // در یک پروژه واقعی، این داده‌ها از یک API یا CMS دریافت می‌شوند
  const video = {
    title: "آموزش کامل React Hooks",
    description: "در این ویدیو، هوک‌های React را به صورت کامل و با مثال‌های عملی آموزش می‌دهیم.",
    thumbnail: "/placeholder.svg?height=500&width=1000",
    videoUrl: "#",
    duration: "۴۵:۲۰",
    date: "۱۰ خرداد ۱۴۰۲",
    author: "مهدیار کوشکی",
    category: "react",
    views: "۱,۲۳۴",
    likes: "۱۲۵",
    content: `
      <p>در این ویدیو، به آموزش کامل هوک‌های React می‌پردازیم. هوک‌ها در نسخه 16.8 به React اضافه شدند و به شما امکان می‌دهند تا از state و سایر ویژگی‌های React بدون نوشتن کلاس استفاده کنید.</p>
      
      <h2>آنچه در این ویدیو خواهید آموخت:</h2>
      <ul>
        <li>مقدمه‌ای بر هوک‌ها و مزایای آن‌ها</li>
        <li>هوک useState برای مدیریت state</li>
        <li>هوک useEffect برای اجرای کدهای جانبی</li>
        <li>هوک useContext برای دسترسی به context</li>
        <li>هوک useReducer برای مدیریت state پیچیده</li>
        <li>هوک useRef برای دسترسی به DOM</li>
        <li>هوک‌های سفارشی و نحوه ایجاد آن‌ها</li>
        <li>قوانین هوک‌ها و نکات مهم</li>
      </ul>
      
      <h2>پیش‌نیازها:</h2>
      <p>برای درک بهتر این ویدیو، بهتر است با مفاهیم پایه React آشنا باشید. اگر تازه با React شروع کرده‌اید، پیشنهاد می‌کنم ابتدا ویدیوی "آموزش مقدماتی React" را مشاهده کنید.</p>
      
      <h2>کدهای استفاده شده در ویدیو:</h2>
      <pre><code>
// مثال useState
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>شما {count} بار کلیک کرده‌اید</p>
      <button onClick={() => setCount(count + 1)}>
        افزایش
      </button>
    </div>
  );
}

// مثال useEffect
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`شما \${count} بار کلیک کرده‌اید\`;
  }, [count]);
  
  return (
    <div>
      <p>شما {count} بار کلیک کرده‌اید</p>
      <button onClick={() => setCount(count + 1)}>
        افزایش
      </button>
    </div>
  );
}
      </code></pre>
      
      <h2>منابع تکمیلی:</h2>
      <ul>
        <li><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">مستندات رسمی هوک‌های React</a></li>
        <li><a href="https://reactjs.org/docs/hooks-reference.html" target="_blank" rel="noopener noreferrer">مرجع API هوک‌های React</a></li>
      </ul>
    `,
    tags: ["React", "هوک‌ها", "فرانت‌اند", "جاوااسکریپت"],
    relatedVideos: [
      {
        id: 2,
        title: "ساخت اپلیکیشن با Next.js 13",
        description: "در این ویدیو، نحوه ساخت یک اپلیکیشن کامل با Next.js 13 و App Router را آموزش می‌دهیم.",
        thumbnail: "/placeholder.svg?height=300&width=500",
        duration: "۵۸:۱۵",
        slug: "nextjs-13-app-tutorial",
      },
      {
        id: 3,
        title: "آموزش Redux Toolkit",
        description: "در این ویدیو، نحوه استفاده از Redux Toolkit برای مدیریت state در React را آموزش می‌دهیم.",
        thumbnail: "/placeholder.svg?height=300&width=500",
        duration: "۴۰:۱۵",
        slug: "redux-toolkit-tutorial",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/videos" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به ویدیوها
        </Link>
      </div>

      <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        {/* Video Player */}
        <div className="relative aspect-video">
          <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
              <Play size={40} className="text-white" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center mb-6">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              {video.category}
            </span>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={14} className="ml-1" />
              {video.date}
            </div>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={14} className="ml-1" />
              {video.duration}
            </div>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{video.views} بازدید</div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{video.title}</h1>

          {/* Author */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
              {video.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{video.author}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">توسعه‌دهنده فرانت‌اند</p>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: video.content }}
          ></div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center">
              <Tag size={18} className="text-gray-500 dark:text-gray-400 ml-2" />
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium ml-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share and Actions */}
          <div className="mt-8 flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 space-x-reverse">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Share2 size={18} className="ml-1" />
                اشتراک‌گذاری
              </button>
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Bookmark size={18} className="ml-1" />
                ذخیره
              </button>
            </div>
            <div className="flex space-x-4 space-x-reverse mt-4 sm:mt-0">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <ThumbsUp size={18} className="ml-1" />
                {video.likes}
              </button>
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <MessageSquare size={18} className="ml-1" />
                ۱۸ نظر
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Videos */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">ویدیوهای مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {video.relatedVideos.map((relatedVideo) => (
            <div
              key={relatedVideo.id}
              className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative">
                <div className="relative h-48">
                  <Image
                    src={relatedVideo.thumbnail || "/placeholder.svg"}
                    alt={relatedVideo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md flex items-center text-xs">
                  <Clock size={12} className="ml-1" />
                  {relatedVideo.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{relatedVideo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{relatedVideo.description}</p>
                <Link
                  href={`/videos/${relatedVideo.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  مشاهده ویدیو
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">نظرات (۱۸)</h2>
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="font-bold mb-4">ارسال نظر</h3>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
              rows="4"
              placeholder="نظر خود را بنویسید..."
            ></textarea>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-bold transition-colors">
              ارسال نظر
            </button>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                  ر
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">رضا محمدی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۳ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    ویدیوی بسیار عالی و کاربردی بود. من تازه با React شروع به کار کردم و این آموزش خیلی به من کمک کرد.
                    ممنون از اشتراک‌گذاری این ویدیو.
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>

              <div className="flex items-start mr-12 mt-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  م
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">مهدیار کوشکی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۲ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    رضا عزیز، ممنون از نظر مثبت شما. خوشحالم که این ویدیو برای شما مفید بوده است. اگر سوالی در مورد
                    React دارید، خوشحال می‌شوم کمک کنم.
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-3">
                  س
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">سارا احمدی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۵ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    آیا می‌توانید در مورد تفاوت‌های هوک useEffect و componentDidMount/componentDidUpdate در کلاس‌ها بیشتر
                    توضیح دهید؟
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

