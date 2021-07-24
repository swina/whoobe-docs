# Whoobe Generator

**Whoobe Generator** is the static site generator used to publish your website, ecommerce or landing page and it doesn't need any particular setting since the generation process is dynamic and is based on your settings directly from Whoobe Studio.

You don't need to run any console command to start the generation since it's integrated directly in Whoobe Studio.


**Whoobe Generator** required only some environment variables to connect to your Whoobe Server app, even if it will be automatically detected during the building process.


## Directory structure

### Pages

As default the pages structure is

- pages
  - _slug
    - index.vue
  - category (to be implemented)
    - _slug
      - index.vue
  - index.vue
  - store
    - category
      - _slug 
        - index.vue
    - product
      - _slug 
        - index.vue
    - index.vue

As per above structure nuxpresso will publish the following pages 

- **http://_base_url_** : homepage
- **http://_base_url_/_article_slug_** : single page
- **http://_base_url_/store** : store main page
- **http://_base_url_/store/_category_slug_**: store category 
- **http://_base_url_/store/product/_product_slug_**: store single product page 




### Assets

If you are using Whoobe Server without any media provider plugin like Cloudinary, AWS, etc. during the generate process all the images used by the website will be copied to the Whoobe Generator *./static/uploads* folder.


### Custom routes

If you need to generate custom routes that are not linked from your pages you need to add to the routes during the generate process. Check the file ./nuxt.config.js


**Adding a custom route for a sample page**

Suppose we have an article with slug **hidden-page** that is not linked from any page, in order to load the page at the url *http://_your_domain_/hidden-page* you need to:

- update the *dynamicRoutes* function in *./nuxt.config.js*
- identify the line //add here your custom route slug
- set your custom route/routes at the line //slugs.push ( __your_article_slug__ )
- uncomment the above line


```
...

//default dynamic routes used by whoobe
let dynamicRoutes = () => {

  return new Promise( (resolve) => {
    whoobe.service('build-nuxt').find().then ( res => {
      let slugs = res.data[0].pagesToPublish

      //*** add here your custom route slug ***
      //slugs.push ( '__your_article_slug__' )
      //*** end of the custom route

      return slugs
    }).then ( slugs => {
      whoobe.service('articles').find({ query: { $limit: 200, slug: { $in: slugs } }}).then ( response => { 
        let articles = response.data.map ( page => {
          return {
            route: '/' + page.slug,
            payload: page
          }
        })
        return articles
      }).then ( data => {
        if ( config.store ){
          whoobe.service('products').find({ query: { $limit: 200 }}).then ( response => { 
            let products = response.data.map( product => {
              return {
                route: '/store/product/' + product.slug,
                payload: product
              }
            }))
            return [ ...data , ...products ]
          }).then ( prods => {
            whoobe.service('categories').find ( { query: { $limit: 200 , type: 'product' } }).then ( response => {
              let categories = response.data.map ( category => {
                return {
                  route: '/store/category/' + category.slug,
                  payload: category
                }
              })
              resolve ( [ ...prods , ...categories ])
            })
          })
        } else {
          //resolve ([])
          resolve ( data )
        }
      })
    })
  })
}
...
```



## Google Analytics

nuxpresso by default install the package **@nuxtjs/google-analytics**.
If you are not planning to use Google Analytics on your website remove with

```
yarn remove @nuxtjs/google-analytics
```

Then update **./nuxt.config.js** removing 

```
    ....
    /*
    ** GOOGLE ANALYTICS remove if you don't use
    */
    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS || 'UA-XXX-X'
    }
    ...
```

and remove from the buildModules


```
  buildModules: [
     ...
    '@nuxtjs/google-analytics'
  ],
```

