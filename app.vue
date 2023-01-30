<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script>
export default {
  mounted(){
    this.$helloPlugin();
  }
}
</script>