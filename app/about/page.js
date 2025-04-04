import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Github, Send, Calendar, MapPin, Briefcase, GraduationCap, Code } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">درباره من</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">با من بیشتر آشنا شوید</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-2147483648_-210168.jpg-iMjcJsFDj9g6opLNdo8JxR1FqDPsPv.jpeg"
                    alt="مهدیار کوشکی"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">مهدیار کوشکی</h2>
              <p className="text-center mb-6">توسعه‌دهنده فرانت‌اند حرفه‌ای</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="ml-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm opacity-75">تاریخ تولد</p>
                    <p>۱ مرداد ۱۳۷۹</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="ml-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm opacity-75">موقعیت</p>
                    <p>تهران، ایران</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="ml-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm opacity-75">شغل</p>
                    <p>توسعه‌دهنده فرانت‌اند</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="ml-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm opacity-75">تحصیلات</p>
                    <p>کارشناسی مهندسی کامپیوتر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">بیوگرافی</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                من مهدیار کوشکی هستم، متولد ۱ مرداد ۱۳۷۹، یک توسعه‌دهنده فرانت‌اند با تجربه و علاقه‌مند به طراحی و توسعه
                رابط‌های کاربری مدرن و کاربرپسند. با بیش از ۵ سال تجربه در زمینه توسعه وب، تخصص من در استفاده از
                تکنولوژی‌های پیشرفته فرانت‌اند مانند React، Next.js و انواع کتابخانه‌های چارت و نمودار است.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                من همواره در حال یادگیری و به‌روزرسانی دانش خود در زمینه فناوری‌های جدید هستم و به دنبال چالش‌های جدید برای
                رشد حرفه‌ای خود می‌باشم. علاوه بر مهارت‌های فنی، من به کار تیمی، حل مسئله و ارتباط مؤثر با مشتریان و
                همکاران اهمیت زیادی می‌دهم.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                هدف من ارائه راه‌حل‌های خلاقانه و کاربرپسند برای مشتریان است که نه تنها از نظر ظاهری جذاب باشند، بلکه از
                نظر عملکرد و تجربه کاربری نیز در سطح بالایی قرار داشته باشند.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">اطلاعات تماس</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+989371402836"
                  className="flex items-center p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Phone className="text-blue-600 dark:text-blue-400 ml-4" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">تلفن</p>
                    <p className="font-medium">۰۹۳۷۱۴۰۲۸۳۶</p>
                  </div>
                </a>

                <a
                  href="mailto:mkoushki.79@gmil.com"
                  className="flex items-center p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Mail className="text-blue-600 dark:text-blue-400 ml-4" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ایمیل</p>
                    <p className="font-medium">mkoushki.79@gmil.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/mahdiyarKoushki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Github className="text-blue-600 dark:text-blue-400 ml-4" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">گیت‌هاب</p>
                    <p className="font-medium">mahdiyarKoushki</p>
                  </div>
                </a>

                <a
                  href="https://t.me/m_koushki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Send className="text-blue-600 dark:text-blue-400 ml-4" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">تلگرام</p>
                    <p className="font-medium">@m_koushki</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">مهارت‌های تخصصی</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Code className="ml-2" size={20} />
                  زبان‌های برنامه‌نویسی
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">HTML5</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">CSS3</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">TypeScript</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Code className="ml-2" size={20} />
                  فریم‌ورک‌ها و کتابخانه‌ها
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Next.js</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Tailwind CSS</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Chart.js / D3.js</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">تجربیات کاری</h3>
            <div className="space-y-8">
              <div className="relative pr-8 pb-8 border-r-2 border-blue-500 dark:border-blue-400">
                <div className="absolute top-0 right-[-9px] w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">توسعه‌دهنده ارشد فرانت‌اند</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">شرکت فناوری نوین | ۱۴۰۱ - اکنون</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    توسعه و پیاده‌سازی رابط‌های کاربری پیشرفته با استفاده از React و Next.js، طراحی و پیاده‌سازی داشبوردهای
                    مدیریتی با انواع چارت‌ها و نمودارها، بهینه‌سازی عملکرد وب‌سایت‌ها و همکاری با تیم‌های طراحی و بک‌اند.
                  </p>
                </div>
              </div>

              <div className="relative pr-8 pb-8 border-r-2 border-blue-500 dark:border-blue-400">
                <div className="absolute top-0 right-[-9px] w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">توسعه‌دهنده فرانت‌اند</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">استودیو طراحی وب | ۱۳۹۹ - ۱۴۰۱</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    طراحی و توسعه وب‌سایت‌های ریسپانسیو با استفاده از HTML، CSS و JavaScript، پیاده‌سازی رابط‌های کاربری با
                    React، همکاری با طراحان UI/UX و پیاده‌سازی طرح‌های آن‌ها.
                  </p>
                </div>
              </div>

              <div className="relative pr-8">
                <div className="absolute top-0 right-[-9px] w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">کارآموز فرانت‌اند</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">شرکت توسعه نرم‌افزار | ۱۳۹۸ - ۱۳۹۹</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    یادگیری اصول توسعه فرانت‌اند، کار با HTML، CSS و JavaScript، آشنایی با فریم‌ورک‌های مختلف و مشارکت در
                    پروژه‌های کوچک.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold inline-block transition-colors"
          >
            تماس با من
          </Link>
        </div>
      </div>
    </div>
  )
}

