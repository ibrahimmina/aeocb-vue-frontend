<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      :id="id"
      type="text"
      :placeholder="placeholder"
      v-model="data.value"
    />
    <p v-if="required === true" class="text-red-500 text-xs italic">
      {{ requiredString }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: { required: true },
    id: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    vmodel: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "hint" },
    placeholder: { type: String, required: false, default: "" },
    required: { type: Boolean, required: false, default: false },
    value: {
      type: String,
      default: "",
    },
    requiredString: {
      type: String,
      required: false,
      default: "Please fill out this field.",
    },
  },
  data() {
    return {};
  },
};
</script>