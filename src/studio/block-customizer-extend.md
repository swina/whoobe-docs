# Extend Customizer Controls

MOKAStudio as opensource resource can be customized as per your needs. 
This section will help you to understand how you can add controls to your design extending the TailwindCSS classes as per your needs.

## Custom Colors

MOKAStudio has a pre-defined colors palette that usually fits for almost any need.

If you need to extend with your custom colors, the **colors palette requires 9 tones for each base color**. 

This is a constrain by design. In order to add a new color :

- open the file ./tailwind.config.js (root folder of your project)

**Path -** ./tailwind.config.js
```
...
    theme: {
        extend: {
            colors: {
                mycolor :{
                    '100' : '#F5F5F4',
                    '200' : '#E7E5E4',
                    '300' : '#D6D3D1',
                    '400' : '#A8A29E',
                    '500' : '#78716C',
                    '600' : '#57534E',
                    '700' : '#44403C',
                    '800' : '#292524',
                    '900' : '#1C1917'
                },
            }
            ...
        }
        ...
```

- open the following file ./src/plugins/tw.classes.js
- locate the row *const colors* and add the *mycolor* to the array

**Path -** ./src/plugins/tw.classes.js

```
...

const colors = [ 
    'gray' , 
    'bluegray' , 
    'brown' , 
    'red', 
    'orange' , 
    'yellow' , 
    'green' , 
    'lime' , 
    'teal' , 
    'blue' , 
    'indigo' , 
    'purple' , 
    'pink' , 
    'mycolor' //added custom color
]

...

```

## Custom classes

The above procedure can be applied to any other classes, but depending on the class itself you need to update the correspondent class variable in the file ./src/plugins/tw.classes.js. 

### Classes values variables
| TailwindCSS  | variable | type | value type | value |
| :--- | :--- | :---: | :---: | :--- |
| **COLORS** | 
| text-*color*-*tone*     | textColor     | array | string | **autogenerated** based on *const colors*|
| bg-*color*-*tone*       | bgcolor     | array | string | **autogenerated** based on *const colors*|
| **DIMENSION** | 
| w-        | width         | array | object | { label: _label_ , value: _value_ } |
| h-        | height        | array | object | { label: _label_ , value: _value_ } |
| **TEXT** | 
| text-     | textSize      | array | string | _value_ |
| text-     | textAlign     | array | string | _value_ |
| leading-  | textAlign     | array | string | _value_ |
| tracking- | textSpacing   | array | string | _value_ |
| font-     | fontWeight    | array | string | _value_ |
| text-opacity- | textOpacity | array | string | **autogenerated** based on *setOpacity()* function  |
| **FLEX** | 
| flex-     | flexdirection | array | string | _value_ |
| flex-     | flexwrap      | array | string | _value_ |
| flex-     | flexshrink    | array | string | _value_ |
| flex-     | flexwrap      | array | string | _value_ |
| order-    | flexorder     | array | string | _value_ |
| **GRID** | 
| grid-     | gridcols      | array | string | _value_ requires the breakpoint variant like md:_value_ |
| col-span-*value* | colspan      | array | string | _value_ requires the breakpoint variant like md:_value_ |
| gap-      | gridgap       | array | string | _value_ |
| **ALIGNMENT** | 
| items-    | alignitems    | array | string | _value_ | 
| content-    | aligncontent    | array | string | _value_ |
| self-    | alignself    | array | string | _value_ |
| **JUSTIFY** | 
| justify-items-    | justifyitems    | array | string | _value_ |
| justify-    | justifycontent    | array | string | _value_ |
| justify-self-    | justifyself    | array | string | _value_ |
| **BORDER** | 
| border-*value*    | border    | array | string | _value_ |
| border-t-*value*    | borderTop    | array | string | _value_ |
| border-b-*value*    | borderBottom    | array | string | _value_ |
| border-l-*value*    | borderLeft    | array | string | _value_ |
| border-r-*value*    | borderRight    | array | string | _value_ |
| border-*value*        | borderColor    | array | string | **autogenerated** based on *const colors* |
| border-*value*      | borderType    | array | string | _value_ |
| border-opacity-     | borderOpacity | array | string | **autogenerated** based on *setOpacity()* function  |
| rounded-*value*      | rounded    | array | string | _value_ |
| **PADDING** |
| p-*value*    | padding    | array | string | **autogenerated** based on *setClass()* function  |
| pt-*value*    | paddingTop    | array | string | **autogenerated** based on *setClass()* function |
| pb-*value*    | paddingBottom    | array | string | **autogenerated** based on *setClass()* function |
| pl-*value*    | paddingLeft    | array | string | **autogenerated** based on *setClass()* function |
| pr-*value*    | paddingRight    | array | string | **autogenerated** based on *setClass()* function |  
| **MARGIN** |
| m-*value*    | margin    | array | string | **autogenerated** based on *setClass()* function  |
| mt-*value*    | marginTop    | array | string | **autogenerated** based on *setClass()* function |
| mb-*value*    | marginBottom    | array | string | **autogenerated** based on *setClass()* function |
| ml-*value*    | marginLeft    | array | string | **autogenerated** based on *setClass()* function |
| mr-*value*    | marginRight    | array | string | **autogenerated** based on *setClass()* function |   
| m-auto        | mauto          | array | string | m-auto | 
| **SPACING** |
| p-*value*    | spacing    | array | string | **autogenerated** based on *setPercs()* function  |
| pt-*value*    | spacingTop    | array | string | **autogenerated** based on *setPercs()* function |
| pb-*value*    | spacingBottom    | array | string | **autogenerated** based on *setPercs()* function |
| pl-*value*    | spacingLeft    | array | string | **autogenerated** based on *setPercs()* function |
| pr-*value*    | spacingRight    | array | string | **autogenerated** based on *setPercs()* function | 
| **POSITION** |
| *value*        | positionelement        | array | string | _value_ |
| top-0          | positionTop            | array | string | top-0 | 
| bottom-0          | positionBottom            | array | string | bottom-0 | 
| left-0          | positionLeft            | array | string | left-0 | 
| right-0          | positionRight            | array | string | right-0 | 
| z-        | zindex        | array | string | _value_ |
| object-       | objectfit | array | string | _value_ |
| **SHADOW** |
| shadow-*value*      | shadow    | array | string | _value_ |
| **TRANSFORM** |
| skewX-        | skewX        | array | string | _value_ |
| skewY-        | skewY        | array | string | _value_ |
| rotate-        | rotate        | array | string | _value_ |
| **ANIMATION** |
| animation-*name*        | skewX        | array | string | _value_ |
| **CLIP PATH** *experimental* |
|                   | clipPath        | array | string | _value_ |

## Add Controls

To add a custom control to the Customizer you need to update the following files:

1. ./tailwind.config.js to extend with your classes

Add your custom class and values 

2. ./src/plugins/tw.classes.js to add a variable name

Add a new variable (array) to the *const classes* object.

3. ./src/plugins/tw.groups.js to add a control component

Add the control to a group or create a new group

**Path -* ./src/plugins/tw.groups.js
```
const twgroups = [

    ...
    // A new control group
    {
        label: 'my control' , components: [
            { name : 'MokaOptions' , attr: 'myvariable' , title: 'my title'}
        ]
    }
    ...

    
]
```

Where :
- label : control group name
- components: 
    - name : MokaOptions is a default select element component with options defined in the variable *attr*
    - attr: the variable name set in tw.classes.js
    - title: control title

