<template>
  <h2>Payment</h2>
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
      { title: 'Оплаты' }
    ])
  }
}
</script>