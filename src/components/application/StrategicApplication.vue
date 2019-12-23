<template>
  <div>
    <h2>Strategic</h2>
  </div>
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
      { title: 'Заявки', url: '/application' },
      { title: 'Стратегические заявки' },
    ]);
  }
}
</script>