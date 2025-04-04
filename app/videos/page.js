import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Clock, Calendar } from "lucide-react"

export default function VideosPage() {
  const categories = [
    { id: "all", name: "همه" },
    { id: "frontend", name: "فرانت‌اند" },
    { id: "javascript", name: "جاوااسکریپت" },
    { id: "react", name: "ری‌اکت" },
    { id: "nextjs", name: "نکست‌جی‌اس" },
    { id: "css", name: "CSS" },
  ]

  const videos = [
    {
      id: 1,
      title: "آموزش کامل React Hooks",
      description: "در این ویدیو، هوک‌های React را به صورت کامل و با مثال‌های عملی آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۴۵:۲۰",
      date: "۱۰ خرداد ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "react",
      slug: "react-hooks-tutorial",
    },
    {
      id: 2,
      title: "ساخت اپلیکیشن با Next.js 13",
      description: "در این ویدیو، نحوه ساخت یک اپلیکیشن کامل با Next.js 13 و App Router را آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۵۸:۱۵",
      date: "۲۵ خرداد ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "nextjs",
      slug: "nextjs-13-app-tutorial",
    },
    {
      id: 3,
      title: "آموزش Tailwind CSS",
      description: "در این ویدیو، نحوه استفاده از Tailwind CSS برای طراحی رابط کاربری را آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۳۲:۴۵",
      date: "۵ تیر ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "css",
      slug: "tailwind-css-tutorial",
    },
    {
      id: 4,
      title: "آموزش TypeScript برای توسعه‌دهندگان React",
      description: "در این ویدیو، نحوه استفاده از TypeScript در پروژه‌های React را آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۵۰:۳۰",
      date: "۲۰ تیر ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "javascript",
      slug: "typescript-for-react-developers",
    },
    {
      id: 5,
      title: "آموزش Redux Toolkit",
      description: "در این ویدیو، نحوه استفاده از Redux Toolkit برای مدیریت state در React را آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۴۰:۱۵",
      date: "۱۰ مرداد ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "react",
      slug: "redux-toolkit-tutorial",
    },
    {
      id: 6,
      title: "آموزش CSS Grid",
      description: "در این ویدیو، نحوه استفاده از CSS Grid برای طراحی لایه‌بندی‌های پیچیده را آموزش می‌دهیم.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "۳۵:۵۰",
      date: "۲۵ مرداد ۱۴۰۲",
      author: "مهدیار کوشکی",
      category: "css",
      slug: "css-grid-tutorial",
    },
  ]

  const featuredVideo = videos[0]
  const regularVideos = videos.slice(1)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ویدیوهای آموزشی</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          آخرین ویدیوهای آموزشی من در زمینه فرانت‌اند، جاوااسکریپت، ری‌اکت و نکست‌جی‌اس
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

      {/* Featured Video */}
      <div className="mb-12">
        <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <div className="relative h-96">
              <Image
                src={featuredVideo.thumbnail || "/placeholder.svg"}
                alt={featuredVideo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Play size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md flex items-center">
              <Clock size={14} className="ml-1" />
              {featuredVideo.duration}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {categories.find((c) => c.id === featuredVideo.category)?.name}
              </span>
              <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar size={14} className="ml-1" />
                {featuredVideo.date}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{featuredVideo.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredVideo.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  {featuredVideo.author.charAt(0)}
                </div>
                <span className="font-medium">{featuredVideo.author}</span>
              </div>
              <Link
                href={`/videos/${featuredVideo.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده ویدیو
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative">
              <div className="relative h-48">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <Play size={24} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md flex items-center text-xs">
                <Clock size={12} className="ml-1" />
                {video.duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                  {categories.find((c) => c.id === video.category)?.name}
                </span>
                <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                  <Calendar size={12} className="ml-1" />
                  {video.date}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{video.description}</p>
              <Link
                href={`/videos/${video.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده ویدیو
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe */}
      <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">عضویت در کانال آموزشی</h3>
            <p className="text-blue-100">برای دریافت اطلاع از آخرین ویدیوهای آموزشی، در کانال من عضو شوید.</p>
          </div>
          <div className="md:w-1/3">
            <button className="w-full bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-bold transition-colors">
              عضویت در کانال
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

