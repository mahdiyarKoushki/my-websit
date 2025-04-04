"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChartPage() {
  const [year, setYear] = useState("2023")

  const years = ["2021", "2022", "2023", "2024"]

  const data = {
    2021: {
      labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      datasets: [
        {
          label: "فروش (میلیون تومان)",
          data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 85, 90],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    2022: {
      labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      datasets: [
        {
          label: "فروش (میلیون تومان)",
          data: [70, 65, 85, 88, 62, 60, 45, 50, 65, 75, 90, 95],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    2023: {
      labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      datasets: [
        {
          label: "فروش (میلیون تومان)",
          data: [75, 70, 90, 95, 68, 65, 50, 55, 70, 80, 95, 100],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    2024: {
      labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      datasets: [
        {
          label: "فروش (میلیون تومان)",
          data: [80, 75, 95, 100, 75, 70, 55, 60, 75, 85, 100, 105],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `نمودار فروش ماهانه سال ${year}`,
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
        <h1 className="text-3xl font-bold mb-4">نمودار ستونی فروش ماهانه</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار فروش ماهانه را برای سال‌های مختلف نمایش می‌دهد. می‌توانید با انتخاب سال، داده‌های مربوط به آن سال را
          مشاهده کنید.
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
        <Bar options={options} data={data[year]} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. Chart.js یک کتابخانه جاوااسکریپت برای ایجاد
              نمودارهای زیبا و تعاملی است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌های فروش ماهانه</li>
              <li>قابلیت تغییر سال و مشاهده داده‌های سال‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی داده‌ها برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

