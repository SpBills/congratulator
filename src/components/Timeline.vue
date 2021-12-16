<template>
  <div class="flex md:justify-between flex-wrap justify-center">
      <TimelineItem class="m-3" v-for="item in items" :key="item.id" :text="item" />
  </div>
</template>

<script lang="ts">
import TimelineItem from '@/components/TimelineItem.vue';
import { Item } from '@/models/Item';
export default {
    components: {
        TimelineItem
    },
    props: {
        items: {
            required: true,
            type: Array as () => Item[]
        }
    }
}
</script>

<style>

</style>