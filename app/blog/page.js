import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const categories = [
    { id: "all", name: "همه" },
    { id: "frontend", name: "فرانت‌اند" },
    { id: "javascript", name: "جاوااسکریپت" },
    { id: "react", name: "ری‌اکت" },
    { id: "nextjs", name: "نکست‌جی‌اس" },
    { id: "css", name: "CSS" },
  ]

  const posts = [
    {
      id: 1,
      title: "آشنایی با هوک‌های جدید React 18",
      excerpt: "در این مقاله با هوک‌های جدید React 18 آشنا می‌شویم و نحوه استفاده از آن‌ها را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "react",
      author: "مهدیار کوشکی",
      date: "۱۵ خرداد ۱۴۰۲",
      readTime: "۸ دقیقه",
      slug: "react-18-hooks",
    },
    {
      id: 2,
      title: "مقایسه Next.js و Gatsby برای پروژه‌های فرانت‌اند",
      excerpt:
        "در این مقاله به مقایسه دو فریم‌ورک محبوب Next.js و Gatsby می‌پردازیم و بهترین موارد استفاده از هر کدام را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "nextjs",
      author: "مهدیار کوشکی",
      date: "۲ تیر ۱۴۰۲",
      readTime: "۱۰ دقیقه",
      slug: "nextjs-vs-gatsby",
    },
    {
      id: 3,
      title: "بهینه‌سازی عملکرد در اپلیکیشن‌های React",
      excerpt: "در این مقاله تکنیک‌های مختلف بهینه‌سازی عملکرد در اپلیکیشن‌های React را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "react",
      author: "مهدیار کوشکی",
      date: "۱۰ مرداد ۱۴۰۲",
      readTime: "۱۲ دقیقه",
      slug: "react-performance-optimization",
    },
    {
      id: 4,
      title: "آشنایی با CSS Grid و کاربردهای آن",
      excerpt: "در این مقاله با CSS Grid آشنا می‌شویم و نحوه استفاده از آن برای طراحی‌های پیچیده را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "css",
      author: "مهدیار کوشکی",
      date: "۵ شهریور ۱۴۰۲",
      readTime: "۷ دقیقه",
      slug: "css-grid-tutorial",
    },
    {
      id: 5,
      title: "معرفی TypeScript و مزایای استفاده از آن",
      excerpt: "در این مقاله با TypeScript آشنا می‌شویم و مزایای استفاده از آن در پروژه‌های جاوااسکریپت را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "javascript",
      author: "مهدیار کوشکی",
      date: "۲۰ شهریور ۱۴۰۲",
      readTime: "۹ دقیقه",
      slug: "typescript-introduction",
    },
    {
      id: 6,
      title: "استفاده از Server Components در Next.js 13",
      excerpt: "در این مقاله نحوه استفاده از Server Components در Next.js 13 و مزایای آن را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500",
      category: "nextjs",
      author: "مهدیار کوشکی",
      date: "۸ مهر ۱۴۰۲",
      readTime: "۱۱ دقیقه",
      slug: "nextjs-13-server-components",
    },
  ]

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">وبلاگ</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          آخرین مقالات و آموزش‌های من در زمینه فرانت‌اند، جاوااسکریپت، ری‌اکت و نکست‌جی‌اس
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find((c) => c.id === featuredPost.category)?.name}
                </span>
                <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="ml-1" />
                  {featuredPost.date}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock size={14} className="ml-1" />
                      {featuredPost.readTime} مطالعه
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  ادامه مطلب
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <div className="h-48 relative">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find((c) => c.id === post.category)?.name}
                </span>
                <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="ml-1" />
                  {post.date}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} className="ml-1" />
                  {post.readTime} مطالعه
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  ادامه مطلب
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">عضویت در خبرنامه</h3>
            <p className="text-blue-100">
              برای دریافت آخرین مقالات و آموزش‌ها در زمینه فرانت‌اند، ایمیل خود را وارد کنید.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full px-4 py-2 rounded-r-md focus:outline-none text-gray-900"
              />
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-l-md transition-colors">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

