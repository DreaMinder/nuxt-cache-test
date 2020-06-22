<template>
  <section>
    <n-link to="/nested/tst">TEST2</n-link>
    {{ test }}
  </section>
</template>

<script>
const test = 'data'
export default {
  asyncData() {
    return  {
      test
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
