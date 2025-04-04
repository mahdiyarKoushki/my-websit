"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ThreeDChartPage() {
  const containerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    // Create scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(20, 20, 20)

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 20, 10)
    scene.add(directionalLight)

    // Add grid
    const gridHelper = new THREE.GridHelper(50, 50)
    scene.add(gridHelper)

    // Add axes
    const axesHelper = new THREE.AxesHelper(10)
    scene.add(axesHelper)

    // Population data (country, population in millions)
    const populationData = [
      { country: "چین", population: 1444, color: 0xff0000 },
      { country: "هند", population: 1393, color: 0x00ff00 },
      { country: "آمریکا", population: 332, color: 0x0000ff },
      { country: "اندونزی", population: 276, color: 0xffff00 },
      { country: "پاکستان", population: 225, color: 0xff00ff },
      { country: "برزیل", population: 213, color: 0x00ffff },
      { country: "نیجریه", population: 211, color: 0xffa500 },
      { country: "بنگلادش", population: 166, color: 0x800080 },
      { country: "روسیه", population: 146, color: 0x008000 },
      { country: "مکزیک", population: 130, color: 0x800000 },
      { country: "ژاپن", population: 126, color: 0x000080 },
      { country: "ایران", population: 85, color: 0x008080 },
    ]

    // Create 3D bars
    const bars = []
    const spacing = 5
    const maxHeight = 15
    const maxPopulation = Math.max(...populationData.map((d) => d.population))

    populationData.forEach((data, index) => {
      const height = (data.population / maxPopulation) * maxHeight
      const geometry = new THREE.BoxGeometry(2, height, 2)
      const material = new THREE.MeshPhongMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.8,
      })
      const bar = new THREE.Mesh(geometry, material)

      // Position the bar
      const row = Math.floor(index / 4)
      const col = index % 4
      bar.position.set(col * spacing - 7.5, height / 2, row * spacing - 7.5)

      // Add label
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      canvas.width = 256
      canvas.height = 128
      context.fillStyle = "#ffffff"
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.font = "bold 24px Arial"
      context.fillStyle = "#000000"
      context.textAlign = "center"
      context.fillText(data.country, canvas.width / 2, 40)
      context.fillText(`${data.population}M`, canvas.width / 2, 80)

      const texture = new THREE.CanvasTexture(canvas)
      const labelMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
      })
      const labelGeometry = new THREE.PlaneGeometry(3, 1.5)
      const label = new THREE.Mesh(labelGeometry, labelMaterial)
      label.position.set(0, height + 1, 0)
      label.rotation.x = -Math.PI / 2

      bar.add(label)
      scene.add(bar)
      bars.push(bar)
    })

    setIsLoading(false)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/charts" className="text-blue-600 dark:text-blue-400 flex items-center hover:underline">
          <ArrowLeft className="ml-2" size={16} />
          بازگشت به چارت‌ها
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">نمودار سه‌بعدی داده‌های جمعیتی</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          این نمودار جمعیت کشورهای مختلف را به صورت سه‌بعدی نمایش می‌دهد. می‌توانید با ماوس نمودار را بچرخانید و زوم کنید.
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg mb-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div ref={containerRef} className="h-96 w-full"></div>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="text-blue-600 dark:text-blue-400 mt-1 ml-4 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">درباره این چارت</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              این نمودار با استفاده از کتابخانه Three.js پیاده‌سازی شده است. Three.js یک کتابخانه جاوااسکریپت برای ایجاد
              و نمایش گرافیک سه‌بعدی در مرورگر است.
            </p>
            <p className="text-gray-700 dark:text-gray-300">ویژگی‌های این نمودار:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>نمایش داده‌های جمعیتی کشورها به صورت سه‌بعدی</li>
              <li>قابلیت چرخش و زوم با ماوس</li>
              <li>نمایش برچسب‌های اطلاعاتی برای هر کشور</li>
              <li>رنگ‌بندی متمایز برای هر کشور</li>
              <li>نمایش شبکه و محورهای مختصات</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">کد نمونه</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>
              {`import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(20, 20, 20);

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

// Population data
const populationData = [
  { country: 'چین', population: 1444, color: 0xff0000 },
  { country: 'هند', population: 1393, color: 0x00ff00 },
  { country: 'آمریکا', population: 332, color: 0x0000ff },
];

// Create 3D bars
populationData.forEach((data, index) => {
  const height = data.population / 100;
  const geometry = new THREE.BoxGeometry(2, height, 2);
  const material = new THREE.MeshPhongMaterial({
    color: data.color,
    transparent: true,
    opacity: 0.8,
  });
  const bar = new THREE.Mesh(geometry, material);
  bar.position.set(index * 5 - 5, height / 2, 0);
  scene.add(bar);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

