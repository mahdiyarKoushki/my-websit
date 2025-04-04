"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Info } from "lucide-react"

export default function ChartsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const chartCategories = [
    { id: "all", name: "همه" },
    { id: "bar", name: "ستونی" },
    { id: "line", name: "خطی" },
    { id: "pie", name: "دایره‌ای" },
    { id: "3d", name: "سه‌بعدی" },
    { id: "advanced", name: "پیشرفته" },
  ]

  const charts = [
    {
      id: 1,
      title: "نمودار میله‌ای افقی دمای ۲۴ ساعته",
      description: "نمایش میانگین دمای ۲۴ ساعته در ماه‌های مختلف سال",
      image: "/placeholder.svg?height=300&width=400",
      category: "bar",
      library: "Chart.js",
      link: "/charts/horizontal-bar",
    },
    {
      id: 2,
      title: "نمودار ناحیه‌ای روند دما",
      description: "نمایش روند تغییرات دما در ماه‌های مختلف",
      image: "/placeholder.svg?height=300&width=400",
      category: "line",
      library: "Chart.js",
      link: "/charts/area-chart",
    },
    {
      id: 3,
      title: "نمودار دونات چند لایه",
      description: "نمایش داده‌ها در قالب یک دونات چند لایه",
      image: "/placeholder.svg?height=300&width=400",
      category: "pie",
      library: "Chart.js",
      link: "/charts/donut-chart",
    },
    {
      id: 4,
      title: "نمودار موج سینوسی",
      description: "نمایش الگوهای موج سینوسی با فرکانس‌ها و فازهای مختلف",
      image: "/placeholder.svg?height=300&width=400",
      category: "line",
      library: "Chart.js",
      link: "/charts/sine-wave",
    },
    {
      id: 5,
      title: "نمودار حبابی",
      description: "نمایش داده‌ها به صورت حباب‌هایی با اندازه‌های مختلف",
      image: "/placeholder.svg?height=300&width=400",
      category: "advanced",
      library: "Chart.js",
      link: "/charts/bubble-chart",
    },
    {
      id: 6,
      title: "نمودار هیت‌مپ (نقشه حرارتی)",
      description: "نمایش داده‌های دمایی به صورت یک نقشه حرارتی",
      image: "/placeholder.svg?height=300&width=400",
      category: "advanced",
      library: "HTML/CSS",
      link: "/charts/heatmap",
    },
    {
      id: 7,
      title: "نمودار نقشه جهان",
      description: "نمایش داده‌های جمعیتی، اقتصادی یا مساحتی کشورها روی نقشه جهان",
      image: "/placeholder.svg?height=300&width=400",
      category: "advanced",
      library: "D3.js",
      link: "/charts/world-map",
    },
    {
      id: 8,
      title: "نمودار درختی (Treemap)",
      description: "نمایش داده‌ها به صورت مستطیل‌هایی با اندازه‌های متناسب با مقدار داده",
      image: "/placeholder.svg?height=300&width=400",
      category: "advanced",
      library: "HTML/CSS",
      link: "/charts/treemap",
    },
    {
      id: 9,
      title: "نمودار خطی با ناحیه",
      description: "نمایش روند مصرف انرژی در طول زمان",
      image: "/placeholder.svg?height=300&width=400",
      category: "line",
      library: "Chart.js",
      link: "/charts/area-line",
    },
    {
      id: 10,
      title: "نمودار ترکیبی (میله‌ای و خطی)",
      description: "نمایش دمای شهرهای مختلف به صورت میله‌ای و میانگین دما به صورت خط",
      image: "/placeholder.svg?height=300&width=400",
      category: "bar",
      library: "Chart.js",
      link: "/charts/combo-chart",
    },
  ]

  const filteredCharts = activeTab === "all" ? charts : charts.filter((chart) => chart.category === activeTab)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">نمونه چارت‌ها و نمودارها</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          در این بخش می‌توانید نمونه‌هایی از چارت‌ها و نمودارهای پیاده‌سازی شده با کتابخانه‌های مختلف را مشاهده کنید.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {chartCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCharts.map((chart) => (
          <div
            key={chart.id}
            className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <div className="h-48 overflow-hidden">
              <Image
                src={chart.image || "/placeholder.svg"}
                alt={chart.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{chart.title}</h3>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  {chart.library}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{chart.description}</p>
              <Link
                href={chart.link}
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده و توضیحات
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره چارت‌ها و نمودارها</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              چارت‌ها و نمودارها ابزارهای قدرتمندی برای نمایش بصری داده‌ها هستند. من در پیاده‌سازی انواع چارت‌ها با
              کتابخانه‌های مختلف تخصص دارم و می‌توانم بر اساس نیاز شما، بهترین نوع نمودار را با بهترین کتابخانه پیاده‌سازی
              کنم.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              کتابخانه‌های مورد استفاده: D3.js، Chart.js، eCharts، ApexCharts، LightningChart و Three.js برای نمودارهای
              سه‌بعدی.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

