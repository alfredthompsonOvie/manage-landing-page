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
				<a href="#" class="cta cta--alt">Get Started</a>
			</div>
		</section>
		<section class="contacts">
			<form action="#" class="form">
				<div class="form__group">
					<!-- <label for="email"></label> -->
					<input
						type="email"
						class="form__control"
						placeholder="Updates in your inbox..."
					/>
					<button type="submit" class="submitBtn">Go</button>
				</div>
			</form>
			<div class="footer__links">
				<ul class="nav__list--footer">
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Home</a>
					</li>
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Pricing</a>
					</li>
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Products</a>
					</li>
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">About Us</a>
					</li>
				</ul>
				<ul class="nav__list--footer">
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Careers</a>
					</li>
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Community</a>
					</li>
					<li class="nav__item--footer">
						<a href="#" class="nav__link--footer">Privacy Policy</a>
					</li>
				</ul>
			</div>
			<div class="social__links">
				<ul class="social__list">
					<li class="social_item">
						<a href="#" class="social__link">
							<img src="@/assets/images/icon-facebook.svg" alt="facebook icon" />
						</a>
					</li>
					<li class="social_item">
						<a href="#" class="social__link">
							<img src="@/assets/images/icon-youtube.svg" alt="facebook icon" />
						</a>
					</li>
					<li class="social_item">
						<a href="#" class="social__link">
							<img src="@/assets/images/icon-twitter.svg" alt="facebook icon" />
						</a>
					</li>
					<li class="social_item">
						<a href="#" class="social__link">
							<img src="@/assets/images/icon-pinterest.svg" alt="facebook icon" />
						</a>
					</li>
					<li class="social_item">
						<a href="#" class="social__link">
							<img src="@/assets/images/icon-instagram.svg" alt="facebook icon" />
						</a>
					</li>
				</ul>
				<img src="@/assets/images/logo.svg" alt="logo" class="logo--footer" />
			</div>
			<p class="copyright">Copyright 2020. All Rights Reserved</p>
		</section>
	</footer>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppAbout from "../components/AppAbout.vue";
import AppTestimonials from "../components/AppTestimonials.vue";

export default {
	name: "HomeView",
	components: {
		AppHeader,
		AppAbout,
		AppTestimonials,
	},
};
</script>

<style scoped></style>
