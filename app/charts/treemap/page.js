"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"

export default function TreemapChartPage() {
  const [dataType, setDataType] = useState("disk")

  const dataTypes = [
    { id: "disk", name: "فضای دیسک" },
    { id: "budget", name: "بودجه" },
  ]

  // Data for disk space usage
  const diskData = [
    { name: "photos", size: 40, color: "bg-blue-500 dark:bg-blue-600" },
    { name: "videos", size: 25, color: "bg-blue-400 dark:bg-blue-500" },
    { name: "docs", size: 15, color: "bg-blue-300 dark:bg-blue-400" },
    { name: "system", size: 10, color: "bg-orange-400 dark:bg-orange-500" },
    { name: "apps", size: 8, color: "bg-orange-300 dark:bg-orange-400" },
    { name: "other", size: 2, color: "bg-gray-300 dark:bg-gray-500" },
  ]

  // Data for budget allocation
  const budgetData = [
    { name: "مسکن", size: 35, color: "bg-green-500 dark:bg-green-600" },
    { name: "خوراک", size: 25, color: "bg-green-400 dark:bg-green-500" },
    { name: "حمل و نقل", size: 15, color: "bg-green-300 dark:bg-green-400" },
    { name: "تفریح", size: 10, color: "bg-yellow-400 dark:bg-yellow-500" },
    { name: "پس‌انداز", size: 10, color: "bg-yellow-300 dark:bg-yellow-400" },
    { name: "سایر", size: 5, color: "bg-gray-300 dark:bg-gray-500" },
  ]

  const data = dataType === "disk" ? diskData : budgetData

  // Calculate total size
  const totalSize = data.reduce((sum, item) => sum + item.size, 0)

  // Sort data by size (descending)
  const sortedData = [...data].sort((a, b) => b.size - a.size)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/charts" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به چارت‌ها
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">نمودار درختی (Treemap)</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار داده‌ها را به صورت مستطیل‌هایی با اندازه‌های متناسب با مقدار داده نمایش می‌دهد. این نوع نمودار برای
          نمایش داده‌های سلسله مراتبی مناسب است.
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
              } border border-gray-300 dark:border-zinc-700 ${type === dataTypes[0] ? "rounded-r-md" : "rounded-l-md"}`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">
          {dataType === "disk" ? "فضای استفاده شده دیسک" : "تخصیص بودجه"}
        </h3>
        <div className="w-full h-96 flex flex-wrap">
          {sortedData.map((item, index) => {
            const percentage = (item.size / totalSize) * 100
            return (
              <div key={index} className={`${item.color} relative`} style={{ width: `${percentage}%`, height: "100%" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <span className="font-bold text-sm">{item.name}</span>
                  <span className="text-xs">{item.size}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از HTML و CSS پیاده‌سازی شده است. نمودار درختی (Treemap) برای نمایش داده‌های سلسله
              مراتبی و مقایسه نسبی مقادیر مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌ها به صورت مستطیل‌هایی با اندازه متناسب با مقدار</li>
              <li>استفاده از رنگ‌های مختلف برای تمایز بین دسته‌های داده</li>
              <li>قابلیت تغییر نوع داده برای مشاهده داده‌های مختلف</li>
              <li>نمایش نام و درصد هر بخش</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

