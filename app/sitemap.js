export default function sitemap() {
  const baseUrl = "https://mahdiyar.koushky.ir"

  const routes = [
    "",
    "/frontend",
    "/roadmap",
    "/portfolio",
    "/charts",
    "/contact",
    "/charts/bar-monthly-sales",
    "/charts/line-stock-price",
    "/charts/pie-budget",
    "/charts/3d-population",
    "/charts/dashboard-sales",
    "/charts/heatmap-user-activity",
    "/charts/bar-comparison",
    "/charts/line-multiple",
    "/charts/3d-globe",
    "/frontend/html5",
    "/frontend/css3",
    "/frontend/javascript",
    "/frontend/modern-javascript",
    "/frontend/react-components",
    "/frontend/nextjs-ssr",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}

