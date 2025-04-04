"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info, Calendar } from "lucide-react"
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

export default function LineChartPage() {
  const [timeRange, setTimeRange] = useState("1m")

  const timeRanges = [
    { id: "1w", name: "۱ هفته" },
    { id: "1m", name: "۱ ماه" },
    { id: "3m", name: "۳ ماه" },
    { id: "6m", name: "۶ ماه" },
    { id: "1y", name: "۱ سال" },
    { id: "5y", name: "۵ سال" },
  ]

  // Generate dates for x-axis based on selected time range
  const generateDates = (range) => {
    const dates = []
    const today = new Date()
    let days

    switch (range) {
      case "1w":
        days = 7
        break
      case "1m":
        days = 30
        break
      case "3m":
        days = 90
        break
      case "6m":
        days = 180
        break
      case "1y":
        days = 365
        break
      case "5y":
        days = 365 * 5
        break
      default:
        days = 30
    }

    for (let i = days; i >= 0; i--) {
      const date = new Date()
      date.setDate(today.getDate() - i)

      // Format date based on range
      let formattedDate
      if (range === "1w" || range === "1m") {
        formattedDate = date.toLocaleDateString("fa-IR", { day: "numeric", month: "numeric" })
      } else if (range === "3m" || range === "6m") {
        formattedDate = date.toLocaleDateString("fa-IR", { month: "short", day: "numeric" })
      } else {
        formattedDate = date.toLocaleDateString("fa-IR", { year: "numeric", month: "numeric" })
      }

      // Only add some dates to avoid overcrowding
      if (range === "5y" && i % 180 !== 0) continue
      if (range === "1y" && i % 30 !== 0) continue
      if (range === "6m" && i % 15 !== 0) continue
      if (range === "3m" && i % 7 !== 0) continue
      if (range === "1m" && i % 3 !== 0) continue

      dates.push(formattedDate)
    }

    return dates
  }

  // Generate stock price data
  const generateStockData = (range) => {
    const data = []
    let basePrice = 1000
    let volatility

    switch (range) {
      case "1w":
        volatility = 10
        break
      case "1m":
        volatility = 20
        break
      case "3m":
        volatility = 50
        break
      case "6m":
        volatility = 100
        break
      case "1y":
        volatility = 200
        break
      case "5y":
        volatility = 500
        break
      default:
        volatility = 20
    }

    let days
    switch (range) {
      case "1w":
        days = 7
        break
      case "1m":
        days = 30
        break
      case "3m":
        days = 90
        break
      case "6m":
        days = 180
        break
      case "1y":
        days = 365
        break
      case "5y":
        days = 365 * 5
        break
      default:
        days = 30
    }

    for (let i = 0; i <= days; i++) {
      // Add some randomness to the price
      const change = (Math.random() - 0.5) * volatility
      basePrice += change

      // Ensure price doesn't go below 100
      if (basePrice < 100) basePrice = 100

      // Only add some data points to match the dates
      if (range === "5y" && i % 180 !== 0) continue
      if (range === "1y" && i % 30 !== 0) continue
      if (range === "6m" && i % 15 !== 0) continue
      if (range === "3m" && i % 7 !== 0) continue
      if (range === "1m" && i % 3 !== 0) continue

      data.push(basePrice.toFixed(2))
    }

    return data
  }

  const dates = generateDates(timeRange)
  const stockData = generateStockData(timeRange)

  const data = {
    labels: dates,
    datasets: [
      {
        label: "قیمت سهام (تومان)",
        data: stockData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
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
        text: "نمودار روند قیمت سهام",
      },
      tooltip: {
        callbacks: {
          label: (context) => `قیمت: ${context.parsed.y} تومان`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => value + " تومان",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
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
        <h1 className="text-3xl font-bold mb-4">نمودار خطی روند قیمت سهام</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار روند قیمت سهام را در بازه‌های زمانی مختلف نمایش می‌دهد. می‌توانید با انتخاب بازه زمانی، داده‌های مربوط
          به آن بازه را مشاهده کنید.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {timeRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setTimeRange(range.id)}
              className={`px-4 py-2 text-sm font-medium ${
                timeRange === range.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                range === timeRanges[0] ? "rounded-r-md" : ""
              } ${range === timeRanges[timeRanges.length - 1] ? "rounded-l-md" : ""}`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center mb-4">
          <Calendar className="text-blue-600 dark:text-blue-400 ml-2" size={20} />
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {timeRange === "1w"
              ? "هفته اخیر"
              : timeRange === "1m"
                ? "ماه اخیر"
                : timeRange === "3m"
                  ? "۳ ماه اخیر"
                  : timeRange === "6m"
                    ? "۶ ماه اخیر"
                    : timeRange === "1y"
                      ? "سال اخیر"
                      : "۵ سال اخیر"}
          </div>
        </div>
        <Line options={options} data={data} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه ApexCharts پیاده‌سازی شده است. ApexCharts یک کتابخانه جاوااسکریپت برای
              ایجاد نمودارهای تعاملی و زیبا است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش روند قیمت سهام در بازه‌های زمانی مختلف</li>
              <li>قابلیت تغییر بازه زمانی (۱ هفته تا ۵ سال)</li>
              <li>نمایش tooltip با جزئیات قیمت در هر نقطه</li>
              <li>قابلیت زوم و اسکرول برای بررسی دقیق‌تر داده‌ها</li>
              <li>طراحی ریسپانسیو برای نمایش در تمام دستگاه‌ها</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">کد نمونه</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>
              {`import { Line } from 'react-chartjs-2';
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
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
  datasets: [
    {
      label: 'قیمت سهام (تومان)',
      data: [1200, 1300, 1250, 1400, 1350, 1500],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'نمودار روند قیمت سهام',
    },
  },
};

export default function StockChart() {
  return <Line options={options} data={data} />;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

