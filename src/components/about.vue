<template>
  <div>
    <div>About Component with ID: {{currentID}}</div>
    <span class="redirect" @click="Redirect('Home')">Go to Home</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentID: this.$route.params["id"]
    };
  },
  watch: {
    "$route.params": {
      handler(to, from) {
        console.log((this.currentID = this.$route.params["id"]));
      }
      //immediate: true not needed as initially on load we are setting it in the data directly
    }
  },
  methods: {
    Redirect(name) {
      this.$router.push({ name: name, query: { redirect: true } });
    }
  }
};
</script>
<style scoped>
.redirect {
  padding: 10px;
  color: #FFF;
  background-color: #000;
  margin: 10px 0px;
  display: inline-block;
  cursor: pointer;
}
</style>
