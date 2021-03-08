<template>
  <div>
    <h2>Congratulation</h2>
    <p>Welcome :{{ nickname }}</p>
    <p>Your Email account is {{ email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: this.$route.query.name,
      email: this.$route.query.email,
    };
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style>
</style>