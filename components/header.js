"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "./theme-provider"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const menuItems = [
    { name: "صفحه اصلی", href: "/" },
    { name: "درباره من", href: "/about" },
    { name: "فرانت‌اند", href: "/frontend" },
    { name: "نقشه راه", href: "/roadmap" },
    { name: "نمونه کارها", href: "/portfolio" },
    { name: "چارت‌ها", href: "/charts" },
    // { name: "وبلاگ", href: "/blog" },
    // { name: "ویدیوها", href: "/videos" },
    { name: "تماس با من", href: "/contact" },
  ]

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              مهدیار کوشکی
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 mr-4"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Login/Register */}
            <div className="hidden md:flex items-center space-x-2 space-x-reverse mr-4">
              <Link
                href="/auth/login"
                className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              >
                ورود
              </Link>
              <Link
                href="/auth/register"
                className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                ثبت‌نام
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-2 space-x-reverse pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/auth/login"
                  className="flex-1 px-3 py-2 text-center rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ورود
                </Link>
                <Link
                  href="/auth/register"
                  className="flex-1 px-3 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ثبت‌نام
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

