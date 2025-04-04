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

export default function AreaLineChartPage() {
  const [period, setPeriod] = useState("quarterly")

  const periods = [
    { id: "monthly", name: "ماهانه" },
    { id: "quarterly", name: "فصلی" },
    { id: "yearly", name: "سالانه" },
  ]

  // Generate data for energy usage
  const monthlyData = {
    labels: ["2014-02", "2014-04", "2014-06", "2014-08", "2014-10"],
    datasets: [
      {
        fill: true,
        label: "مصرف انرژی (کیلووات ساعت)",
        data: [80, 100, 120, 140, 160],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const quarterlyData = {
    labels: ["Q1 2014", "Q2 2014", "Q3 2014", "Q4 2014", "Q1 2015"],
    datasets: [
      {
        fill: true,
        label: "مصرف انرژی (کیلووات ساعت)",
        data: [90, 110, 130, 150, 170],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const yearlyData = {
    labels: ["2012", "2013", "2014", "2015", "2016"],
    datasets: [
      {
        fill: true,
        label: "مصرف انرژی (کیلووات ساعت)",
        data: [100, 120, 140, 160, 180],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const data = period === "monthly" ? monthlyData : period === "quarterly" ? quarterlyData : yearlyData

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار مصرف انرژی",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "مصرف انرژی (کیلووات ساعت)",
        },
        min: 0,
      },
      x: {
        title: {
          display: true,
          text: "زمان",
        },
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
        <h1 className="text-3xl font-bold mb-4">نمودار خطی با ناحیه</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار روند مصرف انرژی را در طول زمان نشان می‌دهد. ناحیه زیر خط برای تأکید بیشتر بر تغییرات پر شده است.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {periods.map((p) => (
            <button
              key={p.id}
              onClick={() => setPeriod(p.id)}
              className={`px-4 py-2 text-sm font-medium ${
                period === p.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                p === periods[0] ? "rounded-r-md" : ""
              } ${p === periods[periods.length - 1] ? "rounded-l-md" : ""}`}
            >
              {p.name}
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
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار خطی با ناحیه برای نمایش روند تغییرات
              داده‌ها در طول زمان مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش روند مصرف انرژی در طول زمان</li>
              <li>پر کردن ناحیه زیر خط برای تأکید بیشتر بر تغییرات</li>
              <li>قابلیت تغییر دوره زمانی (ماهانه، فصلی، سالانه)</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی نقاط داده برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

