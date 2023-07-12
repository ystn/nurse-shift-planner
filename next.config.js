/** @type {import('next').NextConfig} */
 
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src 'self';
  style-src 'self';
  font-src 'self';
`

const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    //                 }
    //             ]
    //         }
    //     ]
    // }
}

module.exports = nextConfig
