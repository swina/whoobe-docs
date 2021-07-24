# Introduction


**Whoobe Studio** is a browser app create, manage and generate your websites, ecommerce or landing pages, created to improve the creative experience of developers.

<!--<video width="100%" controls="true">
    <source src="https://res.cloudinary.com/moodgiver/video/upload/v1611771844/MOKA_Studio_Options_b543bd6ed3.webm">
</video>-->


## Terminology

| Term | Description
| :------- | :--- |
| **Article** | represent a content saved in your CMS 
| **Category** | used to classify and organize articles, blocks, products 
| **Document** | refers to a saved block 
| **Block** | a block is a structured object composed of HTML elements and rendered as HTML and CSS
| **Element** | Object representing a HTML element like div, p, img, etc. 
| **Container** | Object representing a HTML element (grid and flexbox) used to define a block layout and that can include other blocks (nested blocks)
| **Reusable block** | any block you create and save becomes a reusable block. Reusable blocks can be imported in any other block or document.
| **Project** | A project is the way you can organize your generated websites
| **Plugin**  | A plugin is an object that can be added to any document or block and that performs specific functions. For example Whoobe Store is a plugin that create a complete store include product manager (import from csv support), etc.



## Features

- WYSIWYG design and creation of reusable blocks, templates, pages, widgets, forms and elements with full control of your content appearance without coding

- Granular control of the blocks/elements design supported by TailwindCSS utiliy first pseudo classes


- Copy&Paste, Move and Duplicate blocks/elements, Hotkeys shortcuts, instant preview, screenshots, block treeview

- Apply advanced animations to any element using GSAP animation engine (15 most common animations pre-configured)

- Import/Export any block or entire group of blocks as JSON file

- Create, edit, delete articles (content) and assign relative block as layout

- Manage media assets 

- Generate website with one click


#### Run Whoobe Studio


```
/whoobe/whoobe-studio $ yarn serve
```

Open the browser to [Whoobe Studio](http://localhost:8080)

**You need to run Whoobe Server before to start to use Whoobe Studio**



## Login 

Default login created by the systems is 

admin:password

## Build Whoobe Studio

You can build Whoobe Studio and use as a desktop application. If you update any file of the application you need to rebuild Whoobe Studio

```
/whoobe/whoobe-studio $ yarn build
```

To run Whoobe Studio you need to run a webserver with the root folder pointing to the dist folder of Whoobe Studio.


