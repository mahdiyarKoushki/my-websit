"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Scatter } from "react-chartjs-2"
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export default function BubbleChartPage() {
  const [dataSet, setDataSet] = useState("main")

  const dataSets = [
    { id: "main", name: "داده‌های اصلی" },
    { id: "alternative", name: "داده‌های جایگزین" },
  ]

  const mainData = {
    datasets: [
      {
        label: "گروه آبی",
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 15, y: 25, r: 25 },
          { x: 30, y: 15, r: 8 },
        ],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
      {
        label: "گروه قرمز",
        data: [
          { x: 25, y: 15, r: 20 },
          { x: 10, y: 20, r: 15 },
          { x: 35, y: 5, r: 10 },
          { x: 5, y: 30, r: 18 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "گروه سبز",
        data: [
          { x: 30, y: 25, r: 12 },
          { x: 20, y: 15, r: 22 },
          { x: 15, y: 10, r: 8 },
          { x: 25, y: 5, r: 18 },
        ],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "گروه بنفش",
        data: [
          { x: 5, y: 5, r: 8 },
          { x: 10, y: 10, r: 15 },
          { x: 15, y: 20, r: 20 },
          { x: 20, y: 25, r: 25 },
        ],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
    ],
  }

  const alternativeData = {
    datasets: [
      {
        label: "دسته A",
        data: [
          { x: 10, y: 20, r: 20 },
          { x: 30, y: 15, r: 15 },
          { x: 25, y: 30, r: 10 },
          { x: 15, y: 10, r: 25 },
        ],
        backgroundColor: "rgba(255, 159, 64, 0.7)",
      },
      {
        label: "دسته B",
        data: [
          { x: 20, y: 10, r: 15 },
          { x: 15, y: 25, r: 10 },
          { x: 30, y: 20, r: 20 },
          { x: 10, y: 30, r: 12 },
        ],
        backgroundColor: "rgba(255, 205, 86, 0.7)",
      },
      {
        label: "دسته C",
        data: [
          { x: 5, y: 15, r: 10 },
          { x: 25, y: 5, r: 15 },
          { x: 20, y: 20, r: 8 },
          { x: 15, y: 15, r: 20 },
        ],
        backgroundColor: "rgba(201, 203, 207, 0.7)",
      },
    ],
  }

  const data = dataSet === "main" ? mainData : alternativeData

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار حبابی",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const point = context.raw
            return `${context.dataset.label}: (x: ${point.x}, y: ${point.y}, r: ${point.r})`
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 50,
        title: {
          display: true,
          text: "محور X",
        },
      },
      y: {
        min: 0,
        max: 50,
        title: {
          display: true,
          text: "محور Y",
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
        <h1 className="text-3xl font-bold mb-4">نمودار حبابی</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار داده‌ها را به صورت حباب‌هایی با اندازه‌های مختلف نمایش می‌دهد. هر حباب دارای سه بعد داده است: موقعیت X،
          موقعیت Y و اندازه (شعاع).
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          {dataSets.map((set) => (
            <button
              key={set.id}
              onClick={() => setDataSet(set.id)}
              className={`px-4 py-2 text-sm font-medium ${
                dataSet === set.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${set === dataSets[0] ? "rounded-r-md" : "rounded-l-md"}`}
            >
              {set.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        <Scatter options={options} data={data} height={400} />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Chart.js پیاده‌سازی شده است. نمودار حبابی برای نمایش داده‌هایی با سه بعد
              مناسب است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌ها در سه بعد: موقعیت X، موقعیت Y و اندازه (شعاع)</li>
              <li>رنگ‌بندی متفاوت برای هر گروه داده</li>
              <li>قابلیت تغییر بین مجموعه داده‌های مختلف</li>
              <li>نمایش راهنما و عنوان</li>
              <li>قابلیت هاور روی هر حباب برای مشاهده جزئیات</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

