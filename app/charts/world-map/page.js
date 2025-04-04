"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import Image from "next/image"

export default function WorldMapChartPage() {
  const [dataType, setDataType] = useState("population")

  const dataTypes = [
    { id: "population", name: "جمعیت" },
    { id: "gdp", name: "تولید ناخالص داخلی" },
    { id: "area", name: "مساحت" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/charts" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به چارت‌ها
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">نمودار نقشه جهان</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار داده‌های جمعیتی، اقتصادی یا مساحتی کشورها را روی نقشه جهان نمایش می‌دهد.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {dataTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setDataType(type.id)}
              className={`px-4 py-2 text-sm font-medium ${
                dataType === type.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                type === dataTypes[0] ? "rounded-r-md" : ""
              } ${type === dataTypes[dataTypes.length - 1] ? "rounded-l-md" : ""}`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <div className="relative h-[500px] w-full">
          <Image src="/placeholder.svg?height=500&width=1000" alt="نقشه جهان" fill className="object-contain" />
          <div className="absolute top-4 right-4 bg-white dark:bg-zinc-800 p-3 rounded-md shadow-md">
            <h3 className="text-sm font-bold mb-2">راهنما</h3>
            <div className="flex items-center mb-1">
              <div className="w-4 h-4 bg-yellow-200 mr-2"></div>
              <span className="text-xs">کم</span>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-4 h-4 bg-orange-300 mr-2"></div>
              <span className="text-xs">متوسط</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 mr-2"></div>
              <span className="text-xs">زیاد</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {dataType === "population" && "تراکم جمعیت جهان (نفر بر کیلومتر مربع)"}
          {dataType === "gdp" && "تولید ناخالص داخلی کشورها (میلیارد دلار)"}
          {dataType === "area" && "مساحت کشورها (هزار کیلومتر مربع)"}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از تصویر نقشه جهان و رنگ‌آمیزی کشورها بر اساس داده‌های مختلف پیاده‌سازی شده است. در یک
              پروژه واقعی، این نمودار با استفاده از کتابخانه‌هایی مانند D3.js یا Leaflet به صورت تعاملی پیاده‌سازی می‌شود.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌ها روی نقشه جهان</li>
              <li>استفاده از رنگ‌های مختلف برای نمایش مقادیر متفاوت</li>
              <li>قابلیت تغییر نوع داده برای مشاهده داده‌های مختلف</li>
              <li>نمایش راهنمای رنگ‌ها</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

