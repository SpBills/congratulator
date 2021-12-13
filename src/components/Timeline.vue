<template>
  <div class="flex md:justify-between flex-wrap justify-center">
      <TimelineItem class="m-3" v-for="item in items" :key="item" :text="item" />
  </div>
</template>

<script lang="ts">
import TimelineItem from '@/components/TimelineItem.vue';
export default {
    components: {
        TimelineItem
    },
    setup() {
        const items = [
            {
                step: "One",
                desc: "Hammer out requirements for the program and begin architecture design.",
                timeline: "By January 2022"
            },
            {
                step: "Two",
                desc: "Have a rough design of the program completed and begin adding functionality frameworks.",
                timeline: "By February 2022"
            },
            {
                step: "Three",
                desc: "Populate the program with database queries.",
                timeline: "By March 2022"
            },
            {
                step: "Four",
                desc: "Deliver the final product and do review and revisions.",
                timeline: "By April 2022"
            },
        ];

        return { items }
    }
}
</script>

<style>

</style>