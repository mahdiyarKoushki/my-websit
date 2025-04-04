"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Download, Code, ArrowRight } from "lucide-react"

export default function TaskManagerProjectPage() {
  const projectDetails = {
    title: "اپلیکیشن مدیریت وظایف",
    description:
      "این پروژه یک اپلیکیشن مدیریت وظایف با قابلیت‌های پیشرفته است که با استفاده از React، Redux و Firebase پیاده‌سازی شده است.",
    features: [
      "ایجاد، ویرایش و حذف وظایف",
      "دسته‌بندی وظایف با برچسب‌ها",
      "تعیین اولویت و تاریخ سررسید",
      "فیلتر و جستجوی وظایف",
      "نمایش وظایف به صورت لیست یا کانبان",
      "یادآوری وظایف با نوتیفیکیشن",
      "همگام‌سازی وظایف بین دستگاه‌های مختلف",
      "طراحی ریسپانسیو برای تمام دستگاه‌ها",
    ],
    technologies: ["React", "Redux", "Firebase", "Tailwind CSS", "React DnD", "React Query", "PWA"],
    demoLink: "https://task-manager-demo.example.com",
    githubLink: "https://github.com/example/task-manager",
    image: "/placeholder.svg?height=500&width=1000",
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
              <h2 className="text-xl font-bold mb-4">نمای لیست وظایف</h2>
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="نمای لیست وظایف"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">نمای کانبان</h2>
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="نمای کانبان"
                  fill
                  className="object-cover rounded-md"
                />
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
              این اپلیکیشن با استفاده از React و Redux پیاده‌سازی شده است. برای ذخیره‌سازی داده‌ها از Firebase Firestore
              استفاده شده و برای احراز هویت کاربران از Firebase Authentication بهره گرفته‌ایم. همچنین برای قابلیت کشیدن و
              رها کردن (Drag and Drop) در نمای کانبان از کتابخانه React DnD استفاده شده است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              این اپلیکیشن به صورت PWA (Progressive Web App) پیاده‌سازی شده و قابلیت نصب روی دستگاه‌های مختلف را دارد.
              همچنین به صورت کامل ریسپانسیو طراحی شده و در تمام دستگاه‌ها به خوبی نمایش داده می‌شود.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">کد نمونه</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`// نمونه کد برای کامپوننت TaskList
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTask, deleteTask } from '@/redux/tasksSlice';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';

export default function TaskList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.tasks);
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  const handleStatusChange = (taskId, newStatus) => {
    dispatch(updateTask({ id: taskId, status: newStatus }));
  };
  
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  
  const filteredTasks = tasks.filter(task => {
    // فیلتر بر اساس وضعیت
    if (filter !== 'all' && task.status !== filter) return false;
    
    // فیلتر بر اساس جستجو
    if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    return true;
  });
  
  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در بارگذاری وظایف</div>;
  
  return (
    <div>
      <TaskFilter 
        filter={filter} 
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">هیچ وظیفه‌ای یافت نشد</div>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
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
              href="/files/task-manager-documentation.pdf"
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
              <Image src="/placeholder.svg?height=300&width=400" alt="داشبورد مدیریت" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">داشبورد مدیریت</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                داشبورد مدیریتی با انواع چارت‌ها و نمودارها برای تحلیل داده‌ها
              </p>
              <Link
                href="/portfolio/dashboard"
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

          <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 relative">
              <Image src="/placeholder.svg?height=300&width=400" alt="وب‌سایت شرکتی" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">وب‌سایت شرکتی</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">وب‌سایت شرکتی با طراحی مدرن و ریسپانسیو</p>
              <Link
                href="/portfolio/corporate"
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

