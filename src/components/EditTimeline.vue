<template>
	<h1>Hello!</h1>

    <h1>Basic information</h1>
    <form>
        <input type="text" v-model="basic.name" />
        <input type="text" v-model="basic.primaryColor" />
    </form>

    <div id="path">
        
    </div>

    <h1>Add a new item</h1>
	<form @submit:prevent="submit">
		<button type="submit">Save</button>
	</form>
</template>

<script lang="ts">
import { addNewItem } from '@/services/Items';
import { BasicInfo } from "../models/BasicInfo";
import { ref } from '@vue/reactivity';
import { Item } from '@/models/Item';
export default {
	setup() {
        const basic = {
            name: "",
            primaryColor: ""
        } as BasicInfo;

        const items = [

        ]

        const newItem = ref({
            header: "",
            sub: ""
        } as Item)

		const submit = () => {
            addNewItem(newItem.value)
        };

		return {
			submit,
            basic
		};
	},
};
</script>

<style>
</style>