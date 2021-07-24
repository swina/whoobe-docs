const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'whoobe',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Whoobe Studio',
        link: '/studio/'
      },
      {
        text: 'Whoobe CMS',
        link: '/guide/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'installation',
            'configuration',
            'deploy',
            'workflow',
            'whoobe-server',
            'whoobe-studio',
            'whoobe-nuxt'
          ]
        }
      ],
      '/studio/' : [
        {
          title: 'Whoobe Studio',
          collapsable: true,
          children: [
            '',
            'menu',
            'dashboard',
            'blocks'
            // 'block-advanced',
            // 'block-editor',
            // 'block-create',
            // 'block-customizer',
            // 'block-customizer-extend',
            // 'block-library',
            // 'block-themes',
            // 'block-plugins',
            // 'cms',
            // 'media',
            // 'staging',
            // 'publish',
            // 'settings',
            // 'grid-templates'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
