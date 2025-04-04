"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function HorizontalBarChartPage() {
  const [year, setYear] = useState("1401")

  const years = ["1400", "1401", "1402"]

  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        label: "صبح",
        data: [3000, 2800, 2000, 3200, 3500, 2000, 2500, 1800, 1200, 2800, 3500, 1000],
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
      {
        label: "ظهر",
        data: [4500, 3800, 3000, 4200, 2500, 3000, 3500, 2800, 3200, 3800, 2500, 3000],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
      },
      {
        label: "عصر",
        data: [2500, 1800, 2000, 1200, 1500, 2000, 1500, 2800, 3200, 1800, 1500, 2000],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "شب",
        data: [2000, 1600, 3000, 2400, 1500, 2000, 2500, 1800, 1200, 1600, 1500, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
    ],
  }

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "میانگین دمای ۲۴ ساعته",
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "دما (سانتی‌گراد)",
        },
      },
      y: {
        stacked: true,
      },
    },
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
        <h1 className="text-3xl font-bold mb-4">نمودار میله‌ای افقی دمای ۲۴ ساعته</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار میانگین دمای ۲۴ ساعته را در ماه‌های مختلف سال نشان می‌دهد. هر رنگ نشان‌دهنده زمان متفاوتی از روز است.
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
        <Bar options={options} data={data} height={400} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار میله‌ای افقی برای نمایش داده‌های
              مقایسه‌ای در طول زمان مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌های انباشته (stacked) برای مقایسه بهتر</li>
              <li>رنگ‌بندی متمایز برای هر بخش از روز</li>
              <li>قابلیت تغییر سال برای مشاهده داده‌های سال‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی داده‌ها برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

