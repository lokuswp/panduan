const {
  description
} = require('../../package')

const lokuswpSidebar = require('./sidebars/lokuswp');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Panduan',
  base: '/panduan/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: 'src',
    editLinkText: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    displayAllHeaders: true,
    smoothScroll: true,
    search: true,
    nav: [{
        text: 'LokusWP',
        link: '/lokuswp/',
      },
      {
        text: 'LWCommerce',
        link: '/lwcommerce/'
      },
      {
        text: 'LWDonation',
        link: '/lwdonation/'
      }
    ],
    sidebar: {
      '/lokuswp/': lokuswpSidebar,
    }
  },

  /**
   * Markdown rules.
   * 
   * Ref：https://v1.vuepress.vuejs.org/config/#markdown
   */
  markdown: {
    lineNumbers: true,
    toc: true
  },

  /**
   * Apply vue plugins.
   * 
   * Ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh'
        }
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: () => 'https://avatars.githubusercontent.com/u/47606894',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ]
}