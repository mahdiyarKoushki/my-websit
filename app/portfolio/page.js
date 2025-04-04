import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    { id: "all", name: "همه" },
    { id: "web", name: "وب‌سایت" },
    { id: "dashboard", name: "داشبورد" },
    { id: "ecommerce", name: "فروشگاه" },
    { id: "chart", name: "چارت و نمودار" },
  ]

  const projects = [
    {
      id: 1,
      title: "داشبورد مدیریت",
      description: "داشبورد مدیریتی با انواع چارت‌ها و نمودارها برای تحلیل داده‌ها",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250327_001723_538.jpg-EeKpJJh6LB3FN1ZQWxttcmgoCnQ16d.jpeg",
      category: "dashboard",
      technologies: ["React", "D3.js", "Tailwind CSS"],
      link: "/portfolio/dashboard",
      demoLink: "https://dashboard-demo.example.com",
    },
    {
      id: 2,
      title: "فروشگاه آنلاین",
      description: "فروشگاه آنلاین با قابلیت‌های سبد خرید، پرداخت و مدیریت محصولات",
      image: "/placeholder.svg?height=300&width=400",
      category: "ecommerce",
      technologies: ["Next.js", "Redux", "MongoDB"],
      link: "/portfolio/ecommerce",
      demoLink: "https://shop-demo.example.com",
    },
    {
      id: 3,
      title: "وب‌سایت شرکتی",
      description: "وب‌سایت شرکتی با طراحی مدرن و ریسپانسیو",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "/portfolio/corporate",
      demoLink: "https://corporate-demo.example.com",
    },
    {
      id: 4,
      title: "داشبورد تحلیل داده",
      description: "داشبورد تحلیل داده با نمودارهای پیشرفته و فیلترهای متنوع",
      image: "/placeholder.svg?height=300&width=400",
      category: "dashboard",
      technologies: ["React", "ApexCharts", "Material UI"],
      link: "/portfolio/data-analytics",
      demoLink: "https://analytics-demo.example.com",
    },
    {
      id: 5,
      title: "نمایشگر چارت‌های سه‌بعدی",
      description: "نمایش انواع چارت‌های سه‌بعدی با قابلیت تعامل",
      image: "/placeholder.svg?height=300&width=400",
      category: "chart",
      technologies: ["Three.js", "D3.js", "React"],
      link: "/portfolio/3d-charts",
      demoLink: "https://3d-charts-demo.example.com",
    },
    {
      id: 6,
      title: "اپلیکیشن مدیریت وظایف",
      description: "اپلیکیشن مدیریت وظایف با قابلیت‌های پیشرفته",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      technologies: ["React", "Redux", "Firebase"],
      link: "/portfolio/task-manager",
      demoLink: "https://task-manager-demo.example.com",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">نمونه کارها</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          در این بخش می‌توانید نمونه‌هایی از پروژه‌های انجام شده توسط من را مشاهده کنید. هر پروژه با استفاده از تکنولوژی‌های
          مختلف و برای اهداف متفاوتی طراحی و پیاده‌سازی شده است.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
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
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Link
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  جزئیات بیشتر
                  <ArrowRight className="mr-2" size={16} />
                </Link>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  نسخه نمایشی
                  <ExternalLink className="mr-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">به دنبال همکاری هستید؟</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          اگر به دنبال یک توسعه‌دهنده فرانت‌اند حرفه‌ای برای پروژه خود هستید، من آماده همکاری با شما هستم. با من تماس
          بگیرید تا درباره پروژه شما صحبت کنیم.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold transition-colors"
        >
          تماس با من
        </Link>
      </div>
    </div>
  )
}

