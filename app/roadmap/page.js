import Link from "next/link"
import { ArrowRight, CheckCircle, Circle } from "lucide-react"

export default function RoadmapPage() {
  const beginnerSteps = [
    {
      title: "HTML5",
      description: "یادگیری ساختار و عناصر HTML5",
      completed: true,
      link: "/frontend/html5",
    },
    {
      title: "CSS3",
      description: "یادگیری استایل‌دهی و طراحی با CSS3",
      completed: true,
      link: "/frontend/css3",
    },
    {
      title: "جاوااسکریپت پایه",
      description: "یادگیری مفاهیم پایه جاوااسکریپت",
      completed: true,
      link: "/frontend/javascript-basics",
    },
    {
      title: "ریسپانسیو دیزاین",
      description: "یادگیری طراحی ریسپانسیو با میدیا کوئری‌ها",
      completed: true,
      link: "/frontend/responsive-design",
    },
    {
      title: "گیت و گیت‌هاب",
      description: "یادگیری کنترل نسخه با گیت و گیت‌هاب",
      completed: true,
      link: "/frontend/git",
    },
  ]

  const intermediateSteps = [
    {
      title: "جاوااسکریپت پیشرفته",
      description: "یادگیری مفاهیم پیشرفته جاوااسکریپت و ES6+",
      completed: true,
      link: "/frontend/advanced-javascript",
    },
    {
      title: "ساختارهای داده و الگوریتم‌ها",
      description: "یادگیری ساختارهای داده و الگوریتم‌های پایه",
      completed: true,
      link: "/frontend/data-structures",
    },
    {
      title: "فریم‌ورک‌های CSS",
      description: "یادگیری فریم‌ورک‌هایی مانند Bootstrap، Tailwind CSS",
      completed: true,
      link: "/frontend/css-frameworks",
    },
    {
      title: "پری‌پروسسورهای CSS",
      description: "یادگیری SASS، LESS یا Stylus",
      completed: true,
      link: "/frontend/css-preprocessors",
    },
    {
      title: "مدیریت حالت",
      description: "یادگیری مدیریت حالت با Redux، Context API",
      completed: true,
      link: "/frontend/state-management",
    },
  ]

  const advancedSteps = [
    {
      title: "فریم‌ورک‌های جاوااسکریپت",
      description: "تسلط بر React، Vue یا Angular",
      completed: true,
      link: "/frontend/js-frameworks",
    },
    {
      title: "SSR و SSG",
      description: "یادگیری Next.js، Gatsby یا Nuxt.js",
      completed: true,
      link: "/frontend/ssr-ssg",
    },
    {
      title: "تست نویسی",
      description: "یادگیری Jest، React Testing Library، Cypress",
      completed: true,
      link: "/frontend/testing",
    },
    {
      title: "PWA",
      description: "یادگیری ساخت Progressive Web Apps",
      completed: true,
      link: "/frontend/pwa",
    },
    {
      title: "WebGL و سه‌بعدی",
      description: "یادگیری Three.js و WebGL",
      completed: true,
      link: "/frontend/webgl",
    },
  ]

  const expertSteps = [
    {
      title: "معماری فرانت‌اند",
      description: "یادگیری الگوهای طراحی و معماری مقیاس‌پذیر",
      completed: true,
      link: "/frontend/architecture",
    },
    {
      title: "مایکروفرانت‌اندها",
      description: "یادگیری معماری مایکروفرانت‌اند",
      completed: true,
      link: "/frontend/micro-frontends",
    },
    {
      title: "بهینه‌سازی عملکرد",
      description: "تکنیک‌های پیشرفته بهینه‌سازی عملکرد",
      completed: true,
      link: "/frontend/performance",
    },
    {
      title: "امنیت فرانت‌اند",
      description: "یادگیری امنیت در فرانت‌اند",
      completed: true,
      link: "/frontend/security",
    },
    {
      title: "WebAssembly",
      description: "یادگیری WebAssembly و کاربردهای آن",
      completed: false,
      link: "/frontend/webassembly",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">نقشه راه فرانت‌اند</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            مسیر یادگیری و تبدیل شدن به یک توسعه‌دهنده فرانت‌اند حرفه‌ای را در این صفحه مشاهده کنید.
          </p>
          <div className="flex justify-center">
            <Link
              href="#beginner"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-bold transition-colors"
            >
              شروع کنید
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">چگونه یک توسعه‌دهنده فرانت‌اند شویم؟</h2>
            <p className="text-lg mb-6">
              تبدیل شدن به یک توسعه‌دهنده فرانت‌اند نیازمند یادگیری مجموعه‌ای از مهارت‌ها و تکنولوژی‌هاست. این نقشه راه به
              شما کمک می‌کند تا مسیر یادگیری خود را به صورت مرحله به مرحله طی کنید.
            </p>
            <p className="text-lg mb-6">این نقشه راه به چهار سطح تقسیم شده است:</p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li className="mb-2">
                <strong>مبتدی:</strong> مفاهیم پایه و اساسی
              </li>
              <li className="mb-2">
                <strong>متوسط:</strong> مفاهیم پیشرفته‌تر و ابزارهای حرفه‌ای
              </li>
              <li className="mb-2">
                <strong>پیشرفته:</strong> فریم‌ورک‌ها و تکنیک‌های پیشرفته
              </li>
              <li className="mb-2">
                <strong>خبره:</strong> مفاهیم پیچیده و تخصصی
              </li>
            </ul>
            <p className="text-lg">
              به یاد داشته باشید که این نقشه راه تنها یک راهنماست و مسیر یادگیری هر فرد می‌تواند متفاوت باشد. مهم‌ترین
              نکته، یادگیری مداوم و تمرین مستمر است.
            </p>
          </div>
        </div>
      </section>

      {/* Beginner Level */}
      <section id="beginner" className="py-16 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                1
              </div>
              <h2 className="text-3xl font-bold">سطح مبتدی</h2>
            </div>
            <p className="text-lg mb-8">
              در این سطح، شما با مفاهیم پایه و اساسی فرانت‌اند آشنا می‌شوید. این مرحله شامل یادگیری HTML، CSS و مفاهیم
              پایه جاوااسکریپت است.
            </p>

            <div className="space-y-6">
              {beginnerSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    {step.completed ? (
                      <CheckCircle className="text-green-500 mt-1 ml-4 flex-shrink-0" size={24} />
                    ) : (
                      <Circle className="text-gray-400 mt-1 ml-4 flex-shrink-0" size={24} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                      <Link
                        href={step.link}
                        className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                      >
                        مطالعه بیشتر
                        <ArrowRight className="mr-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate Level */}
      <section id="intermediate" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                2
              </div>
              <h2 className="text-3xl font-bold">سطح متوسط</h2>
            </div>
            <p className="text-lg mb-8">
              در این سطح، شما مفاهیم پیشرفته‌تر و ابزارهای حرفه‌ای را یاد می‌گیرید. این مرحله شامل یادگیری جاوااسکریپت
              پیشرفته، فریم‌ورک‌های CSS و مدیریت حالت است.
            </p>

            <div className="space-y-6">
              {intermediateSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    {step.completed ? (
                      <CheckCircle className="text-green-500 mt-1 ml-4 flex-shrink-0" size={24} />
                    ) : (
                      <Circle className="text-gray-400 mt-1 ml-4 flex-shrink-0" size={24} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                      <Link
                        href={step.link}
                        className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                      >
                        مطالعه بیشتر
                        <ArrowRight className="mr-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Level */}
      <section id="advanced" className="py-16 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                3
              </div>
              <h2 className="text-3xl font-bold">سطح پیشرفته</h2>
            </div>
            <p className="text-lg mb-8">
              در این سطح، شما با فریم‌ورک‌ها و تکنیک‌های پیشرفته آشنا می‌شوید. این مرحله شامل یادگیری فریم‌ورک‌های
              جاوااسکریپت، SSR، تست نویسی و PWA است.
            </p>

            <div className="space-y-6">
              {advancedSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    {step.completed ? (
                      <CheckCircle className="text-green-500 mt-1 ml-4 flex-shrink-0" size={24} />
                    ) : (
                      <Circle className="text-gray-400 mt-1 ml-4 flex-shrink-0" size={24} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                      <Link
                        href={step.link}
                        className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                      >
                        مطالعه بیشتر
                        <ArrowRight className="mr-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Level */}
      <section id="expert" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                4
              </div>
              <h2 className="text-3xl font-bold">سطح خبره</h2>
            </div>
            <p className="text-lg mb-8">
              در این سطح، شما با مفاهیم پیچیده و تخصصی آشنا می‌شوید. این مرحله شامل یادگیری معماری فرانت‌اند،
              مایکروفرانت‌اندها، بهینه‌سازی عملکرد و امنیت است.
            </p>

            <div className="space-y-6">
              {expertSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    {step.completed ? (
                      <CheckCircle className="text-green-500 mt-1 ml-4 flex-shrink-0" size={24} />
                    ) : (
                      <Circle className="text-gray-400 mt-1 ml-4 flex-shrink-0" size={24} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                      <Link
                        href={step.link}
                        className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                      >
                        مطالعه بیشتر
                        <ArrowRight className="mr-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">منابع یادگیری</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">دوره‌های آنلاین</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.udemy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Udemy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.coursera.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Coursera
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pluralsight.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Pluralsight
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://frontendmasters.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Frontend Masters
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">مستندات و آموزش‌ها</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://developer.mozilla.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      MDN Web Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3schools.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      W3Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://css-tricks.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      CSS-Tricks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://javascript.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      JavaScript.info
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">کتاب‌ها</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://eloquentjavascript.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Eloquent JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/getify/You-Dont-Know-JS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      You Don't Know JS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.oreilly.com/library/view/javascript-the-good/9780596517748/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      JavaScript: The Good Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.oreilly.com/library/view/css-the-definitive/9781492045533/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      CSS: The Definitive Guide
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">جوامع و انجمن‌ها</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://stackoverflow.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Stack Overflow
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      DEV Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/webdev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Reddit r/webdev
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/reactiflux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Reactiflux Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">آماده شروع هستید؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            حالا که با نقشه راه فرانت‌اند آشنا شدید، می‌توانید یادگیری خود را شروع کنید. برای مشاهده نمونه کارها و
            پروژه‌های من، به بخش نمونه کارها مراجعه کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/frontend"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-bold transition-colors"
            >
              مطالعه بیشتر درباره فرانت‌اند
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

