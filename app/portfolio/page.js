import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "سایت شخصی ",
      description: "",
      image:
               "/images/mkoushki.png",
      category: "dashboard",
      technologies: ["html","css","js"],
      link: "https://mkoushki.ir/",
      demoLink: "https://mkoushki.ir/",
      githubLink: "https://github.com/mahdiyarKoushki/mahdiyarkoushki.github.io",
    },
    {
      id: 2,
      title: "سایت لوله کشی  ",
      description: "وب‌سایت بهروز کوشکی، پلتفرمی برای معرفی و ارائه خدمات حرفه‌ای ساختمانی در تهران، از جمله لوله‌کشی، تشخیص ترکیدگی، رفع نم و کاشی‌کاری، با بیش از ۱۵ سال تجربه است.",
      image:
        "/images/lolekeshi.png",
      category: "dashboard",
      technologies: [ "next.js", "Tailwind CSS"],
      link: "https://behrooz.koushky.ir",
      demoLink: "https://behrooz.koushky.ir/",
      githubLink: "https://github.com/mahdiyarKoushki/site-behroozkoushki",
    },
    {
      id: 3,
      title: "تودو لیست مایکروسافت  ",
      description: "تودو لیست (To-Do List) یا لیست انجام کارها، یک ابزار ساده و در عین حال قدرتمند برای سازماندهی، اولویت‌بندی و مدیریت وظایف روزانه، هفتگی یا در یک بازه زمانی مشخص است.",
      image:
        "/images/todo.png",
      category: "dashboard",
      technologies: [ "react.js"],
      link: "https://todo-list-microsoft.vercel.app/tasks",
      demoLink: "https://todo-list-microsoft.vercel.app/tasks/",
      githubLink: "https://github.com/mahdiyarKoushki/todo-list-microsoft",
    },
    {
      id: 4,
      title: "Panel Admin",
      description: "panel admin",
      image:"/images/panelAdmin.png",
      category: "dashboard",
      technologies: [ "react.js"],
      link: "https://admin-panel-koushki-io.vercel.app/Home",
      demoLink: "https://admin-panel-koushki-io.vercel.app/Home/",
      githubLink: "https://github.com/mahdiyarKoushki/admin-panel",
    },
    {
      id: 5,
      title: " سبد  خرید ",
      description: " سبد  خرید ",
      image:"/images/production.png",
      category: "dashboard",
      technologies: [ "react.js"],
      link: "https://cart-react-redux-9ni9kltg8-koushki-io.vercel.app/products",
      demoLink: "https://cart-react-redux-9ni9kltg8-koushki-io.vercel.app/products/",
      githubLink: "https://github.com/mahdiyarKoushki/cart-redux?tab=readme-ov-file",
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  جزئیات بیشتر
                  <ArrowRight className="mr-2" size={16} />
                </Link>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                )}
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
