const {
  description
} = require('../../package')

const lokuswpSidebar = require('./sidebars/lokuswp');
const lwdonationSidebar = require('./sidebars/lwdonation');
const lwcommerceSidebar = require('./sidebars/lwcommerce');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LokusWP',
  base: '/panduan/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Pelajari cara menggunakan plugin dari LokusWP secara Optimal",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#121314'
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
    repo: 'lokuswp/panduan',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Kontribusi',
    editLinks: true,
    docsDir: 'src',
    editLinkText: true,
    editLinkText: 'Edit halaman ini melalui GitHub',
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
      '/lwdonation/': lwdonationSidebar,
      '/lwcommerce/': lwcommerceSidebar,
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