<template>
  <label
    :for="htmlFor"
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  >
    <template v-if="required">* </template><slot></slot>
  </label>
</template>

<script>
export default {
  name: "VLabel",
  props: {
    /** "for" attribute for label */
    htmlFor: String,
    /** If label is for a required input */
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


