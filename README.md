# vue3-solid-demo



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

# vue3-solid

Here's a brief introduction.

### Installation

$ npm install --save vue3-solid


### install
`npm install --save vue3-solid`

### usage


[demo](https://github.com/scenaristeur/vue3-solid-demo)

[doc](https://scenaristeur.github.io/vue3-solid/)

[source](https://github.com/scenaristeur/vue3-solid)

src/main.js
```
import { createApp } from 'vue'
import App from './App.vue'

import plugin from 'vue3-solid'

createApp(App)
  .use(plugin)
  .mount('#app')
```

src/App.vue

```
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input-text />
  <input-textarea />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```


### alternatives
```
...
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <InputText />
  <InputTextarea />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
...

```




- inspired by https://blog.logrocket.com/building-vue-3-component-library/
- more at ? https://dev.to/siegerts/creating-a-vue-js-component-library-part-iv-documentation-with-vuepress-56h5
