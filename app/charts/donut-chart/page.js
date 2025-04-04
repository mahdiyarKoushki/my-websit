"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export default function DonutChartPage() {
  const [dataType, setDataType] = useState("main")

  const dataTypes = [
    { id: "main", name: "داده‌های اصلی" },
    { id: "secondary", name: "داده‌های ثانویه" },
  ]

  const mainData = {
    labels: ["بخش 1", "بخش 2", "بخش 3", "بخش 4", "بخش 5", "بخش 6"],
    datasets: [
      {
        label: "مجموعه داده‌های خارجی",
        data: [30, 20, 15, 10, 15, 10],
        backgroundColor: [
          "rgba(53, 162, 235, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 205, 86, 0.8)",
        ],
        borderColor: [
          "rgba(53, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "مجموعه داده‌های داخلی",
        data: [20, 15, 10, 5, 10, 5],
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 205, 86, 0.5)",
        ],
        borderColor: [
          "rgba(53, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
        radius: "70%",
      },
    ],
  }

  const secondaryData = {
    labels: ["گروه A", "گروه B", "گروه C", "گروه D"],
    datasets: [
      {
        label: "مجموعه داده‌های خارجی",
        data: [40, 30, 20, 10],
        backgroundColor: [
          "rgba(53, 162, 235, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(53, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "مجموعه داده‌های داخلی",
        data: [25, 20, 15, 5],
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(53, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        radius: "70%",
      },
    ],
  }

  const data = dataType === "main" ? mainData : secondaryData

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار دونات چند لایه",
      },
    },
    cutout: "50%",
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
        <h1 className="text-3xl font-bold mb-4">نمودار دونات چند لایه</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار داده‌ها را در قالب یک دونات چند لایه نمایش می‌دهد. لایه بیرونی و داخلی نشان‌دهنده مجموعه‌های داده
          متفاوت هستند.
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
        <div className="max-w-md mx-auto">
          <Doughnut options={options} data={data} />
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار دونات چند لایه برای نمایش داده‌های
              مرتبط در چند سطح مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌ها در دو لایه داخلی و خارجی</li>
              <li>رنگ‌بندی متناسب برای هر بخش</li>
              <li>قابلیت تغییر بین مجموعه داده‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی هر بخش برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

