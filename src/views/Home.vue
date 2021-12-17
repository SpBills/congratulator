<template>
	<main class="">
		<div class="flex flex-col height justify-center px-5">
			<h1 class="text-5xl font-bold mb-10">
				Congratulations, {{pageInfo.name}}!
			</h1>
			<p class="text-2xl mb-10">
				You've just finished the biggest (and hardest) step in the
				Software Development process.
			</p>
			<button
				class="
					self-start
					px-3
					py-2
					bg-blue-500
					rounded
					text-white
					font-semibold
				"
				@click="goToTrack()"
			>
				See what is next.
			</button>
		</div>

		<div class="bg-black px-5 py-10" id="track">
			<h2 class="text-3xl text-white font-bold mb-10">
				Your personalized track.
			</h2>
			<timeline :items="items" />
		</div>
	</main>
</template>

<script lang="ts">
import Timeline from "@/components/Timeline.vue";
import { Item } from "@/models/Item";
import { Page } from "@/models/Page";
import { getItemsOnPage } from "@/services/Items";
import { getPageInfo } from "@/services/Page";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
	components: {
		Timeline,
	},
	setup() {
		const route = useRoute();
		const pageInfo = ref({} as Page);
		const items = ref([] as Item[]);

		const getItems = async () => {
			let retrievedItems = await getItemsOnPage(route.params.pageName as string);
			items.value = retrievedItems;
		};

		getItems();

		const getPage = async () => {
			let res = await getPageInfo(route.params.pageName as string)

			pageInfo.value = res;
		};
		getPage();

		const goToTrack = async () => {
			window.location.href = '#track';
		}

		return {
			pageInfo,
			goToTrack,
			items
		}
	}
};
</script>

<style>
h1 {
	font-family: poppins;
	font-weight: 700;
}

.height {
	height: 90vh;
}
</style>
