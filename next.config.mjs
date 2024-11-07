/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth',
        permanent: false,
      },
    ];
  },
  
};

export default nextConfig;
