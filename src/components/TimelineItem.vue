<template>
  <div class="p-5 bg rounded text-white w-56 flex flex-col">
    <h3 class="font-bold">{{text.header}}</h3>
    <p>{{text.sub}}</p>
    <div class="flex flex-1 items-end mt-5">
      <small class="text-xs">{{text.timeline}}</small>
    </div>
    <div id="edit-buttons" class="flex">
      <button v-if="editable" @click="$emit('edit', text)">EDIT</button>
      <button v-if="editable" @click="$emit('delete', text)">DELETE</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      required: true,
      type: Object
    },
    editable: {
      required: false,
      type: Boolean,
      default: (): boolean => false
    }
  },
  emits: ['edit', 'delete'],
}
</script>

<style>
</style>