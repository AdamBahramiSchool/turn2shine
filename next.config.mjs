/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem',
    },
  },
};

export default nextConfig;
