/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { 
        source: '/',
        destination:'/countries',
        permanent:true
      }
    ]
  },
  images: {
    loader: "akamai",
    path: "/",
  },
}

module.exports = nextConfig

//Above change is made to solve one error that I have faced. Read more about this  error here: https://github.com/vercel/next.js/discussions/38382
