/** @type {import('next').NextConfig} */
//TODO: заменить Image component
module.exports = {
  nextConfig:{
    reactStrictMode: true,
  },
  images: {
    domains: ['i.scdn.co', 'lineup-images.scdn.co', 'mosaic.scdn.co', 'thisis-images.scdn.co', 'seed-mix-image.spotifycdn.com', 'newjams-images.scdn.co', 'seeded-session-images.scdn.co', 'daily-mix.scdn.co']
  },
}
