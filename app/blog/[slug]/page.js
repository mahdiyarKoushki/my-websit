"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, Clock, Share2, Bookmark, ThumbsUp, MessageSquare, ArrowRight } from "lucide-react"

export default function BlogPostPage({ params }) {
  const { slug } = params

  // در یک پروژه واقعی، این داده‌ها از یک API یا CMS دریافت می‌شوند
  const post = {
    title: "آشنایی با هوک‌های جدید React 18",
    excerpt: "در این مقاله با هوک‌های جدید React 18 آشنا می‌شویم و نحوه استفاده از آن‌ها را بررسی می‌کنیم.",
    image: "/placeholder.svg?height=500&width=1000",
    category: "react",
    author: "مهدیار کوشکی",
    date: "۱۵ خرداد ۱۴۰۲",
    readTime: "۸ دقیقه",
    content: `
      <p>React 18 با معرفی هوک‌های جدید و بهبود هوک‌های موجود، امکانات جدیدی را در اختیار توسعه‌دهندگان قرار داده است. در این مقاله، به بررسی این هوک‌ها و نحوه استفاده از آن‌ها می‌پردازیم.</p>
      
      <h2>useTransition</h2>
      <p>هوک useTransition یکی از مهم‌ترین هوک‌های جدید در React 18 است که به شما امکان می‌دهد تا رندرهای سنگین را بدون مسدود کردن رابط کاربری انجام دهید.</p>
      
      <pre><code>
import { useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    });
  }
  
  return (
    <div>
      {isPending && <div>در حال بارگذاری...</div>}
      <button onClick={handleClick}>افزایش</button>
      <ExpensiveComponent count={count} />
    </div>
  );
}
      </code></pre>
      
      <p>در مثال بالا، با استفاده از useTransition، تغییر state که منجر به رندر مجدد کامپوننت سنگین می‌شود، به عنوان یک ترنزیشن در نظر گرفته می‌شود و رابط کاربری را مسدود نمی‌کند.</p>
      
      <h2>useDeferredValue</h2>
      <p>هوک useDeferredValue به شما امکان می‌دهد تا یک نسخه تأخیری از یک مقدار را ایجاد کنید که می‌تواند برای بهینه‌سازی عملکرد در هنگام نمایش داده‌های بزرگ مفید باشد.</p>
      
      <pre><code>
import { useDeferredValue } from 'react';

function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  // از deferredQuery برای جستجو استفاده می‌کنیم
  // ...
  
  return (
    // نمایش نتایج
  );
}
      </code></pre>
      
      <p>در مثال بالا، با استفاده از useDeferredValue، جستجو بر اساس مقدار تأخیری query انجام می‌شود که باعث می‌شود رابط کاربری در هنگام تایپ سریع کاربر، روان‌تر باشد.</p>
      
      <h2>useId</h2>
      <p>هوک useId برای تولید شناسه‌های یکتا در سمت سرور و کلاینت استفاده می‌شود که برای اتصال عناصر HTML مانند label و input مفید است.</p>
      
      <pre><code>
import { useId } from 'react';

function PasswordField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>رمز عبور</label>
      <input id={id} type="password" />
    </>
  );
}
      </code></pre>
      
      <p>در مثال بالا، useId یک شناسه یکتا تولید می‌کند که برای اتصال label و input استفاده می‌شود.</p>
      
      <h2>useSyncExternalStore</h2>
      <p>هوک useSyncExternalStore برای اشتراک‌گذاری داده‌ها از منابع خارجی مانند کتابخانه‌های مدیریت state استفاده می‌شود.</p>
      
      <pre><code>
import { useSyncExternalStore } from 'react';

function useOnlineStatus() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine,
    () => true
  );
}

function App() {
  const isOnline = useOnlineStatus();
  return <div>{isOnline ? 'آنلاین' : 'آفلاین'}</div>;
}
      </code></pre>
      
      <p>در مثال بالا، useSyncExternalStore برای دریافت وضعیت آنلاین بودن کاربر استفاده می‌شود.</p>
      
      <h2>نتیجه‌گیری</h2>
      <p>هوک‌های جدید React 18 امکانات قدرتمندی را برای بهبود عملکرد و تجربه کاربری در اختیار توسعه‌دهندگان قرار می‌دهند. با استفاده از این هوک‌ها، می‌توانید اپلیکیشن‌های React خود را بهینه‌تر و روان‌تر کنید.</p>
    `,
    tags: ["React", "هوک‌ها", "فرانت‌اند", "جاوااسکریپت"],
    relatedPosts: [
      {
        id: 2,
        title: "بهینه‌سازی عملکرد در اپلیکیشن‌های React",
        excerpt: "در این مقاله تکنیک‌های مختلف بهینه‌سازی عملکرد در اپلیکیشن‌های React را بررسی می‌کنیم.",
        image: "/placeholder.svg?height=300&width=500",
        slug: "react-performance-optimization",
      },
      {
        id: 3,
        title: "استفاده از Server Components در Next.js 13",
        excerpt: "در این مقاله نحوه استفاده از Server Components در Next.js 13 و مزایای آن را بررسی می‌کنیم.",
        image: "/placeholder.svg?height=300&width=500",
        slug: "nextjs-13-server-components",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به وبلاگ
        </Link>
      </div>

      <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative h-80">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center mb-6">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={14} className="ml-1" />
              {post.date}
            </div>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={14} className="ml-1" />
              {post.readTime} مطالعه
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

          {/* Author */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">توسعه‌دهنده فرانت‌اند</p>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center">
              <Tag size={18} className="text-gray-500 dark:text-gray-400 ml-2" />
              {post.tags.map((tag, index) => (
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
                ۱۲۵
              </button>
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <MessageSquare size={18} className="ml-1" />
                ۲۳ نظر
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {post.relatedPosts.map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-48 relative">
                <Image
                  src={relatedPost.image || "/placeholder.svg"}
                  alt={relatedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{relatedPost.excerpt}</p>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  ادامه مطلب
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">نظرات (۲۳)</h2>
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
                  س
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">سارا محمدی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۲ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    مقاله بسیار خوبی بود. من تازه با React 18 شروع به کار کردم و این هوک‌ها خیلی به من کمک کردند. ممنون
                    از اشتراک‌گذاری این اطلاعات مفید.
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>

              <div className="flex items-start mr-12">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  م
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">مهدیار کوشکی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۱ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    سارا عزیز، ممنون از نظر مثبت شما. خوشحالم که این مقاله برای شما مفید بوده است. اگر سوالی در مورد
                    React 18 دارید، خوشحال می‌شوم کمک کنم.
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-3">
                  ع
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">علی رضایی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۳ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    آیا می‌توانید در مورد تفاوت‌های useTransition و useDeferredValue بیشتر توضیح دهید؟ در چه مواردی باید
                    از هر کدام استفاده کنیم؟
                  </p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">پاسخ</button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-3">
                  م
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">مریم احمدی</h4>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">۴ روز پیش</span>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    من از useId در پروژه اخیرم استفاده کردم و واقعاً مشکل تولید ID یکتا در SSR را حل کرد. قبلاً مجبور بودم
                    از کتابخانه‌های جانبی استفاده کنم. ممنون از معرفی این هوک کاربردی.
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

