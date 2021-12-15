<template>
	<edit-timeline v-if="loggedIn" />
	<login v-else />
</template>

<script lang="ts">
import EditTimeline from "@/components/EditTimeline.vue";
import Login from "@/components/Login.vue";
import { ref } from "vue";
import { getAuth } from "@firebase/auth";
export default {
	components: {
		EditTimeline,
		Login
	},
	setup() {
		const loggedIn = ref(false);

		const auth = getAuth();

		const checkLoggedIn = () => {
			auth.onAuthStateChanged((user) => {
				loggedIn.value = !!user;
			});
		};

		checkLoggedIn();

		return {
			loggedIn,
		};
	},
};
</script>

<style>
</style>