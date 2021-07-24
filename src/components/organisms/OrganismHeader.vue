<template>
  <header
    class="absolute inset-x-0 text-black-100 py-4 flex flex-wrap items-center top-0"
  >
    <div
      class="w-full md:w-3/4 px-4 pb-4 md:pb-0 flex items-center justify-between"
    >
      <AtomLogo />
      <MoleculeLinks class="flex" :links="links" />
    </div>
    <div class="w-full md:w-1/4 px-4"></div>
  </header>
</template>

<script>
import AtomLogo from "@/components/atoms/AtomLogo";
import AtomButton from "@/components/atoms/AtomButton";
import MoleculeLinks from "@/components/molecules/MoleculeLinks";

export default {
  name: "OrganismHeader",
  props: ["links"],
  components: {
    AtomLogo,
    AtomButton,
    MoleculeLinks,
  },
};
</script>