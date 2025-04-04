"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Chart } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export default function ComboChartPage() {
  const [month, setMonth] = useState("may")

  const months = [
    { id: "april", name: "آوریل" },
    { id: "may", name: "می" },
    { id: "june", name: "ژوئن" },
  ]

  // Temperature data for different cities
  const aprilData = {
    labels: ["هفته 1", "هفته 2", "هفته 3", "هفته 4"],
    datasets: [
      {
        type: "bar",
        label: "تهران",
        data: [15, 18, 20, 22],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "شیراز",
        data: [17, 19, 21, 23],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "مشهد",
        data: [14, 16, 18, 20],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "میانگین",
        data: [15.3, 17.7, 19.7, 21.7],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  }

  const mayData = {
    labels: ["هفته 1", "هفته 2", "هفته 3", "هفته 4"],
    datasets: [
      {
        type: "bar",
        label: "تهران",
        data: [22, 24, 26, 28],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "شیراز",
        data: [23, 25, 27, 29],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "مشهد",
        data: [20, 22, 24, 26],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "میانگین",
        data: [21.7, 23.7, 25.7, 27.7],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  }

  const juneData = {
    labels: ["هفته 1", "هفته 2", "هفته 3", "هفته 4"],
    datasets: [
      {
        type: "bar",
        label: "تهران",
        data: [28, 30, 32, 34],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "شیراز",
        data: [29, 31, 33, 35],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "مشهد",
        data: [26, 28, 30, 32],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "میانگین",
        data: [27.7, 29.7, 31.7, 33.7],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  }

  const data = month === "april" ? aprilData : month === "may" ? mayData : juneData

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار دمای شهرهای مختلف",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}°C`,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "دما (سانتی‌گراد)",
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
        <h1 className="text-3xl font-bold mb-4">نمودار ترکیبی (میله‌ای و خطی)</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار دمای شهرهای مختلف را به صورت میله‌ای و میانگین دما را به صورت خط نمایش می‌دهد.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {months.map((m) => (
            <button
              key={m.id}
              onClick={() => setMonth(m.id)}
              className={`px-4 py-2 text-sm font-medium ${
                month === m.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                m === months[0] ? "rounded-r-md" : ""
              } ${m === months[months.length - 1] ? "rounded-l-md" : ""}`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <Chart type="bar" options={options} data={data} height={400} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار ترکیبی برای نمایش همزمان چند نوع داده
              با انواع مختلف نمودار مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش دمای شهرهای مختلف به صورت میله‌ای</li>
              <li>نمایش میانگین دما به صورت خط</li>
              <li>رنگ‌بندی متفاوت برای هر شهر</li>
              <li>قابلیت تغییر ماه برای مشاهده داده‌های ماه‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی داده‌ها برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

