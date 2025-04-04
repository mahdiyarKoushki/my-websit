"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Download, Code, ArrowRight } from "lucide-react"
import { Bar, Line } from "react-chartjs-2"
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
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

export default function DashboardProjectPage() {
  // Sales Data
  const salesData = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        label: "فروش سال ۱۴۰۱",
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 85, 90],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "فروش سال ۱۴۰۲",
        data: [70, 65, 85, 88, 62, 60, 45, 50, 65, 75, 90, 95],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  }

  // Traffic Data
  const trafficData = {
    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
    datasets: [
      {
        fill: true,
        label: "بازدید",
        data: [1500, 1800, 2100, 1900, 2300, 2500, 2000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار فروش ماهانه",
      },
    },
  }

  const trafficOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "نمودار بازدید هفتگی",
      },
    },
  }

  const projectDetails = {
    title: "داشبورد مدیریت فروشگاه آنلاین",
    description:
      "این پروژه یک داشبورد مدیریتی برای فروشگاه آنلاین است که با استفاده از React، Chart.js و Tailwind CSS پیاده‌سازی شده است. این داشبورد امکان مشاهده آمار فروش، بازدید، محصولات پرفروش و سفارشات اخیر را فراهم می‌کند.",
    features: [
      "نمایش آمار فروش به صورت نمودار ستونی",
      "نمایش آمار بازدید به صورت نمودار خطی",
      "نمایش محصولات پرفروش",
      "نمایش سفارشات اخیر",
      "قابلیت فیلتر کردن داده‌ها بر اساس بازه زمانی",
      "طراحی ریسپانسیو برای تمام دستگاه‌ها",
    ],
    technologies: ["React", "Next.js", "Chart.js", "Tailwind CSS", "React Query", "React Table"],
    demoLink: "https://dashboard-demo.example.com",
    githubLink: "https://github.com/example/dashboard",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001723_538.jpg-EeKpJJh6LB3FN1ZQWxttcmgoCnQ16d.jpeg",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به نمونه کارها
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-80">
          <Image
            src={projectDetails.image || "/placeholder.svg"}
            alt={projectDetails.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{projectDetails.title}</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{projectDetails.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {projectDetails.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">نمودار فروش ماهانه</h2>
              <div className="h-64">
                <Bar options={salesOptions} data={salesData} />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">نمودار بازدید هفتگی</h2>
              <div className="h-64">
                <Line options={trafficOptions} data={trafficData} />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">ویژگی‌ها</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {projectDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">جزئیات فنی</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این داشبورد با استفاده از React و Next.js پیاده‌سازی شده است. برای نمایش نمودارها از کتابخانه Chart.js
              استفاده شده و برای استایل‌دهی از Tailwind CSS بهره گرفته‌ایم. همچنین برای مدیریت داده‌ها از React Query و
              برای نمایش جداول از React Table استفاده شده است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              این داشبورد به صورت کامل ریسپانسیو طراحی شده و در تمام دستگاه‌ها به خوبی نمایش داده می‌شود. همچنین از
              قابلیت‌های SSR در Next.js برای بهبود عملکرد و SEO استفاده شده است.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">کد نمونه</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`// نمونه کد برای نمودار فروش
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesChart() {
  const salesData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'فروش سال ۱۴۰۱',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'فروش سال ۱۴۰۲',
        data: [70, 65, 85, 88, 62, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
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
        text: 'نمودار فروش ماهانه',
      },
    },
  };

  return <Bar options={options} data={salesData} />;
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={projectDetails.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold flex items-center transition-colors"
            >
              <ExternalLink className="ml-2" size={20} />
              مشاهده دمو
            </a>
            <a
              href={projectDetails.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-bold flex items-center transition-colors"
            >
              <Code className="ml-2" size={20} />
              مشاهده کد
            </a>
            <a
              href="/files/dashboard-documentation.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold flex items-center transition-colors"
            >
              <Download className="ml-2" size={20} />
              دانلود مستندات
            </a>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">پروژه‌های مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="داشبورد تحلیل داده"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">داشبورد تحلیل داده</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                داشبورد تحلیل داده با نمودارهای پیشرفته و فیلترهای متنوع
              </p>
              <Link
                href="/portfolio/data-analytics"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده جزئیات
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="نمایشگر چارت‌های سه‌بعدی"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">نمایشگر چارت‌های سه‌بعدی</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">نمایش انواع چارت‌های سه‌بعدی با قابلیت تعامل</p>
              <Link
                href="/portfolio/3d-charts"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده جزئیات
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image src="/placeholder.svg?height=300&width=400" alt="فروشگاه آنلاین" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">فروشگاه آنلاین</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                فروشگاه آنلاین با قابلیت‌های سبد خرید، پرداخت و مدیریت محصولات
              </p>
              <Link
                href="/portfolio/ecommerce"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده جزئیات
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

