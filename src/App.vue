<template>
  <div id="app">
    <div id="splash">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <hr>
  </div>

  <div class="container" id="demo">
    <div class="row">


    <div class="column">

      <h2>About</h2>

      <p>Lorem Ipsum text and image placeholders updated for Vue 2.0.
        Use anywhere you need a placeholder for a text or image block.</p>

      <h3>Installation</h3>

      <p>Register the directives with the current Vue instance:</p>

        <p>Insert the <code>placeholders/</code> folder into your source code and then require it:</p>
        <pre> require('./placeholders');</pre>

      <p>Or, register each placeholder as needed:</p>

      <pre> Vue.directive('phtext', require('./phtext.js'))</pre>
      <pre> Vue.directive('phimage', require('./phimage.js'))</pre>




      <h3>Usage</h3>

      <p>For placeholder lorem ipsum text:</p>

      <pre> &lt;div v-phtext:2p3s>&lt;/div&gt;</pre>

      <p>For placeholder image</p>

      <pre> &lt;img v-phimg:1200x500 /&gt;</pre>

      <h3>API</h3>

      <p><strong>phtext</strong> expects a string (a) indicating the number of paragraphs and
      (b) the number of sentences in each paragraph. For example, <code>v-phtext:2p3s</code>
      would insert 2 paragraphs with 3 sentences in each paragraph.</p>

      <p><strong>phimage</strong> expects a string indiciating the dimensions of the placeholder image.
        For example, <code>v-image:2000x500</code>
        would insert an image 2000 pixels in width and 500 pixels in height. The 'x' between the width and height
      is required.</p>

      <p>String data for the lorem ipsum text is stored as an array in <code>phdata.js</code>.</p>


      <h3>Attribution</h3>

      <p>Many thanks to <a href="">lithiumjake's</a> <a href="https://github.com/lithiumjake/vue-placeholders">vue-placeholders</a> project. My version is a slightly
      modified version of <a href="https://github.com/lithiumjake/vue-placeholders">vue-placeholders</a>,
      updated for Vue.js 2.0.<p>

      <p>I also reviewed Josh David Miller's <a href="https://github.com/joshdmiller/angular-placeholders">https://github.com/joshdmiller/angular-placeholders</a>.</p>

      <p>Finally, thanks to <a href="https://github.com/milligram/milligram">Milligram's superb css framework
        project</a> for the grid layout and styling
      in this example page.</p>

      <h3>Support</h3>

      This code is <a href="">available on Github</a>.







    </div>

    <div class="column">

      <div v-phtext:2p3s></div>
      <img v-phimage:450x200 style="margin: 0 auto"/>
      <div v-phtext:1p3s></div>

      <img v-phimage:450x200 />

      <div v-phtext:1p3s></div>
      <img v-phimage:450x200 />

      <div v-phtext:2p3s></div>
    </div>

  </div>





  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Lorem Ipsum placeholders for Vue 2.0'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#demo {margin-top: 50px;}

img {margin-bottom: 10px}

#splash {
  text-align: center
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
