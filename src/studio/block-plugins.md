# Plugins

Plugins in MOKAStudio are a way to customize nuxpresso.

MOKAStudio plugins add functionalities to the Blocks editor and can be used to extend the built-in elements and blocks.

As default MOKAStudio comes with a set of plugins ready to use 
- **nuxpresso store** : a ready to use store using [Snipcart](https://snipcart.com) as shopping cart
- **moka image slider** : an images slider fully customizable
- [Jivo Chat](https://jivochat.com): add a realtime chat to your website useful to give direct support or for marketing purposes
- [ecwid](https://ecwid.com) plugin for integrate an ecwid store in your blocks


## Create a Plugin 

You just need to create vue file or a set of vue components and add to the plugins folder of MOKAStudio
I
If your plugin requires more components create a folder inside the plugins folder and put the files there.

## Add a Plugin

### Structure of a plugin used in MOKAStudio

To add a plugin in MOKAStudio you need to create a JSON file with the minimum following information:

```
{
    "name": "snipcart",
    "component: "snipcart/snipcart",
    "enabled": true,
    "global" : true
    "description": "snipcart plugin",
    "config" : "configuration object for your plugin"
    "author" : "author name",
    "version" : "version",
    "help" : "url for the help"
}
```

| Key | Description | Notes
| :--- | :--- | :---
| name | name of the plugin | 
| component | path and name of the vue component to be loaded | if your plugin is installed in a subfolder of the /components/plugins/folder you have to specify the path (i.e. <folder_name>/<vue_component_name>)
| enabled | true or false | when true the plugin is enabled to be used in MOKAStudio editor
| global | true or false | when true the plugin will be loaded globally
| description | short text | add a short description
| config | configuration object | you can add an object that your plugin needs as initial configuration data
| author | author name 
| version | version number
| help | a page url for any help | leave empty if not applicable

> if you are using a single component as plugin (ex. mynewplugin.vue ) set the component name to *mynewplugin*
>
> if your plugin uses multiple components you have create a subfolder and put all your components there
> set the component name to 
>
> **<folder_name>/<vue_component_to_load>** without vue extension
>


### How plugins work

A plugin is a module that add functionalities to MOKAStudio.

A plugin is a normal vue component (single or multiple) and is loaded by MOKAStudio and nuxpresso by a wrapper dynamically. Thus means that you don't need to change MOKAStudio or nuxpresso code.
Your plugin can have his scripts, css, styles and even external data calls (fetch) if you use the standard packages installed (axios,fetch).

A plugin can also be just a component that loads just javascript or stylesheet or both.

**Plugins must be installed in MOKAStudio and in nuxpresso-nuxt**

>
> Before to install a plugin in nuxpresso-nuxt is better to test it using MOKAStudioand then add your plugin to nuxpresso
> 
> Both application are using the same plugin wrapper
>

Plugins are registered in the system using MOKAStudio > Plugins option.