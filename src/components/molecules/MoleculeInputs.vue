<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <AtomTextInput
      v-for="input in inputs"
      v-bind:key="input.id"
      :id="input.id"
      :label="input.label"
      :hint="input.hint"
      :placeholder="input.placeholder"
      :required="input.required"
      :requiredString="input.requiredString"
      v-on:input="onInput"
    />
  </div>
</template>

<script>
import AtomTextInput from "@/components/atoms/AtomTextInput";

export default {
  name: "MoleculeInputs",
  props: {
    inputs: [],
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    AtomTextInput,
  },
  data() {
    return inputValue;
  },
  methods: {
    onInput: function (value) {
      this.inputValue = value;
    },
  },
};
</script>