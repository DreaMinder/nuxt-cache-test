<template>
  <section>
    TEST
  </section>
</template>

<script>
export default {
  asyncData() {
    throw new Error('dummy error')
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
