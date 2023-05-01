<template>
	<!-- navigation -->
	<app-navigation />
	<app-header />
	<main class="main">
		<app-about />
		<app-testimonials />
	</main>
	<footer class="footer">
		<section class="getStarted">
			<div class="getStarted__content">
				<h1>Simplify how your team works today.</h1>
				<AppLink :to="{ name: '' }" class="cta cta--alt">Get Started</AppLink>
			</div>
		</section>
		<section class="contacts">
			<vee-form
				action="#"
				class="form"
				:validation-schema="schema"
				@submit="handleSubmit"
			>
				<div class="form__group">
					<vee-field
						name="email"
						type="email"
						:bails="false"
						v-slot="{ field, errors }"
					>
					<label for="email">Email</label>
						<input
							type="email"
							id="email"
							class="form__control"
							:class="{ 'error-input': errors.length }"
							placeholder="Updates in your inbox..."
							v-bind="field"
							aria-label="get updates in your inbox"
							aria-required="true"
						/>
						<transition name="errorMsg">
							<ErrorMessage name="email" class="errorMsg" />
						</transition>
					</vee-field>
				</div>
				<button type="submit" class="submitBtn">Go</button>
			</vee-form>
			<div class="footer__links">
				<ul class="nav__list--footer">
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Home
						</AppLink>
					</li>
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Pricing
						</AppLink>
					</li>
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Products
						</AppLink>
					</li>
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							About Us
						</AppLink>
					</li>
				</ul>
				<ul class="nav__list--footer">
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Careers
						</AppLink>
					</li>
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Community
						</AppLink>
					</li>
					<li class="nav__item--footer">
						<AppLink :to="{ name: '' }" class="nav__link--footer">
							Privacy Policy
						</AppLink>
					</li>
				</ul>
			</div>
			<div class="social__links">
				<ul class="social__list">
					<li class="social_item">
						<AppLink to="https://www.facebook.com" class="social__link">
							<img
								src="@/assets/images/icon-facebook.svg"
								alt="visit our facebook page"
								class="social__link-img"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.youtube.com" class="social__link">
							<img
								src="@/assets/images/icon-youtube.svg"
								alt="check out our youtube channel"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.twitter.com" class="social__link">
							<img
								src="@/assets/images/icon-twitter.svg"
								alt="see what's on our twitter feeds"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.pinterest.com" class="social__link">
							<img
								src="@/assets/images/icon-pinterest.svg"
								alt="visit our pinterest page"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.instagram.com" class="social__link">
							<img
								src="@/assets/images/icon-instagram.svg"
								alt="check out our instagram page"
							/>
						</AppLink>
					</li>
				</ul>
				<AppLink :to="{ name: 'home' }" class="nav__link--footer">
					<img
						src="@/assets/images/logo.svg"
						alt="a link to manage homepage"
						class="logo--footer"
					/>
				</AppLink>
			</div>
			<p class="copyright">Copyright 2020. All Rights Reserved</p>

			<div class="attribution">
				Challenge by
				<AppLink to="https://www.frontendmentor.io?ref=challenge"
					>Frontend Mentor</AppLink
				>
				. Coded by
				<AppLink to="https://www.linkedin.com/in/alfredthompsonovie/"
					>Alfred Thompson Ovie</AppLink
				>
				.
			</div>
		</section>
	</footer>

	<!-- <router-view></router-view> -->
</template>

<script setup>
import AppNavigation from "@/components/AppNavigation.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppAbout from "@/components/AppAbout.vue";
import AppTestimonials from "@/components/AppTestimonials.vue";
import AppLink from "@/components/AppLink.vue";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const schema = ref({
	email: "required|min:2|max:50|email",
});
const handleSubmit = (values) => {
	console.log(values);
};

onMounted(() => {
	const tl = gsap.timeline();

	tl.from("#app", {
		autoAlpha: 0,
	})
		.from(".nav__bar", {
			autoAlpha: 0.01,
			y: -20,
		})
		.from(".hero__illustration", {
			autoAlpha: 0.01,
			x: 20,
		})
		.fromTo([".hero__content h1", ".hero__content p"], {
			autoAlpha: 0.01,
			y: 20,
		}, {
			autoAlpha: 1,
			y: 0,
			stagger: 0.2,
		})
		.fromTo(".cta--main", {
			autoAlpha: 0.01,
			x: 20
		}, {
			autoAlpha: 1,
			x: 0
		})

});

// export default {
// 	name: "App",
// 	components: {
// 		AppNavigation,
// 	},
// };
</script>

<style scoped></style>
