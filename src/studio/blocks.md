# Blocks

A mouse over the Blocks option <i class="material-icons">widgets</i> from the main menu will open a dropdown menu with all the blocks categories available.

## Blocks categories

Whoobe Studio organizes your blocks with the following pre-defined categories:

| Category | Description
| :--- | :---
| **Component**| collection of generic basic blocks
| **Demo Page**    | blocks to organize structured pages to use as demo. 
| **Ecommerce**      | collection of blocks used in ecommerce website
| **Homepage**  | blocks that are used as homepage
| **Landing Page**    | landing pages blocks, normally they are single pages without any subpage 
| **Loop**   | blocks used to output dynamic content, single or multiple
| **Page** | blocks used as single page
| **Portfolio** | blocks used group portfolio pages
| **Slider** | blocks used group all your sliders
| **Template** | blocks used as generic template
| **Widgets** | blocks that can be used in pages, templates like header, footer, call to action, etc.

**Pre-defined categories are just a way to help you to start using Whoobe Studio. You can change, edit, delete and add new categories as per your need**


## Blocks types

You can also assign to each block a specific type. Block types are not related to a block category. In this way you can have block of same type that belongs to different categories.
Types are fully customizable and you can add, remove as per your need.
You can filter your blocks inside any category by type with the buttons at the top of the window.

** TO BE COMPLETED **

<!-- ## Blocks gallery/list

Any category you select gives you a gallery of the blocks you have in the system. 
The preview image is available when you save your block from the preview window in editing mode.
For each block you have the following options:

- <i class="material-icons">edit</i> opens the [Block editor](/moka/block-editor.html) 
- <i class="material-icons">remove_red_eye</i> fast preview
- <i class="material-icons">file_copy</i> duplicate block
- <i class="material-icons">delete</i> delete block

## Create a new block

To create a new block click on the button <button style="background:#63b3ed;color:white;padding:2px 4px">Create New</button>


## Export

Clicking on the <button style="background:#63b3ed;color:white;padding:2px 4px">Export</button> you can export the full current category to a single file (JSON) that can be used to import in other system or used as backup.

## Import

MOKAStudio can use blocks previously exported from the app. Click on <button style="background:#63b3ed;color:white;padding:2px 4px">Import</button> 

From the blocks gallery you can import a single block or even a complete library (category).
MOKAStudio will automatically recognize the library category and will save all the blocks in your CMS.

## Gallery / List view mode

The Blocks Gallery/List has two view modes. In the upper right corner you can have the following icon:

<i class="material-icons">grid_on</i> to switch to Gallery view

<i class="material-icons">list</i> to switch to List view


## Refresh Blocks list

Click on the <i class="material-icons">refresh</i> to refresh the list


## Block Structure

A block is an object representation of HTML elements.
In MOKAStudio there are different types of elements, organized in order to simplify the creation and manipulation of HTML blocks.


## Block Elements

Elements available in MOKAStudio editor used to create blocks and elements.

> Category article refers to the Articles collection fields.

<MokaElements></MokaElements>

### Block hierarchy

Any block **must have** always a **container** as a root element in order to design a layout.

For this reason in MOKAStudio you can add HTML elements only to containers.
This is a constrain defined by design in MOKAStudio.

**Containers** like columns and flexbox can be nested so you can create structured layout combining containers and other elements available in MOKAStudio.

#### Block object example

```
    {
        "id":"moka-q5w0e",
        "css":"",
        "tag":"document",
        "image":null,
        "blocks":[
            {
                "id":"moka-m5fdc",
                "css":{
                    "css":"",
                    "container":"grid md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-4"
                },
                "tag":"container",
                "cols":4,
                "icon":"view_column",
                "link":"",
                "rows":[],
                "type":"grid",
                "image":null,
                "label":"Columns",
                "style":"",
                "content":"",
                "element":"grid",
                "semantic":""
                "blocks":[
                    {
                        "id":"moka-13wx5",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-1"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    },
                    {
                        "id":"moka-wwh3v",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-1"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    },
                    {
                        "id":"moka-2ux51",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-2"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    }
                ]
            
            }
        ]
    }
```

## How blocks are connected to my Strapi CMS articles/content?

The concept is very simple but can be misanderstood.

### 1st scenario: website homepage with static content

Normally today homepages (usually not for blogs) are pages designed to give immediate different informations, enriched with graphic elements, video, widgets like sliders, call to action, animations and so on that are not simple text.

With MOKAStudio you can create complex pages and connect directly to a Strapi CMS Article.
You have two different modes to create assign a page or template to a page:

- from the MOKAStudio editor click on the <i class="material-icons">web</i> icon in the editor topbar and create a new article directly
- create a new article from CMS > Articles, add a title and connect to a template/page. If your page/template is designed to be the homepage, you will just to mark the article as homepage.

NUXPRESSO will automatically display you MOKAStudio page as homepage

### 2nd scenario: internal dynamic pages with textual content

Internal pages normally share the same layout, with some common elements like header, footer, sidebar, etc.

Start with the design of the common elements.
Then add which article elements you want to output to your block, customize as per your design requirements.

Save the document with Category -> template, click on the <i class="material-icons">settings</i> icon in the topbar just after the document title

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610557813/moka_studio_editor_document_settings_cdffd6ab19.png"/>

- Select Category -> template
- Checkout **Default template** to true

NUXPRESSO will automatically display any page that doesn't have a specific template assigned to use the Default template.

### 3rd scenario: a list of articles (loop)

Follow the same procedure above.
Here you can also set how many articles per page you want to output. -->