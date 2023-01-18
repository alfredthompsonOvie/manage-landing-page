<template>
	<header class="header">
    <!-- hero section -->
		<section class="hero">
			<div class="hero__inner">
				<div class="hero__illustration">
					<img src="@/assets/images/illustration-intro.svg" alt="" class="hero__img" />
				</div>
				<div class="hero__content">
					<h1 class="title title--main">
						Bring everyone together to build better products.
					</h1>
					<p class="text text--main">
						Manage makes it simple for software teams to plan day-to-day tasks
						while keeping the larger team goals in view.
					</p>
					<AppLink :to="{ name: '' }" class="cta cta--main">Get Started</AppLink>
				</div>
			</div>
		</section>
	</header>
</template>

<script>
import AppLink from './AppLink.vue';
export default {
	name: "AppHeader",
	components: {
		AppLink,
	}
};
</script>