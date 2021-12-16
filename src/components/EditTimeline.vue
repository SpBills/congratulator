<template> 
    <div class="shadow m-5 p-3 sm:w-100 md:w-1/3">
        <h2 class="text-lg font-bold mb-3">Basic information</h2>
        <form class="flex flex-col" @submit:prevent="submit">
            <label>Client Name</label>
            <input class="border-b-2" type="text" v-model="basic.name" />
            <label>Primary Color</label>
            <input class="border-b-2" type="text" v-model="basic.primaryColor" />

            <button class="mt-5 bg px-5 py-2 text-white" type="submit">Save</button>
        </form>
    </div>

    <div id="path" class="flex flex-col m-5 p-3">
        <h2 class="mb-3 font-bold text-lg">Timeline Items</h2>
        <div class="flex flex-wrap">
            <TimelineItem
                class="mt-3"
                v-for="(item, index) in items"
                :text="item"
                :key="index"
                :editable="true"
                @edit="edit"
                @delete="deleteItem"
                />
        </div>

    </div>

    <div id="edit-path" v-if="showEditItemForm" class="shadow m-5 p-3 sm:w-100 md:w-1/3">
        <TimelineItemForm :item="editItem" mode="edit" @new-item="showEditItemForm = !showEditItemForm" />
    </div>

    <div class="shadow m-5 p-3 sm:w-100 md:w-1/3">
        <button class="bg rounded mb-3 text-white px-5 py-2" @click="showNewItemForm = !showNewItemForm">Add a new Item</button>
        <TimelineItemForm v-if="showNewItemForm" :item="newItem" mode="new" @new-item="displayNewItem" />
    </div>

</template>

<script lang="ts">
import { Page } from "../models/Page";
import { ref } from '@vue/reactivity';
import { Item } from '@/models/Item';
import TimelineItem from './TimelineItem.vue';
import { getPageInfo, updatePage } from '@/services/Page';
import { useRoute } from 'vue-router';
import TimelineItemForm from './TimelineItemForm.vue';
import { deleteItemOnPage, getItemsOnPage } from "@/services/Items";

export default {
    setup() {
        const route = useRoute();
        const basic = ref<Page>({
            name: "",
            primaryColor: "",
        });
        const items = ref<Item[]>([]);
        const showNewItemForm = ref(false);
        const showEditItemForm = ref(false);
        const editItem = ref<Item>({
            header: "",
            sub: "",
            timeline: ""
        });
        const newItem = ref({
            header: "",
            sub: ""
        } as Item);
        const submit = () => {
            updatePage(basic.value);
        };
        const getPage = async () => {
            let pageInfo = await getPageInfo(route.params.pageName as string);
            let retrievedItems = await getItemsOnPage(route.params.pageName as string);

            items.value = retrievedItems;
            basic.value.name = pageInfo.name;
            basic.value.primaryColor = pageInfo.primaryColor;
        }
        getPage();

        const edit = (item: Item) => {
            showEditItemForm.value = !showEditItemForm.value;
            editItem.value = item;
        }

        const deleteItem = (item: Item) => {
            deleteItemOnPage(route.params.pageName as string, item.id as string).then(() => {
                items.value = items.value.filter(i => i.id !== item.id);
            });
        }

        const displayNewItem = (item: Item) => {
            items.value.push(item);
            showNewItemForm.value = !showNewItemForm.value;
            newItem.value = {} as Item;
        }

        return {
            submit,
            basic,
            items,
            showNewItemForm,
            showEditItemForm,
            newItem,
            displayNewItem,
            edit,
            editItem,
            deleteItem
        };
    },
    components: { TimelineItem, TimelineItemForm }
};
</script>

<style>
</style>