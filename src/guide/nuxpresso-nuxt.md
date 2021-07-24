# nuxpresso Static Site Generator

**nuxpresso-nuxt** is the static site generator used to publish your website. 

It generates your website based on the Strapi CMS content, based on the general settings, the pages and the templates connected to each content itself.

All settings and configuration, as well the content (articles) and relative layout/template are created using MOKAStudio.

**nuxpresso-nuxt** needs only some environment variables to connect to your Strapi CMS app.

> Please read the [configuration section](/guide/configuration.html#nuxpresso) before to run nuxpresso.

## Directory structure

### Pages

As default nuxpresso pages directory structure is

- pages
  - _slug
    - index.vue
  - category
    - _slug
      - index.vue
  - index.vue

As per above structure nuxpresso will publish the following pages 

- **http://_base_url_** : homepage
- **http://_base_url_/_article_slug_** : single page
- **http://_base_url_/category/_category_slug_**: list of pages of the same category


## Serverless Full Static

To generate a serverless full static version of your website ready to be deployed on your provider 

```
/nuxpresso/nuxpresso-nuxt $ yarn generate
```

### Assets

If you are using Strapi CMS without any media provider plugin like Cloudinary, AWS, etc. during the generate process all the images from the Strapi *./public/uploads* folder will be copied to the nuxpresso *./static/uploads* folder.

### Default routes

As indicated above the routes generated by nuxpresso are: 

- / : root 
- /_article_slug_ : single page
- /category/_category_slug : pages category list (generated only if you have categories)

### Custom routes

If you need to generate custom routes that are not linked from your pages you need to add to the routes during the generate process.


**Adding a custom route for a sample page**

Suppose we have an article with slug **hidden-page** that is not linked from any page, since the NUXTJS crawler will not find it, in order to load the page at the url *http://_your_domain_/hidden-page* you need to:

- update the *dynamicRoutes* function in *./nuxt.config.js*



```
...
import axios from 'axios'
let dynamicRoutes = () => {
  //do not remove the following line
  process.env.FULL_STATIC && LOCAL_ASSETS ? importAssets() : null

  //default nuxpresso dynamic routes generation if you are using categories
  return new Promise(resolve => {
    axios.get( process.env.API_URL + 'categories').then ( response => {
      if ( !response.data ) return null
      axios.get( process.env.API_URL + 'articles' ).then( response => {

        const cats = ['page','blog'] // array of your categories
        
        const categories = cats.map ( el => {
          return {
            route: '/category/' + el,
            payload: response.data
          }
        })
        //resolve ( categories ) //comment this line
        //your dynamic route goes here
        axios.get( process.env.API_URL + 'articles/<ARTICLE_ID>' ).then( response => {
          const myroute = 
            {
              route: '/' + response.data.slug,
              payload: response.data
            }
          
          resolve ( categories.concat(myroute) )
        })
      })
    })

    
  })
}

export default {
...
```

Replace *<ARTICLE_ID>* with page id (article ID)

The payload is important since NUXPRESSO will evaluate at loading if a payload is present and will use it as content. 

Otherwise your page will need to load the page from your Strapi CMS url and in full static you will get an error.

## First run

```
nuxpresso $ cd /nuxpresso-nuxt
nuxpresso/nuxpresso-nuxt $ yarn dev
```

Connect to [nuxpresso](http://localhost:3000)

By default a sample homepage will be displayed.


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
