(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,n,a){"use strict";a.r(n);var t=a(42),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nuxp-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxp-cli"}},[e._v("#")]),e._v(" nuxp-cli")]),e._v(" "),a("h2",{attrs:{id:"using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),a("p",[e._v("To facilitate the process of running a working development environment I created a CLI to:")]),e._v(" "),a("ul",[a("li",[e._v("install the repos required")]),e._v(" "),a("li",[e._v("set the configuration for the apps required")]),e._v(" "),a("li",[e._v("run the development environment based on the configuration set during the installation")])]),e._v(" "),a("h3",{attrs:{id:"install-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cli"}},[e._v("#")]),e._v(" Install the CLI")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g nuxp-cli \n")])])]),a("h3",{attrs:{id:"install-nuxpresso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-nuxpresso"}},[e._v("#")]),e._v(" Install Nuxpresso")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir nuxpresso\ncd nuxpresso\nnuxp-cli nuxpresso:new\n")])])]),a("p",[e._v("This will install all the repos required with the following structure from your nuxpresso folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("|--nuxpresso-moka\n|--nuxpresso-nuxt\n|--nuxpresso-strapi\n")])])]),a("p",[a("strong",[e._v("nuxpresso-moka")]),e._v(" : MOKAStudio")]),e._v(" "),a("p",[a("strong",[e._v("nuxpresso-nuxt")]),e._v(" : nuxpresso site generator based on NUXTJS")]),e._v(" "),a("p",[a("strong",[e._v("nuxpresso-strapi")]),e._v(" : Strapi CMS starter to work with nuxpresso")]),e._v(" "),a("h2",{attrs:{id:"configure-nuxpresso-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-nuxpresso-installation"}},[e._v("#")]),e._v(" Configure nuxpresso installation")]),e._v(" "),a("p",[e._v("Run the following command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nuxp-cli config\n")])])]),a("p",[e._v("A new terminal screen will be initiated")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("? Do you want to configure nuxpresso (existing configuration will be overwritten)? Yes\n? Strapi HOST IP 0.0.0.0\n? Strapi HOST PORT 1338\n? Strapi Admin username admin\n? Strapi Admin password [hidden]\n? Strapi Admin Email admin@test.test\n? DATABASE Type postgres\n? DATABASE Host 127.0.0.1\n? DATABASE Port 5435\n? DATABASE Name nuxpresso-strapi\n? DATABASE Username\n? DATABASE Password [hidden]\n? DATABASE SSL No\n? Cloudinary API KEY (leave blank if not used)\n? Cloudinary API SECRET  (leave blank if not used)\n? Cloudinary Cloud Name  (leave blank if not used)\n? Mailgun API KEY  (leave blank if not used)\n? Mailgun Domain  (leave blank if not used)\n? Mailgun Email From  (leave blank if not used)\n? Mailgun Reply To  (leave blank if not used)\n? SITE Email ()\n\n\n? Confirm configuration? (Use arrow keys)\n> Confirm\n  Restart\n  Quit                                                                                                                                                                                \n")])])]),a("p",[e._v("When confirmed the CLI will automatically create the env configuration files for all the apps.")]),e._v(" "),a("h2",{attrs:{id:"strapi-cms-configuration-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strapi-cms-configuration-notes"}},[e._v("#")]),e._v(" Strapi CMS configuration notes")]),e._v(" "),a("p",[e._v("nuxpresso-strapi is configured to run using local resources for upload and email.")]),e._v(" "),a("p",[e._v("By the way nuxpresso will install the following dependencies for:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloudinary.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudinary"),a("OutboundLink")],1),e._v(" as media provider ( strapi-provider-upload-cloudinary )")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mailgun.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mailgun"),a("OutboundLink")],1),e._v(" as email provider ( strapi-provider-email-mailgun )")])]),e._v(" "),a("p",[e._v("If you don't plan to use external media and email providers you can remove them.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/nuxpresso $ cd nuxpresso-strapi\nyarn remove strapi-provider-upload-cloudinary strapi-provider-email-mailgun\n")])])]),a("h3",{attrs:{id:"using-external-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-external-providers"}},[e._v("#")]),e._v(" Using external providers")]),e._v(" "),a("p",[e._v("If you plan to use external providers like Cloudinary and Mailgun you need to update the "),a("code",[e._v("config/plugin.js")]),e._v(" file as follow.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = ({env})=>({\n    //GraphQL is required and installed by default: do not remove\n    graphql: {\n      endpoint: '/graphql',\n      tracing: false,\n      shadowCRUD: true,\n      playgroundAlways: true,\n      depthLimit: 7,\n      amountLimit: 100,\n    },\n\n    //Cloudinary media provider\n    upload: {\n      provider: \"cloudinary\",\n      providerOptions: {\n        cloud_name: env('CLOUDINARY_CLOUD_NAME'),\n        api_key: env('CLOUDINARY_API_KEY'),\n        api_secret: env('CLOUDINARY_API_SECRET')\n      }\n    },\n    //Mailgun media provider\n    email: {\n      provider: 'mailgun',\n      providerOptions: {\n        apiKey: env('MAILGUN_API_KEY'),\n        domain: env('MAILGUN_DOMAIN')\n      },\n      settings: {\n        defaultFrom: env('MAILGUN_FROM'),\n        defaultReplyTo: env('MAILGUN_REPLYTO')\n      },\n    },\n\n})\n")])])]),a("p",[e._v("If you are using different providers you have to install the relative dependencies needed and update the "),a("code",[e._v("config/plugins.js")]),e._v(" depending on the provider you are using and update the relative environment variables.")]),e._v(" "),a("p",[e._v("Please refer to the official "),a("a",{attrs:{href:"https://strapi.io/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strapi CMS documentation"),a("OutboundLink")],1),e._v(" on how to configure you providers.")]),e._v(" "),a("h2",{attrs:{id:"build-strapi-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-strapi-admin"}},[e._v("#")]),e._v(" Build Strapi admin")]),e._v(" "),a("p",[e._v("After the configuration you need to run the Strapi CMS build in order to set it working. This will also create the admin user defined in the config process. Be sure to move to the nuxpresso-strapi installation folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd nuxpresso-strapi\nyarn build\n")])])]),a("h2",{attrs:{id:"run-the-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-development-environment"}},[e._v("#")]),e._v(" Run the development environment")]),e._v(" "),a("p",[e._v("When the Strapi build process is completed you can run the nuxpresso development environment using the following CLI command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nuxp-cli nuxpresso:dev\n")])])]),a("p",[e._v("As for the configuraiton procedure you will have")]),e._v(" "),a("p",[e._v("As per default configuration you will have:")]),e._v(" "),a("ul",[a("li",[e._v("Strapi CMS running (http://localhost:1337 by default)")]),e._v(" "),a("li",[e._v("NUXPRESSO (http://localhost:3000)")]),e._v(" "),a("li",[e._v("MOKAStudio (http://localhost:8080)")])]),e._v(" "),a("p",[e._v("Alternatively you can run each app indipendently")]),e._v(" "),a("p",[a("strong",[e._v("The GraphQL configuration is required in order to make NUXPRESSO working correctly")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// config/plugins.js\n\nmodule.exports = ({env})=>({\n    //GraphQL is required and installed by default: do not remove\n    graphql: {\n      endpoint: '/graphql',\n      tracing: false,\n      shadowCRUD: true,\n      playgroundAlways: true,\n      depthLimit: 7,\n      amountLimit: 100,\n    },\n\n    //Cloudinary media provider\n    upload: {\n      provider: \"cloudinary\",\n      providerOptions: {\n        cloud_name: env('CLOUDINARY_CLOUD_NAME'),\n        api_key: env('CLOUDINARY_API_KEY'),\n        api_secret: env('CLOUDINARY_API_SECRET')\n      }\n    },\n    //Mailgun media provider\n    email: {\n      provider: 'mailgun',\n      providerOptions: {\n        apiKey: env('MAILGUN_API_KEY'),\n        domain: env('MAILGUN_DOMAIN')\n      },\n      settings: {\n        defaultFrom: env('MAILGUN_FROM'),\n        defaultReplyTo: env('MAILGUN_REPLYTO')\n      },\n    },\n\n})\n")])])]),a("p",[e._v("If you are using different providers you have to install the relative dependencies needed and update the "),a("code",[e._v("config/plugins.js")]),e._v(" depending on the provider you are using and update the relative environment variables.")]),e._v(" "),a("p",[e._v("Please refer to the official "),a("a",{attrs:{href:"https://strapi.io/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strapi CMS documentation"),a("OutboundLink")],1),e._v(" on how to configure you providers.")])])}),[],!1,null,null,null);n.default=r.exports}}]);