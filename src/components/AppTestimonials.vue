<template>
	<section class="testimonials">
		<div class="testimonial__heading">
			<h2 class="title title--subHeading">What they've said</h2>
		</div>

		<swiper
			:slidesPerView="'auto'"
			:centeredSlides="true"
			:spaceBetween="20"
			:pagination="{
				clickable: true,
			}"
			:autoplay="{
				delay: 3500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}"
			:grabCursor="true"
			:speed="1500"
			:mousewheel="true"
			:loop="true"
			:breakpoints="{
				'640': {
					spaceBetween: 20,
					slideToClickedSlide: true,
				},
				'768': {
					spaceBetween: 30,
					slideToClickedSlide: true,
				},
				'1024': {
					spaceBetween: 40,
					slideToClickedSlide: true,
				},
			}"
			:modules="modules"
			class="testimonial__wrapper"
		>
			<swiper-slide class="testimonial__card">
				<div class="profile">
					<img src="@/assets/images/avatar-anisha.png" alt="a profile picture of Anisha li" class="avatar" />
					<p class="profile__name">Anisha Li</p>
				</div>
				<p class="text">
					“Manage has supercharged our team's workflow. The ability to maintain
					visibility on larger milestones at all times keeps everyone
					motivated.”
				</p>
			</swiper-slide>
			<swiper-slide class="testimonial__card">
				<div class="profile">
					<img src="@/assets/images/avatar-ali.png" alt="a profile picture of Ali Bravo" class="avatar" />
					<p class="profile__name">Ali Bravo</p>
				</div>
				<p class="text">
					“We have been able to cancel so many other subscriptions since using
					Manage. There is no more cross-channel confusion and everyone is much
					more focused.”
				</p>
			</swiper-slide>
			<swiper-slide class="testimonial__card">
				<div class="profile">
					<img src="@/assets/images/avatar-richard.png" alt="a profile picture of Richard Watts" class="avatar" />
					<p class="profile__name">Richard Watts</p>
				</div>
				<p class="text">
					“Manage allows us to provide structure and process. It keeps us
					organized and focused. I can’t stop recommending them to everyone I
					talk to!”
				</p>
			</swiper-slide>
			<swiper-slide class="testimonial__card">
				<div class="profile">
					<img src="@/assets/images/avatar-shanai.png" alt="a profile picture of Shanai Gough" class="avatar" />
					<p class="profile__name">Shanai Gough</p>
				</div>
				<p class="text">
					“Their software allows us to track, manage and collaborate on our
					projects from anywhere. It keeps the whole team in-sync without being
					intrusive.”
				</p>
			</swiper-slide>
		</swiper>

		<AppLink :to="{ name: '' }" class="cta cta--main">Get Started</AppLink>
	</section>
</template>

<script>
import AppLink from "./AppLink.vue";
import { Pagination, Autoplay } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
	name: "AppTestimonials",
	components: {
		Swiper,
		SwiperSlide,
		AppLink,
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log("slide change");
		};

		return {
			onSwiper,
			onSlideChange,
			modules: [Pagination, Autoplay],
		};
	},
};
</script>
