import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, BarChart3, LineChart, PieChart } from "lucide-react"

export default function Home() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "D3.js", level: 85 },
    { name: "Chart.js", level: 90 },
  ]

  const projects = [
    {
      title: "داشبورد مدیریت",
      description: "داشبورد مدیریتی با انواع چارت‌ها و نمودارها برای تحلیل داده‌ها",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "D3.js", "Tailwind CSS"],
      link: "/portfolio/dashboard",
    },
    {
      title: "سیستم مدیریت محتوا",
      description: "CMS کامل با قابلیت‌های پیشرفته برای مدیریت محتوا",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "/portfolio/cms",
    },
    {
      title: "فروشگاه آنلاین",
      description: "فروشگاه آنلاین با قابلیت‌های سبد خرید، پرداخت و مدیریت محصولات",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Redux", "Express"],
      link: "/portfolio/shop",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">مهدیار کوشکی</h1>
            <h2 className="text-2xl md:text-3xl mb-6">توسعه‌دهنده فرانت‌اند</h2>
            <p className="text-lg mb-8">
              با 5 سال تجربه در طراحی و توسعه وب‌سایت‌های حرفه‌ای و تخصص در پیاده‌سازی انواع چارت‌ها و رابط‌های کاربری پیشرفته
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-bold transition-colors"
              >
                تماس با من
              </Link>
              <Link
                href="/resume.pdf"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-bold flex items-center transition-colors"
              >
                <Download className="ml-2" size={20} />
                دانلود رزومه
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-2147483648_-210168.jpg-iMjcJsFDj9g6opLNdo8JxR1FqDPsPv.jpeg"
                alt="مهدیار کوشکی"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title">درباره من</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001711_592.jpg-0Vi3wqAHEwLuqQU8tZW2LuzT7R1EGP.jpeg"
                    alt="مهدیار کوشکی"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001718_142.jpg-gmUWudEmkKGqP3nKa8QaepgqB490vA.jpeg"
                    alt="مهدیار کوشکی"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001652_632.jpg-V8Gpd2QPQUzpPlICLbMKfh0XMgLpek.jpeg"
                    alt="مهدیار کوشکی"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001657_439.jpg-1NamootXULq16gQuaExCAG1OBtgu5V.jpeg"
                    alt="مهدیار کوشکی"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                من مهدیار کوشکی هستم، یک توسعه‌دهنده فرانت‌اند با 5 سال تجربه در طراحی و توسعه وب‌سایت‌های حرفه‌ای. تخصص من
                در پیاده‌سازی رابط‌های کاربری پیشرفته، ریسپانسیو و بهینه‌سازی عملکرد وب‌سایت‌ها است.
              </p>
              <p className="text-lg mb-6">
                من در زمینه‌های HTML5، CSS3، JavaScript، React، Next.js، Node.js و کتابخانه‌های مختلف چارت مانند D3.js،
                Chart.js، eCharts و ApexCharts تخصص دارم. همچنین تجربه زیادی در کار با REST API و پیاده‌سازی انواع UI
                دارم.
              </p>
              <p className="text-lg mb-8">
                هدف من ارائه راه‌حل‌های خلاقانه و کاربرپسند برای مشتریان است که نه تنها از نظر ظاهری جذاب باشند، بلکه از
                نظر عملکرد و تجربه کاربری نیز در سطح بالایی قرار داشته باشند.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/frontend" className="btn-primary flex items-center">
                  درباره فرانت‌اند
                  <ArrowRight className="mr-2" size={16} />
                </Link>
                <Link href="/roadmap" className="btn-secondary flex items-center">
                  نقشه راه فرانت‌اند
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">مهارت‌های من</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title">نمونه کارهای اخیر</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                  >
                    مشاهده جزئیات
                    <ArrowRight className="mr-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-primary inline-flex items-center">
              مشاهده همه نمونه کارها
              <ArrowRight className="mr-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Charts Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">تخصص در انواع چارت‌ها</h2>
          <div className="text-center mb-10">
            <p className="text-lg max-w-3xl mx-auto">
              من در پیاده‌سازی انواع چارت‌ها با کتابخانه‌های مختلف مانند D3.js، Chart.js، eCharts، ApexCharts و
              LightningChart تخصص دارم. در ادامه نمونه‌هایی از چارت‌های پیاده‌سازی شده را مشاهده می‌کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                <BarChart3 size={80} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">نمودارهای ستونی</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                انواع نمودارهای ستونی برای نمایش مقایسه‌ای داده‌ها با قابلیت‌های پیشرفته
              </p>
              <Link
                href="/charts/bar"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده نمونه‌ها
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                <LineChart size={80} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">نمودارهای خطی</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                نمودارهای خطی پیشرفته برای نمایش روند داده‌ها در طول زمان
              </p>
              <Link
                href="/charts/line"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده نمونه‌ها
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                <PieChart size={80} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">نمودارهای دایره‌ای</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                نمودارهای دایره‌ای و حلقه‌ای برای نمایش سهم هر بخش از کل
              </p>
              <Link
                href="/charts/pie"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                مشاهده نمونه‌ها
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/charts" className="btn-primary inline-flex items-center">
              مشاهده همه چارت‌ها
              <ArrowRight className="mr-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده همکاری با شما هستم</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اگر به دنبال یک توسعه‌دهنده فرانت‌اند حرفه‌ای برای پروژه خود هستید، من آماده همکاری با شما هستم. با من تماس
            بگیرید تا درباره پروژه شما صحبت کنیم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-bold transition-colors"
            >
              تماس با من
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-bold transition-colors"
            >
              مشاهده نمونه کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

