/** @type {import('next').NextConfig} */
const nextConfig = {


    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en'
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },

};

export default nextConfig;
