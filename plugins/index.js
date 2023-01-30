
function helloPlugin() {
  console.log("Hello From Plugins");
}


export default defineNuxtPlugin(nuxtApp => {  
  return {
    provide: {
      helloPlugin: helloPlugin,
    }
  }
})