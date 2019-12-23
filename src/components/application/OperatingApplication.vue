<template>
  <div>
    <MaterialEdit />
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
      { title: 'Оперативные заявки' },
    ]);
  }
}
</script>