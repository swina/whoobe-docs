# Configuration


In order to connect to your Whoobe Server you need to configure **Whoobe Generator** and **Whoobe Studio**


## Whoobe Studio

Create an ```.env``` file at the root folder of MOKAStudio (default ```whoobe-studio-alpha-01```) and add the following environment variables

**Path -** *./.env*
```
VUE_APP_API_URL=http://localhost:3030/
VUE_APP_LOCAL=true
VUE_APP_FONT_FAMILIES=Asap+Condensed|Barlow+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Montserrat|Nunito+Sans|Open+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Lora|PT+Sans|Alfa+Slab+One
```

| Variable | Description | Notes
| :---      | :---        | :---
| VUE_APP_API_URL | Whoobe Server URL | *ex. http://localhost:3030/*
| VUE_APP_LOCAL | Local build | Not used anymore. You can strip
| VUE_APP_FONT_FAMILIES | list of font families separated by '\|' | Font available in Whoobe Studio. You can add or remove fonts. By the way in the generation process only used fonts will be added|.


#### Fonts support

> You can add google fonts using the environment variables. Any font added here will be available in Whoobe Studio as font setting for any element. 
>


## Whoobe Generator

Create an ```.env``` file at the root folder of Whoobe Generator (default ```whoobe-generator-alpha```) and add the following environment variables

Whoobe Generator is invoked to build your static web site directly from Whoobe Studio. Extra configuration is required in order to add features like a form sender endpoint.
Google Analytics and ReCaptcha will be configured using Whoobe Studio.

```
API_URL=__WhoobeCMS_URL___ //default http://localhost:3030/
FULL_STATIC=true|false
LOCAL_ASSETS=true|false
FONT_FAMILIES=Asap+Condensed|Barlow+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Montserrat|Nunito+Sans|Open+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Lora|PT+Sans|Alfa+Slab+One
GOOGLE_ANALYTICS=UA-XXXXXXX
FORM_SENDER=_YOUR_FORM_SENDER_ENDPOINT
RECAPTCHA=_RECAPTCHA_API_KEY_
```

| Variable | Description | Notes
| :---      | :---      | :---
| API_URL     | Whoobe Server URL | Auto configured
| FULL_STATIC | when you go to full static during the generate process your media assets will be copied from your local Whoobe Server public/upload folder. Only images used by your pages will be copied.
| LOCAL_ASSETS | true / false | Local assets will be used
| FONT_FAMILIES | list of fonts used separated by the character`|` You can omit this if you will generate your website from Whoobe Studio
| GOOGLE_ANALYTICS | Google Analytics ID | Can be set using Whoobe Studio generate option
| FORM_SENDER  | Going full static you need a remote form submission URL with email send support
| RECAPTCHA   | the Recaptcha API KEY (not required in local environment). We suggest to use it in production environment


### Google Analytics

By default the package **@nuxtjs/google-analytics** will be installed as dev dependency since it will be used only at building time.

If your website will not use Google Analytics update **./nuxt.config.js** removing 

**Path -** *./nuxt.config.js*
```
    ....
    /*
    ** GOOGLE ANALYTICS remove if you don't use
    */
    googleAnalytics: {
        id: __google_analytics_code__
    }
    ...
```

and remove the buildModules configuration


```
  buildModules: [
     ...
    '@nuxtjs/google-analytics'
  ],
```



## Whoobe Server

In local development no special configuration is required. All configuration and settings are automatically created at installation time. 

Open ```./config/default.json``` from the root folder of Whoobe Server ( whoobe-server-alpha) and locate the line 

```
"nuxt" : "../../whoobe-nuxt",
```

Update with the root folder of Whoobe Generator.


## Running Whoobe 


#### Run Whoobe Server

```
/whoobe/whoobe-server-alpha $ yarn dev
```

Whoobe Server will start at [http://localhost:3030](http://localhost:3030)

> We suggest to use nodemon to support HMR for the server


#### Run Whoobe Studio

```
/whoobe/whoobe-studio-alpha-01 $ yarn serve
```
Checkout here [Whoobe Studio](http://localhost:8080)

#### Run Whoobe Generator

As a generator normally you don't need to run Whoobe Generator, but you can run in order to test the static version.

To run in test development
```
/whoobe/whoobe-generator-alpha $ yarn dev
```

To run after generation process
```
/whoobe/whoobe-generator-alpha $ yarn start
```

Checkout here [whoobe](http://localhost:3000)
