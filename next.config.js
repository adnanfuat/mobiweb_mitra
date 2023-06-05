/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {ignoreBuildErrors:true},
  images: {
    dangerouslyAllowSVG: true,
    domains: ['srcdn.sakaryarehberim.net', 'www.sakaryarehberim.com', 'lh3.googleusercontent.com'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['tr','en', 'fr', 'ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'tr',
    // localeDetection:true
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: 'example.com',
  //       defaultLocale: 'en-US',
  //     },
  //     {
  //       domain: 'example.nl',
  //       defaultLocale: 'nl-NL',
  //     },
  //     {
  //       domain: 'example.fr',
  //       defaultLocale: 'fr',
  //     },
  //   ],
  }

}

module.exports = nextConfig













