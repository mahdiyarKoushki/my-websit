import { Vazirmatn } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeProvider from "@/components/theme-provider"

const vazirmatn = Vazirmatn({ subsets: ["arabic"] })

export const metadata = {
  title: "مهدیار کوشکی | برنامه‌نویس فرانت‌اند و توسعه‌دهنده وب",
  description: "وب‌سایت شخصی مهدیار کوشکی، برنامه‌نویس فرانت‌اند با 5 سال تجربه در توسعه وب، متخصص در React، Next.js و JavaScript. مهدی کوشکی، فرانت اند دولوپر و برنامه نویسی وبسایت.",
  keywords: ["مهدیار کوشکی", "مهدی کوشکی", "برنامه‌نویس فرانت‌اند", "توسعه‌دهنده وب", "فرانت اند دولوپر", "برنامه نویسی وبسایت", "React", "Next.js", "JavaScript"],
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
      <body className={vazirmatn.className}>
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
