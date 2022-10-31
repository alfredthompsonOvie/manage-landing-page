<template>
	<section class="testimonials">
		<div class="testimonial__heading">
			<h2 class="title title--subHeading">What they've said</h2>
		</div>
		<!--  -->
		<!-- :effect="'cube'"
      :cubeEffect="{
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }" -->
		<swiper
			:grabCursor="true"
			:autoplay="{
				delay: 2500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}"
			:centeredSlides="true"
			:slidesPerView="'auto'"
			:pagination="{ clickable: true }"
			:loop="true"
			:spaceBetween="10"
			:breakpoints="{
				'700': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				// '768': {
				//   slidesPerView: 3,
				//   spaceBetween: 20,
				// },
				// '1024': {
				//   slidesPerView: 5,
				//   spaceBetween: 50,
				// },
			}"
			:modules="modules"
			class="testimonial__wrapper"
		>
			<swiper-slide class="testimonial__card">
				<div class="profile">
					<img src="@/assets/images/avatar-anisha.png" alt="" class="avatar" />
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
					<img src="@/assets/images/avatar-ali.png" alt="" class="avatar" />
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
					<img src="@/assets/images/avatar-richard.png" alt="" class="avatar" />
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
					<img src="@/assets/images/avatar-shanai.png" alt="" class="avatar" />
					<p class="profile__name">Shanai Gough</p>
				</div>
				<p class="text">
					“Their software allows us to track, manage and collaborate on our
					projects from anywhere. It keeps the whole team in-sync without being
					intrusive.”
				</p>
			</swiper-slide>
		</swiper>

		<a href="#" class="cta cta--main">Get Started</a>
	</section>
</template>

<script>
import { Pagination, Autoplay, EffectCube } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
export default {
	name: "AppTestimonials",
	components: {
		Swiper,
		SwiperSlide,
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
			modules: [Pagination, Autoplay, EffectCube],
		};
	},
};
</script>
