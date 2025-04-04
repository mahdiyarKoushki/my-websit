import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-zinc-900 shadow-inner pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">مهدیار کوشکی</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              برنامه‌نویس فرانت‌اند با 5 سال تجربه در طراحی و توسعه وب‌سایت‌های حرفه‌ای
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://github.com/mahdiyarKoushki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://t.me/m_koushki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Send size={20} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mkoushki.79@gmil.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+989371402836"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/frontend"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  فرانت‌اند
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  نقشه راه
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link
                  href="/charts"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  چارت‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  تماس با من
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">مهارت‌ها</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                HTML5
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                CSS3
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                JavaScript
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                Next.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                Node.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                REST API
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                D3.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                Chart.js
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                eCharts
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-600 dark:text-gray-300">
          <p>© {currentYear} مهدیار کوشکی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

