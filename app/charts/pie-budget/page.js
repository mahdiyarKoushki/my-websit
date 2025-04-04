"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Pie, Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChartPage() {
  const [chartType, setChartType] = useState("pie")
  const [dataType, setDataType] = useState("expenses")

  const chartTypes = [
    { id: "pie", name: "نمودار دایره‌ای" },
    { id: "doughnut", name: "نمودار حلقه‌ای" },
  ]

  const dataTypes = [
    { id: "expenses", name: "هزینه‌ها" },
    { id: "income", name: "درآمدها" },
  ]

  const expensesData = {
    labels: ["مسکن", "خوراک", "حمل و نقل", "تفریح", "آموزش", "پس‌انداز", "سایر"],
    datasets: [
      {
        label: "درصد",
        data: [35, 20, 15, 10, 8, 7, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(199, 199, 199, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const incomeData = {
    labels: ["حقوق", "سرمایه‌گذاری", "فریلنسینگ", "اجاره", "سایر"],
    datasets: [
      {
        label: "درصد",
        data: [60, 15, 12, 8, 5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(199, 199, 199, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const data = dataType === "expenses" ? expensesData : incomeData

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: dataType === "expenses" ? "توزیع هزینه‌های ماهانه" : "توزیع درآمدهای ماهانه",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
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
        <h1 className="text-3xl font-bold mb-4">نمودار دایره‌ای توزیع بودجه</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار توزیع بودجه را در قالب نمودار دایره‌ای یا حلقه‌ای نمایش می‌دهد. می‌توانید نوع نمودار و نوع داده را
          تغییر دهید.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-4">
        <div className="inline-flex rounded-md shadow-sm">
          {chartTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setChartType(type.id)}
              className={`px-4 py-2 text-sm font-medium ${
                chartType === type.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              } border border-gray-300 dark:border-zinc-700 ${
                type === chartTypes[0] ? "rounded-r-md" : "rounded-l-md"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

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
          {chartType === "pie" ? <Pie options={options} data={data} /> : <Doughnut options={options} data={data} />}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه eCharts پیاده‌سازی شده است. eCharts یک کتابخانه جاوااسکریپت قدرتمند برای
              ایجاد انواع نمودارها است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>

            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش توزیع بودجه به صورت درصدی</li>
              <li>قابلیت تغییر بین نمودار دایره‌ای و حلقه‌ای</li>
              <li>قابلیت تغییر بین نمایش هزینه‌ها و درآمدها</li>
              <li>نمایش tooltip با جزئیات هر بخش</li>
              <li>رنگ‌بندی متمایز برای هر بخش</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">کد نمونه</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>
              {`import { Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['مسکن', 'خوراک', 'حمل و نقل', 'تفریح', 'آموزش', 'پس‌انداز', 'سایر'],
  datasets: [
    {
      label: 'درصد',
      data: [35, 20, 15, 10, 8, 7, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(199, 199, 199, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)',
      ],
      borderWidth: 1,
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
      text: 'توزیع هزینه‌های ماهانه',
    },
  },
};

export default function BudgetChart() {
  return <Pie options={options} data={data} />;
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="mt-10 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">تحلیل داده‌ها</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          با توجه به نمودار هزینه‌ها، می‌توان مشاهده کرد که بیشترین سهم بودجه به مسکن اختصاص داده شده است (۳۵٪)، پس از آن
          خوراک (۲۰٪) و حمل و نقل (۱۵٪) قرار دارند. این توزیع نشان‌دهنده الگوی معمول هزینه‌های خانوار در ایران است.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          در نمودار درآمدها، حقوق با ۶۰٪ بیشترین سهم را دارد و پس از آن سرمایه‌گذاری (۱۵٪) و فریلنسینگ (۱۲٪) قرار دارند.
          این توزیع نشان می‌دهد که منبع اصلی درآمد، حقوق ثابت است و سایر منابع درآمدی سهم کمتری دارند.
        </p>
      </div>
    </div>
  )
}

