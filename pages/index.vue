<template>
  <div class="w-full bg-[#1A1A1A]">
    <H-Header />
    <H-Second />
    <H-Third />
    <H-Fourth />
    <H-Sixth />
    <A-Footer />
  </div>
</template>


<script>

useHead({
  title: 'Invac - Home',
  meta: [
    {
      name: 'description',
      content: 'Central vacuum systems clean dust, allergens, viruses, and pollutants invisible to the naked eye.'
    }
  ]
})

definePageMeta({
  scrollToTop: true,
  pageTransition: false,
});

</script>