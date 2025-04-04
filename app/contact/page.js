import Link from "next/link"
import { Mail, Phone, MapPin, GitlabIcon as GitHub, Linkedin, Download } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">تماس با من</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          برای تماس با من و همکاری در پروژه‌های مختلف، از طریق راه‌های ارتباطی زیر اقدام کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">ایمیل</h3>
                  <a
                    href="mailto:mkoushki.79@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    mkoushki.79@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">تلفن</h3>
                  <a href="tel:09371402836" className="text-blue-600 dark:text-blue-400 hover:underline">
                  09371402836
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-1">موقعیت</h3>
                  <p>تهران، ایران</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">دانلود رزومه</h3>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
              >
                <Download className="ml-2" size={20} />
                دانلود رزومه
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">ساعات کاری</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>شنبه - چهارشنبه:</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>پنج‌شنبه:</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>جمعه:</span>
                <span>تعطیل</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block font-medium mb-2">
                موضوع
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                placeholder="موضوع پیام خود را وارد کنید"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-2">
                پیام
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                placeholder="پیام خود را وارد کنید"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">موقعیت مکانی</h2>
          <div className="h-96 bg-gray-200 dark:bg-zinc-800 rounded-lg overflow-hidden">
            {/* Placeholder for map */}
            <div className="w-full h-full flex items-center justify-center">
              <MapPin size={48} className="text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-medium mr-2">تهران، ایران</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

