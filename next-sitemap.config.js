/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://agrisensetech.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
