# About vue-lorem-ipsum
Lorem Ipsum text and image placeholders updated for Vue 2.0. Use anywhere you need a placeholder for a text or image block.

## Installation

### Directives only

Insert the placeholders/ folder into your project and then require it:

 ```
 require('./placeholders');
 ```
Or, register each placeholder as needed:

 ```
 Vue.directive('phtext', require('./phtext.js'))
 Vue.directive('phimage', require('./phimage.js'))
 ```
### Entire project

This project was created with the vue-cli webpack-simple template. To run or build this project:

Install:

```
npm install
```

Run:
```
npm run dev
```

Build:
```
npm run build
```

## Usage

For placeholder lorem ipsum text:

```
<div v-phtext:2p3s></div>
```

For placeholder images:
```
<img v-phimg:1200x500 />
```


## API

**phtext** expects a string (a) indicating the number of placeholderparagraphs and (b) the number of sentences in each paragraph. For example, v-phtext:2p3s would insert 2 paragraphs with 3 sentences in each paragraph.

**phimage** expects a string indicating the dimensions of the placeholder image. For example, v-image:2000x500 would insert an image 2000 pixels in width and 500 pixels in height. The 'x' between the width and height is required.

String data for the lorem ipsum text is stored as an array in **phdata.js**.

## Attribution

Many thanks to [lithiumjake's vue-placeholders project](https://github.com/lithiumjake/vue-placeholders). My version is a slightly modified version of vue-placeholders, updated for Vue.js 2.0.

I also reviewed Josh David Miller's https://github.com/joshdmiller/angular-placeholders.

Finally, thanks to Milligram https://milligram.github.io/ for the grid layout and styling in this example page.

## Support

This code is available on Github:
https://github.com/cschweda/vue-lorem-ipsum

A live demo is available here:
https://signaller-recruiters-27058.netlify.com/
