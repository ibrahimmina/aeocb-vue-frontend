<template>
  <component class="v-a-text" :is="`${tag}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "VText",
  props: {
    /** The html tag to be used for tex wrapper */
    tag: {
      type: String,
      default: "p",
    },
  },
};
</script>


