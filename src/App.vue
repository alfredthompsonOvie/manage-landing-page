<template>
   <!-- navigation -->
   <app-navigation />
   
	<router-view></router-view>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';

export default {
	name: "App",
	components: {
		AppNavigation,
	},
};
</script>

<style scoped></style>
