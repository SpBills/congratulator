<template>
    <button @click="login">
        LOGIN
    </button>
</template>

<script lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const login = async () => {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            try {
                await signInWithPopup(auth, provider);

                router.push("/dashboard")
            } catch (e) {
                alert(e)
            }


        }

        return {
            login
        }
    }
};
</script>

<style>
</style>