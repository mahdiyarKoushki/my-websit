import Link from "next/link"
import { ArrowRight, Code, Globe, Layers, Zap, Server } from "lucide-react"

export default function FrontendPage() {
  const articles = [
    {
      title: "مقدمه‌ای بر HTML5",
      description: "آشنایی با HTML5 و ویژگی‌های جدید آن",
      link: "/frontend/html5",
    },
    {
      title: "CSS3 و قدرت آن",
      description: "بررسی ویژگی‌های CSS3 و کاربردهای آن",
      link: "/frontend/css3",
    },
    {
      title: "جاوااسکریپت مدرن",
      description: "آشنایی با ویژگی‌های جدید جاوااسکریپت",
      link: "/frontend/modern-javascript",
    },
    {
      title: "ری‌اکت و کامپوننت‌ها",
      description: "آشنایی با ری‌اکت و مفهوم کامپوننت‌ها",
      link: "/frontend/react-components",
    },
    {
      title: "Next.js و SSR",
      description: "بررسی Next.js و مزایای رندر سمت سرور",
      link: "/frontend/nextjs-ssr",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">فرانت‌اند چیست؟</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            فرانت‌اند به بخشی از توسعه وب اشاره دارد که با آنچه کاربران می‌بینند و با آن تعامل دارند، سروکار دارد. این
            شامل طراحی، رابط کاربری و تجربه کاربری می‌شود.
          </p>
          <div className="flex justify-center">
            <Link
              href="#introduction"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-bold transition-colors"
            >
              بیشتر بخوانید
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">مقدمه‌ای بر توسعه فرانت‌اند</h2>
              <p className="text-lg mb-4">
                توسعه فرانت‌اند هنر و علم ساخت رابط‌های کاربری برای وب‌سایت‌ها و اپلیکیشن‌های وب است. یک توسعه‌دهنده فرانت‌اند
                مسئول پیاده‌سازی طراحی‌های بصری و تعاملی است که کاربران با آن‌ها تعامل دارند.
              </p>
              <p className="text-lg mb-4">فرانت‌اند با استفاده از سه تکنولوژی اصلی ساخته می‌شود:</p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li className="mb-2">
                  <strong>HTML (زبان نشانه‌گذاری ابرمتن):</strong> ساختار و محتوای صفحه
                </li>
                <li className="mb-2">
                  <strong>CSS (برگه‌های سبک آبشاری):</strong> استایل‌دهی و طراحی بصری
                </li>
                <li className="mb-2">
                  <strong>JavaScript:</strong> تعامل و پویایی صفحه
                </li>
              </ul>
              <p className="text-lg">
                امروزه، توسعه فرانت‌اند بسیار پیشرفته شده و شامل فریم‌ورک‌ها و کتابخانه‌هایی مانند React، Vue، Angular و
                Next.js می‌شود که کار توسعه‌دهندگان را ساده‌تر و کارآمدتر می‌کنند.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                <pre className="text-sm overflow-x-auto">
                  <code className="language-html">
                    {`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مثال ساده HTML</title>
  <style>
    body {
      font-family: 'Vazirmatn', sans-serif;
      background-color: #f5f5f5;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #3b82f6;
    }
    .btn {
      background-color: #3b82f6;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>به دنیای فرانت‌اند خوش آمدید!</h1>
    <p>این یک مثال ساده از HTML، CSS و JavaScript است.</p>
    <button class="btn" id="myButton">کلیک کنید</button>
  </div>

  <script>
    document.getElementById('myButton').addEventListener('click', function() {
      alert('شما دکمه را کلیک کردید!');
    });
  </script>
</body>
</html>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">تکنولوژی‌های اصلی فرانت‌اند</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">HTML5</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                HTML5 زبان نشانه‌گذاری استاندارد برای ساخت صفحات وب است. این زبان ساختار و محتوای صفحات وب را تعریف
                می‌کند.
              </p>
              <h4 className="font-bold mb-2">ویژگی‌های کلیدی:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                <li>عناصر معنایی مانند header، footer، article</li>
                <li>پشتیبانی از ویدیو و صدا</li>
                <li>عناصر canvas و svg برای گرافیک</li>
                <li>ذخیره‌سازی محلی و آفلاین</li>
              </ul>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded mb-4">
                <pre className="text-sm">
                  <code className="language-html">
                    {`<article>
  <h2>عنوان مقاله</h2>
  <p>متن مقاله...</p>
</article>`}
                  </code>
                </pre>
              </div>
              <Link
                href="/frontend/html5"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                بیشتر بخوانید
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Layers size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">CSS3</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CSS3 زبان استایل‌دهی است که ظاهر و قالب‌بندی عناصر HTML را کنترل می‌کند. با CSS3 می‌توان طراحی‌های پیچیده و
                زیبا ایجاد کرد.
              </p>
              <h4 className="font-bold mb-2">ویژگی‌های کلیدی:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                <li>انیمیشن‌ها و ترنزیشن‌ها</li>
                <li>طرح‌بندی فلکس و گرید</li>
                <li>سایه‌ها و گرادیان‌ها</li>
                <li>میدیا کوئری‌ها برای طراحی ریسپانسیو</li>
              </ul>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded mb-4">
                <pre className="text-sm">
                  <code className="language-css">
                    {`.card {
  display: flex;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}`}
                  </code>
                </pre>
              </div>
              <Link
                href="/frontend/css3"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                بیشتر بخوانید
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Zap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">JavaScript</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript زبان برنامه‌نویسی اصلی وب است که به صفحات وب قابلیت تعامل و پویایی می‌دهد. با JavaScript می‌توان
                رفتار صفحات وب را کنترل کرد.
              </p>
              <h4 className="font-bold mb-2">ویژگی‌های کلیدی:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                <li>زبان برنامه‌نویسی سمت کلاینت</li>
                <li>دستکاری DOM و رویدادها</li>
                <li>AJAX و ارتباط با سرور</li>
                <li>ES6+ با ویژگی‌های مدرن</li>
              </ul>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded mb-4">
                <pre className="text-sm">
                  <code className="language-javascript">
                    {`// مثال ساده فتچ API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(error => console.error(error));`}
                  </code>
                </pre>
              </div>
              <Link
                href="/frontend/javascript"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                بیشتر بخوانید
                <ArrowRight className="mr-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">فریم‌ورک‌ها و کتابخانه‌های محبوب</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Globe size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">React</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                React یک کتابخانه JavaScript برای ساخت رابط‌های کاربری است که توسط فیسبوک توسعه داده شده است. React با
                استفاده از مفهوم کامپوننت‌ها، توسعه رابط‌های کاربری را ساده‌تر می‌کند.
              </p>
              <h4 className="font-bold mb-2">ویژگی‌های کلیدی:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                <li>معماری مبتنی بر کامپوننت</li>
                <li>Virtual DOM برای عملکرد بهتر</li>
                <li>جریان داده یک‌طرفه</li>
                <li>اکوسیستم غنی و جامعه بزرگ</li>
              </ul>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded mb-4">
                <pre className="text-sm">
                  <code className="language-jsx">
                    {`function Welcome(props) {
  return <h1>سلام، {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="سارا" />
      <Welcome name="علی" />
    </div>
  );
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Server size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Next.js</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Next.js یک فریم‌ورک React است که امکانات رندر سمت سرور (SSR)، تولید سایت استاتیک (SSG) و بسیاری ویژگی‌های
                دیگر را فراهم می‌کند.
              </p>
              <h4 className="font-bold mb-2">ویژگی‌های کلیدی:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                <li>رندر سمت سرور و تولید استاتیک</li>
                <li>مسیریابی خودکار بر اساس فایل‌ها</li>
                <li>بهینه‌سازی تصاویر و فونت‌ها</li>
                <li>API Routes برای ساخت API</li>
              </ul>
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded mb-4">
                <pre className="text-sm">
                  <code className="language-jsx">
                    {`// pages/index.js
export default function Home({ products }) {
  return (
    <div>
      <h1>محصولات</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  return { props: { products } };
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">مقالات آموزشی</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
                <Link
                  href={article.link}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  ادامه مطلب
                  <ArrowRight className="mr-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">آماده یادگیری بیشتر هستید؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            برای یادگیری بیشتر درباره فرانت‌اند و مسیر حرفه‌ای در این زمینه، نقشه راه فرانت‌اند را مطالعه کنید.
          </p>
          <Link
            href="/roadmap"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-bold transition-colors"
          >
            مشاهده نقشه راه فرانت‌اند
          </Link>
        </div>
      </section>
    </div>
  )
}

