<template>
    <form @submit.prevent="submit" class="flex flex-col">
        <label>Header</label>
        <input class="border-b-2" type="text" v-model="editItem.header" />
        <label>Subject</label>
        <input class="border-b-2" type="text" v-model="editItem.sub" />
        <label>Timeline</label>
        <input class="border-b-2" type="text" v-model="editItem.timeline" >
        <button type="submit">Save</button>
    </form>
</template>

<script lang="ts">

import { addNewItem, updateItem } from '@/services/Items';
import { Item } from '@/models/Item';
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: (): Item => {
                return {
                    id: '',
                    header: '',
                    sub: '',
                    timeline: ''
                };
            }
        },
        mode: {
            type: String,
            required: true,
            default: 'edit'
        }
    },
    setup(props, ctx) {
        const route = useRoute();

        const editItem = ref<Item>(props.item);

        const submit = () => {
            if (props.mode === 'new') {
                addNewItem(route.params.pageName as string, editItem.value);
            } else {
                updateItem(route.params.pageName as string, editItem.value);
            }

            ctx.emit("newItem", editItem.value);
        };

        return {
            submit,
            editItem
        };
    },
    emits: ['newItem']
};
</script>