<template>
  <section class="flex flex-col min-h-screen">
    <OrganismHeader :links="links" />
    <div class="flex-auto flex flex-wrap bg-white pt-16">
      <div class="container mx-auto px-4 py-8 md:py-16">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import OrganismHeader from "@/components/organisms/OrganismHeader";

export default {
  name: "Landing",
  components: {
    OrganismHeader
  },
  data: () => {
    return {
      links: [
        { name: "Add Item", url: "Create" },
        { name: "All Items", url: "Index" },
      ],
      ColumnLabel: "Test",
    };
  },
};
</script>

<style>
</style>