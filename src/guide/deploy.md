# Deployment

**Before to deploy you need to generate your website**


## Generate Website

From Whoobe Studio click on Projects <i class="material-icons">grid_view</i>

You will get a list of current projects. You can add as many project as you need.

***To generate a website, a project requires a block as homepage.***

### Assign a block as homepage

Click on the <i class="material-icons">web</i> icon to select which block will be the project homepage.
Select the block that will be used as homepage.


### Target folder

You can set a specific folder of your file system as target of the generation process. In this way you can have multiple generated websites in different folders.

### Generate 

Click on the <i class="material-icons">dynamic_form</i> icon to access the Generation process.

Whoobe Studio will scan, starting from the homepage all local links in order to create the required routes.
If you are going to generate also a store it will be automatically detected.

#### Settings
You can set some extra settings like: 

- SEO title (Homepage)
- SEO description (Homepage)
- Target folder: the folder where Whoobe will save the files generated
- Google Analytics: the Google Analytics code to add to your pages

#### Run Generate

Clicking on the Generate button, Whoobe will start to build your website performing the following operations: 

- collect all the pages and generate the requested routes
- collect all the images and save in the uploads folder of the target folder of the project
- purge CSS with the only used classes
- collect all the fonts (Google fonts) and add to the head of your website

*If your website is using the Whoobe Store plugin to create your ecommerce, Whoobe will automatically create all the necessary routing for products categories/facets and for every single product.*

At the end of generation process you can check your static website. From your console go the root folder of Whoobe Generator (whoobe-generator-alpha)

```
/whoobe/whoobe-generator-alpha $ yarn start
```

If everything is ok you can deploy to your hosting provider. 

### Deploy to a Standard Web Hosting

Transfer the **dist** folder of your target folder to your website root folder.

### Deploy to Netlify, Vercel, Cloudflare pages, Github pages

1. Create a repo on you favorite git provider
2. Connect the origin to the project target folder
```
git remote set-url _your_repo_
```
3. Commit your changes
```
git add .
git commit -m "Your commit notes ..."
git push origin master
```

From the control panel of the hosting provider connect the deployment to your repo.

4. To publish leave the deployment command to build empty

5. Set the destination folder to **./dist** (or the one you have defined as target folder )


## Public Whoobe Server

At the moment Whoobe Server is configured to use NeDB file system as database. You can deploy Whoobe Server but if yo are using a free plan like Heroku that rebuild the application new files will be overwritten by the original repo. Use a standard plan in order to prevent loss of data.


