<template>
  <div>
    <form v-on:submit.prevent="addCountry">
      <div class="bg-white shadow rounded-lg p-6">
        <MoleculeInputs :inputs="inputs" :data="formData" />

        <div class="border-t mt-6 pt-3">
          <button
            class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </form>
    <hr />
    Form data:
    <pre>{{ formData | json }}</pre>
    <pre>{{ country | json }}</pre>
  </div>
</template>

<script>
import MoleculeInputs from "@/components/molecules/MoleculeInputs";

export default {
  components: {
    name: "AddCountry",
    MoleculeInputs,
  },

  data() {
    return {
      formData: {
        name: {
          value: "",
        },
        code: {
          value: "",
        },
        status: {
          value: "",
        },
      },

      inputs: [
        { id: "name", label: "Name", hint: "Name", placeholder: "Name" },
        { id: "code", label: "code", hint: "code", placeholder: "code" },
        {
          id: "status",
          label: "status",
          hint: "status",
          placeholder: "status",
        },
      ],
    };
  },
  methods: {
    addCountry() {
      let uri = "https://aeocb-backend.herokuapp.com/countries";
      let country = {
        name: this.formData.name.value,
        code: this.formData.code.value,
        status: this.formData.status.value,
      };
      this.axios.post(uri, country).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>