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
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function SineWaveChartPage() {
  const [period, setPeriod] = useState("monthly")

  const periods = [
    { id: "monthly", name: "ماهانه" },
    { id: "quarterly", name: "فصلی" },
    { id: "yearly", name: "سالانه" },
  ]

  // Generate data points for sine waves
  const generateSineWave = (amplitude, frequency, phase, points) => {
    const data = []
    for (let i = 0; i < points; i++) {
      const x = (i / points) * Math.PI * 2
      data.push(amplitude * Math.sin(frequency * x + phase))
    }
    return data
  }

  // Generate labels
  const generateLabels = (count) => {
    const labels = []
    for (let i = 0; i < count; i++) {
      labels.push(i.toString())
    }
    return labels
  }

  const points = 50
  const labels = generateLabels(points)

  const data = {
    labels,
    datasets: [
      {
        label: "موج قرمز",
        data: generateSineWave(1, 1, 0, points),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "موج آبی",
        data: generateSineWave(0.8, 1.5, Math.PI / 4, points),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "موج نارنجی",
        data: generateSineWave(1.2, 0.8, Math.PI / 2, points),
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
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
        text: "نمودار موج سینوسی",
      },
    },
    scales: {
      y: {
        min: -1.5,
        max: 1.5,
        title: {
          display: true,
          text: "مقدار",
        },
      },
      x: {
        title: {
          display: true,
          text: "زمان",
        },
        ticks: {
          maxTicksLimit: 10,
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
        <h1 className="text-3xl font-bold mb-4">نمودار موج سینوسی</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار الگوهای موج سینوسی را با فرکانس‌ها و فازهای مختلف نمایش می‌دهد. این نوع نمودار برای نمایش داده‌های
          نوسانی مانند سیگنال‌ها مناسب است.
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
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار موج سینوسی برای نمایش داده‌های نوسانی
              و دوره‌ای مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش چندین موج سینوسی با فرکانس‌ها و فازهای مختلف</li>
              <li>رنگ‌بندی متفاوت برای هر موج</li>
              <li>قابلیت تغییر دوره زمانی</li>
              <li>نمایش راهنما و عنوان</li>
              <li>خطوط نرم و منحنی برای نمایش بهتر موج‌ها</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

