"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Download, Code, ArrowRight } from "lucide-react"

export default function EcommerceProjectPage() {
  const projectDetails = {
    title: "فروشگاه آنلاین مدرن",
    description:
      "این پروژه یک فروشگاه آنلاین کامل با قابلیت‌های سبد خرید، پرداخت و مدیریت محصولات است که با استفاده از Next.js، Redux و MongoDB پیاده‌سازی شده است.",
    features: [
      "صفحه اصلی با نمایش محصولات ویژه و پرفروش",
      "صفحه محصولات با قابلیت فیلتر و جستجو",
      "صفحه جزئیات محصول با گالری تصاویر و نظرات",
      "سبد خرید با قابلیت افزودن، حذف و تغییر تعداد محصولات",
      "فرآیند پرداخت چند مرحله‌ای",
      "پنل مدیریت برای کنترل محصولات، سفارشات و کاربران",
      "سیستم احراز هویت کاربران",
      "طراحی ریسپانسیو برای تمام دستگاه‌ها",
    ],
    technologies: ["Next.js", "Redux", "MongoDB", "Tailwind CSS", "NextAuth.js", "Stripe", "React Query"],
    demoLink: "https://ecommerce-demo.example.com",
    githubLink: "https://github.com/example/ecommerce",
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
              <h2 className="text-xl font-bold mb-4">صفحه اصلی فروشگاه</h2>
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="صفحه اصلی فروشگاه"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">صفحه محصول</h2>
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="صفحه محصول"
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
              این فروشگاه آنلاین با استفاده از Next.js و App Router پیاده‌سازی شده است. برای مدیریت state از Redux
              استفاده شده و برای ذخیره‌سازی داده‌ها از MongoDB بهره گرفته‌ایم. همچنین برای احراز هویت کاربران از
              NextAuth.js و برای پرداخت آنلاین از Stripe استفاده شده است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              این فروشگاه به صورت کامل ریسپانسیو طراحی شده و در تمام دستگاه‌ها به خوبی نمایش داده می‌شود. همچنین از
              قابلیت‌های SSR در Next.js برای بهبود عملکرد و SEO استفاده شده است.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">کد نمونه</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`// نمونه کد برای صفحه محصول
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { useQuery } from 'react-query';
import { getProduct } from '@/lib/api';

export default function ProductPage({ params }) {
  const { id } = params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
  const { data: product, isLoading, error } = useQuery(['product', id], () => getProduct(id));
  
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در بارگذاری محصول</div>;
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    }));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">{product.price.toLocaleString()} تومان</p>
          <p className="mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-3 py-1 border border-gray-300 rounded-l-md"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="px-3 py-1 border border-gray-300 rounded-r-md"
            >
              +
            </button>
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
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
              href="/files/ecommerce-documentation.pdf"
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
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="اپلیکیشن مدیریت وظایف"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">اپلیکیشن مدیریت وظایف</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">اپلیکیشن مدیریت وظایف با قابلیت‌های پیشرفته</p>
              <Link
                href="/portfolio/task-manager"
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

