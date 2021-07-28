<template>
  <component
    :class="{
      'v-a-button': 1,
      'v-a-button--disabled': disabled,
      'v-a-button--success': success,
      'v-a-button--error': error,
      'v-a-button--warning': warning,
    }"
    :id="id"
    :is="tag"
    :href="href"
    :to="to"
    :target="computedTarget"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <span class="v-a-button__label">
      <!-- @slot Main slot used for text -->
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  name: "VButton",
  props: {
    /** "href" for link - renders an <a> component */
    href: String,
    /** Type attribute for button - ie type="submit" */
    type: String,
    /** ID attribute */
    id: String,
    /** "to" prop for vue-router - renders a <router-link> */
    to: {
      type: [Object, String],
    },
    /** target attrbitue for the <a> tag */
    target: String,
    /** Success mode */
    success: Boolean,
    /** Warning mode */
    warning: Boolean,
    /** Error mode */
    error: Boolean,
    /** Disabled mode */
    disabled: Boolean,
  },
  methods: {
    handleClick(event) {
      /**
       * Click event
       * @type {Event}
       */
      this.$emit("click", event);
    },
  },
  computed: {
    computedTarget() {
      return this.target || (this.href ? "_blank" : null);
    },
    tag() {
      if (this.href) return "a";
      if (this.to) return "router-link";
      return "button";
    },
  },
};
</script>


