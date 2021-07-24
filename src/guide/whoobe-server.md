# Whoobe Server

Whoobe Server is a zero configuration **Headless CMS** based on [FeathersJS](https://docs.feathersjs.com/).

Zero configuration because after cloning the repo and installing the dependencies your Whoobe Server is ready to go with some sample data to start with.


## REST API and REALTIME API

Whoobe Server as a headless CMS works as a REST API and REALTIME API to be used with Whoobe Studio and Whoobe Generator.

### REST API

| End point | GET/FIND Auth | POST/PUT/PATCH/DELETE Auth    |  Description|
| :---                      | :---          | :---          | :---
| articles      | No            | Yes                           | Content that will be published (pages, blog articles )
| categories    | No            | Yes                           | All system categories (article, products, blocks)
| components    | No            | Yes                           | Blocks created with Whoobe Studio
| elements      | No            | Yes                           | Elements available to create blocks
| media         | No            | Yes                           | Media assets management
| plugins       | No            | Yes                           | Whoobe Plugins
| products      | No            | Yes                           | Whoobe Store products
| resources     | Yes           | Yes                           | Used only to get all the resources (links, images, CSS and fonts used by a single block )
| settings      | Yes           | Yes                           | Whoobe general settings
| setup         | Yes           | Yes                           | Whoobe setup
| upload/file   | Yes           | Yes                           | Upload file, upload image from URL
| upload/delete | Yes           | Yes                           | Delete a single file from the uploads folder and remove from the media table
| users         | Yes           | Yes (if POST not required)    | User API

***There are other endpoints defined in Whoobe Server but they are used internally by the application***

### REALTIME API

Realtime API is a powerful features used by Whoobe. Whoobe Server is able to communicate any change to the  connected clients in realtime. Thus means that the client, when is set to listen to a defined change get the info about that change immediately.

Using Realtime API, Whoobe Studio performs different automations based on the changes info coming from Whoobe Server.

### API Reference

By default all endpoints support FIND/GET/POST/PUT/PATCH/DELETE methods. If one of these methods is not supported the service will return null or []

### Methods

**GET**

/_endpoint_/__id__ => id is required

Example
```/articles/12``` 

Get article with _id = 12

**FIND**

/_endpoint_?$params => if not params are passed will return first 20 records

Examples

*Filters:* 

/_endpoint_?__field__=__value__

```/articles?category=blog```    => returns first 20 articles with category=blog

*Search:* 

/_endpoint_?$search=__value__

```/articles?$search=my text```    => returns first 20 articles that contains __my text__ in the title or in the content

*Limit:*

You can override the limit with $limit params

/_endpoint_?$limit=__value__


```/articles?category=blog&$limit=50```    => returns first 50 articles with category=blog

Sorting

/_endpoint_?$sort[field]=1 (ASC Sort)

/_endpoint_?$sort[field]=-1 (DESC Sort)

```/articles?$sort[title]=1``` => Sort ascending by title

```/articles?$sort[title]=-1``` => Sort descending by title

**POST**

/_endpoint_

JSON data: 

```
{
    title: 'My new post',
    content: 'This is my first post',
    category: 'blog'
}
```

**PUT**

/_endpoint_/__id__ => id is required

```/articles/12```

JSON data: 


```
{
    title: 'My new post',
    content: 'This is my first blog post',
    category: 'blog'
}
```

Will update the article with _id = 12. Any other field in the record will be lost. Use PATCH method to update only passed fields

**PATCH**

/_endpoint_/__id__ => id is required

```/articles/12```

JSON data: 


```
{
    title: 'My new post'
}
```

Will patch the field title of the article with _id = 12

**DELETE**

/_endpoint_/__id__ => id is required

```/articles/12```

Will delete article with _id = 12

**For more information please read the official [FeathersJS API reference](https://docs.feathersjs.com/api/)**