/** @type {import('next').NextConfig} */
const nextConfig = {


    async redirects() {
      return [
        //{
        //   source: '/',
        //   destination: '/dashboard',
        //   permanent: false
        // },
      ]
    },

      // i18n: {
      //   locales: ["en", "de", "pl"],
      //   defaultLocale: "en",
      //   localeDetection: false
      // },


      // images: {
      //   loader: 'cloudinary',
      //   loaderFile: './cloudinary.js',
      // },

      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },

};

export default nextConfig;
