"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"

export default function HeatmapChartPage() {
  const [year, setYear] = useState("1401")

  const years = ["1400", "1401", "1402"]

  // Data for the heatmap
  const heatmapData = {
    1400: [
      [-0.5, -1.1, 4, 11.3, 17.5, 21.8],
      [3.6, 0.6, 7, 8.1, 15.4, 16.3],
      [10.3, -0.1, -0.1, 4.4, 10.2, 16.3],
      [22.1, 22, 20.9, 18.3, 15.3, 12.8],
      [23.3, 22.2, 21.1, 19.2, 18.8, 17.2],
      [-0.5, -1.1, 4, 11.3, 17.5, 21.8],
    ],
    1401: [
      [-0.8, -1.3, 3.5, 10.2, 16.5, 23.5],
      [3.2, 0.8, 6.5, 9.3, 14.2, 18.2],
      [9.5, -0.3, -0.3, 5.2, 11.5, 15.9],
      [23.1, 21.5, 19.8, 17.2, 14.8, 13.5],
      [22.5, 21.8, 20.5, 18.5, 17.5, 16.8],
      [-0.8, -1.3, 3.5, 10.2, 16.5, 23.5],
    ],
    1402: [
      [-0.2, -0.9, 4.5, 12.5, 18.5, 22.5],
      [4.0, 1.0, 7.5, 7.5, 16.0, 15.5],
      [11.0, 0.2, 0.0, 3.8, 9.5, 17.0],
      [21.5, 22.5, 21.5, 19.0, 16.0, 12.0],
      [24.0, 22.8, 21.8, 20.0, 19.5, 18.0],
      [-0.2, -0.9, 4.5, 12.5, 18.5, 22.5],
    ],
  }

  const months = ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن"]
  const days = ["دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"]

  // Function to get color based on temperature
  const getColor = (temp) => {
    if (temp < 0) return "bg-blue-100 dark:bg-blue-900"
    if (temp < 5) return "bg-blue-200 dark:bg-blue-800"
    if (temp < 10) return "bg-green-200 dark:bg-green-800"
    if (temp < 15) return "bg-yellow-200 dark:bg-yellow-800"
    if (temp < 20) return "bg-orange-200 dark:bg-orange-800"
    return "bg-red-200 dark:bg-red-800"
  }

  // Function to get text color based on temperature
  const getTextColor = (temp) => {
    if (temp < 10) return "text-gray-800 dark:text-gray-100"
    return "text-gray-800 dark:text-gray-100"
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/charts" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به چارت‌ها
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">نمودار هیت‌مپ (نقشه حرارتی)</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار داده‌های دمایی را به صورت یک نقشه حرارتی نمایش می‌دهد. هر سلول نشان‌دهنده دما در یک روز و ماه خاص است.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-2 text-sm font-medium ${
                year === y
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                y === years[0] ? "rounded-r-md" : ""
              } ${y === years[years.length - 1] ? "rounded-l-md" : ""}`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 dark:border-gray-700"></th>
                {months.map((month) => (
                  <th key={month} className="p-2 border border-gray-300 dark:border-gray-700 text-center">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day, dayIndex) => (
                <tr key={day}>
                  <th className="p-2 border border-gray-300 dark:border-gray-700 text-right">{day}</th>
                  {months.map((month, monthIndex) => {
                    const temp = heatmapData[year][dayIndex][monthIndex]
                    return (
                      <td
                        key={`${day}-${month}`}
                        className={`p-2 border border-gray-300 dark:border-gray-700 text-center ${getColor(temp)} ${getTextColor(temp)}`}
                      >
                        {temp}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از HTML و CSS پیاده‌سازی شده است. نمودار هیت‌مپ برای نمایش داده‌های دو بعدی با استفاده
              از رنگ‌ها مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌های دمایی در قالب یک جدول دو بعدی</li>
              <li>استفاده از رنگ‌های مختلف برای نمایش دماهای متفاوت</li>
              <li>قابلیت تغییر سال برای مشاهده داده‌های سال‌های مختلف</li>
              <li>نمایش مقدار دقیق دما در هر سلول</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

