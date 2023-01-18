<template>
	<app-header />
	<main class="main">
		<app-about />
		<app-testimonials />
	</main>
	<footer class="footer">
		<section class="getStarted">
			<div class="getStarted__content">
				<p>Simplify how your team works today.</p>
				<AppLink :to="{ name: '' }" class="cta cta--alt">Get Started</AppLink>
			</div>
		</section>
		<section class="contacts">
			<vee-form action="#" class="form" :validation-schema="schema" @submit="handleSubmit">
				<div class="form__group">
					<vee-field name="email" type="email" :bails="false" v-slot="{ field, errors }">
						<input
							type="email"
							class="form__control"
							:class="{'error-input': errors.length }"
							placeholder="Updates in your inbox..."
							v-bind="field"
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
								alt="facebook icon"
								class="social__link-img"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.youtube.com" class="social__link">
							<img src="@/assets/images/icon-youtube.svg" alt="youtube icon" />
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.twitter.com" class="social__link">
							<img src="@/assets/images/icon-twitter.svg" alt="twitter icon" />
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.pinterest.com" class="social__link">
							<img
								src="@/assets/images/icon-pinterest.svg"
								alt="pinterest icon"
							/>
						</AppLink>
					</li>
					<li class="social_item">
						<AppLink to="https://www.instagram.com" class="social__link">
							<img
								src="@/assets/images/icon-instagram.svg"
								alt="instagram icon"
							/>
						</AppLink>
					</li>
				</ul>
				<img src="@/assets/images/logo.svg" alt="logo" class="logo--footer" />
			</div>
			<p class="copyright">Copyright 2020. All Rights Reserved</p>

			<div class="attribution">
				Challenge by
				<AppLink to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</AppLink>
				. Coded by
				<AppLink to="https://www.linkedin.com/in/alfredthompsonovie/">Alfred Thompson Ovie</AppLink>
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
		}
	}
};
</script>

<style scoped></style>
