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
      :data.sync="data[input.id]"
    />
  </div>
</template>

<script>
import AtomTextInput from "@/components/atoms/AtomTextInput";

export default {
  name: "MoleculeInputs",
  props: {
    inputs: [],
    data: { required: true },
  },
  components: {
    AtomTextInput,
  },
};
</script>