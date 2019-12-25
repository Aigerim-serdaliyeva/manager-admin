<template>
  <h2>Suppliers</h2>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
   methods: {
    ...mapMutations({
      setBreadcrumbs: 'breadcrumb/setBreadcrumbs'
    })
  },
  mounted() {
    this.setBreadcrumbs([
      { title: 'Справочники', url: '/directory' },
      { title: 'Поставщики' }
    ])
  }
}
</script>