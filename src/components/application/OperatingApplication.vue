<template>
  <div>
    <MaterialEdit />
  </div>
</template>

<script>
import MaterialEdit from './MaterialEdit.vue'
import { mapMutations } from 'vuex'

export default {
  components: { MaterialEdit  },
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