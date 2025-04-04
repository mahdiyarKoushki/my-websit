import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeProvider from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "مهدیار کوشکی",
  description: "وب‌سایت شخصی مهدیار کوشکی، برنامه‌نویس فرانت‌اند با 5 سال تجربه در توسعه وب",
  keywords: ["مهدیار کوشکی", "برنامه‌نویس فرانت‌اند", "توسعه‌دهنده وب", "React", "Next.js", "JavaScript"],
  icons: {
    icon: "/images/profile.png",
    shortcut: "/images/profile.png",
    apple: "/images/profile.png",
    other: {
      rel: "/images/profile.png",
      url: "/images/profile.png",
    },
  },
  verification: {
    google: "8P_G3SLb8cE9-tFCk_JN0K_hYS5QUPEfVk1Y0d4KD80",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'