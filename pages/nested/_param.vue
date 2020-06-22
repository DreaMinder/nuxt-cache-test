<template>
  <section>
    <n-link to="/nested">TEST1</n-link>
    <span>{{test}}2</span>
  </section>
</template>

<script>
export default {
  asyncData({ params }) {
    return  {
      test: params.param
    }
  }
}
</script>

<style>
section {
  padding: 5rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 200%;
}
</style>
