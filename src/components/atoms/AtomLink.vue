<template>
  <router-link :to="{ name: link.url }">{{ link.name }}</router-link>
</template>

<script>
export default {
  name: "AtomLink",
  props: ["link"],
};
</script>