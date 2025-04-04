"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default function AreaChartPage() {
  const [year, setYear] = useState("1401")

  const years = ["1400", "1401", "1402"]

  const data = {
    labels: ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن"],
    datasets: [
      {
        fill: true,
        label: "دمای بالا",
        data: [20, 30, 25, 40, 35, 45],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
      {
        fill: true,
        label: "دمای متوسط",
        data: [15, 20, 15, 25, 20, 30],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        tension: 0.4,
      },
      {
        fill: true,
        label: "دمای پایین",
        data: [10, 15, 10, 15, 10, 20],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار دمای ماهانه",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "دما (سانتی‌گراد)",
        },
        min: 0,
        max: 50,
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
        <h1 className="text-3xl font-bold mb-4">نمودار ناحیه‌ای روند دما</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار روند تغییرات دما را در ماه‌های مختلف نشان می‌دهد. سه سطح دمایی مختلف (بالا، متوسط و پایین) با رنگ‌های
          متفاوت نمایش داده شده‌اند.
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
        <Line options={options} data={data} height={400} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار ناحیه‌ای برای نمایش روند تغییرات
              داده‌ها در طول زمان مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش روند تغییرات دما در ماه‌های مختلف</li>
              <li>استفاده از رنگ‌های متفاوت برای نمایش سطوح مختلف دما</li>
              <li>پر کردن ناحیه زیر خط برای تأکید بیشتر بر تغییرات</li>
              <li>قابلیت تغییر سال برای مشاهده داده‌های سال‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

