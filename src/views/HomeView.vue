<template>
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
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppAbout from "../components/AppAbout.vue";
import AppTestimonials from "../components/AppTestimonials.vue";
import AppLink from "../components/AppLink.vue";
import { gsap } from "gsap";

export default {
	name: "HomeView",
	components: {
		AppHeader,
		AppAbout,
		AppTestimonials,
		AppLink,
	},
	data() {
		return {
			schema: {
				email: "required|min:2|max:50|email",
			},
		};
	},
	methods: {
		handleSubmit(values) {
			console.log(values);
		},
	},
	mounted() {
		const tl = gsap.timeline();

		tl
		.from(".hero__illustration", {
			autoAlpha: 0.01,
			x: 20,
		})
		.from(".hero__content", {
			autoAlpha: 0.01,
			y: 20,
			stagger: 0.2,
		});
	}
};
</script>

<style scoped></style>
