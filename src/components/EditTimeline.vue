<template>
	<h1>Hello!</h1>

    <h1>Basic information</h1>
    <form class="flex flex-col">
        <label>Client Name</label>
        <input type="text" v-model="basic.name" />
        <label>Primary Color</label>
        <input type="text" v-model="basic.primaryColor" />
    </form>

    <div id="path" class="flex">
        <TimelineItem v-for="(item, index) in items" :text="item" :key="index" :editable="true" @edit="edit" @delete="deleteItem" />
    </div>

    <div id="edit-path">
        <TimelineItemForm v-if="showEditItemForm" :item="editItem" mode="edit" />
    </div>

    <button @click="showNewItemForm = !showNewItemForm">Add a new Item</button>
    <TimelineItemForm v-if="showNewItemForm" :item="newItem" mode="new" />
	<form @submit:prevent="submit">
		<button type="submit">Save</button>
	</form>
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

        return {
            submit,
            basic,
            items,
            showNewItemForm,
            showEditItemForm,
            newItem,
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