<template>
  <div class="p-5 bg rounded text-white w-56 flex flex-col">
      <h3 class="font-bold">Step {{text.step}}</h3>
      <p>{{text.desc}}</p>
      <div class="flex flex-1 items-end mt-5">
        <small class="text-xs ">{{text.timeline}}</small>
      </div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        text: {
            required: false,
            type: Object
        }
    }
}
</script>

<style>

</style>