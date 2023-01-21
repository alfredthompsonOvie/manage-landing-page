<template>
	<nav class="nav__bar">
		<section class="nav__bar--inner">
			<!-- branding -->
			<AppLink :to="{ name: 'home' }" class="nav__link--footer">
				<img src="@/assets/images/logo.svg" alt="a link to the homepage" class="branding" />
			</AppLink>

			<!-- menu btn -->
			<section class="hamburger" v-if="isMobile">
				<transition name="menuBtn" mode="out-in">
					<button type="button" v-if="!isMenuOpen" @click="openMenu">
						<img
							src="@/assets/images/icon-hamburger.svg"
							alt="open navigation menu"
							class="menu menu--open"
						/>
					</button>
					<button type="button" v-else @click="openMenu">
						<img
							src="@/assets/images/icon-close.svg"
							alt="close navigation menu"
							class="menu menu--close"
						/>
					</button>
				</transition>
			</section>

			<!-- menu mobile-->
			<transition
			@enter="onEnter"
			@leave="onLeave"
			:css="false"
			>
				<div class="overlay" v-if="isMenuOpen">
					<ul class="nav__list" >
					<li class="nav__item">
						<AppLink :to="{ name: '' }" class="nav__link"> Pricing </AppLink>
					</li>
					<li class="nav__item">
						<AppLink :to="{ name: '' }" class="nav__link"> Product </AppLink>
					</li>
					<li class="nav__item">
						<AppLink :to="{ name: '' }" class="nav__link"> About Us </AppLink>
					</li>
					<li class="nav__item">
						<AppLink :to="{ name: '' }" class="nav__link"> Careers </AppLink>
					</li>
					<li class="nav__item">
						<AppLink :to="{ name: '' }" class="nav__link"> Community </AppLink>
					</li>
				</ul>
				</div>
			</transition>

			<!-- menu desktop-->
			<ul class="nav__list--main" v-if="!isMobile">
				<li class="nav__item-main">
					<AppLink :to="{ name: '' }" class="nav__link"> Pricing </AppLink>
				</li>
				<li class="nav__item-main">
					<AppLink :to="{ name: '' }" class="nav__link"> Product </AppLink>
				</li>
				<li class="nav__item-main">
					<AppLink :to="{ name: '' }" class="nav__link"> About Us </AppLink>
				</li>
				<li class="nav__item-main">
					<AppLink :to="{ name: '' }" class="nav__link"> Careers </AppLink>
				</li>
				<li class="nav__item-main">
					<AppLink :to="{ name: '' }" class="nav__link"> Community </AppLink>
				</li>
			</ul>

			<!-- cta -->
			<AppLink :to="{ name: '' }" class="cta" v-if="!isMobile">
				Get Started
			</AppLink>
		</section>
	</nav>
</template>

<script>
import AppLink from "./AppLink.vue";
import { gsap } from "gsap";

export default {
	name: "AppNavigation",
	components: {
		AppLink,
	},
	data() {
		return {
			isMenuOpen: false,

			isMobile: null,
			windowWidth: null,
		};
	},
	created() {
		window.addEventListener("resize", this.checkScreen);

		this.checkScreen();
	},
	methods: {
		openMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		checkScreen() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth <= 930) {
				this.isMobile = true;
				return;
			} else {
				this.isMobile = false;
				this.isMenuOpen = false;
				return;
			}
		},
		onEnter(el, done) {
			const ul = el.children[0];
			const li = ul.children

			const tl = gsap.timeline();
			tl
				.from(el, {
					autoAlpha: 0.01,
					x: 200,
				})
				.from(ul, {
					autoAlpha: 0.01,
					scale: 0.95,
				})
				.from(li, {
					autoAlpha: 0.01,
					x: 20,
					stagger: 0.25,
					onComplete: done
				})
		},
		onLeave(el, done) { 
			const ul = el.children[0];
			const tl = gsap.timeline();
			tl
			.to(ul, {
				autoAlpha: 0.01,
				scale: 0.95,
			})
			.to(el, {
				autoAlpha: 0.01,
				x: 200,
				onComplete: done
				})
		},
	},
};
</script>

<style scoped>
.nav__bar {
	width: 100%;
	position: absolute;
	top: 0;
	display: grid;
	grid-template-columns: 0.1fr 1.8fr 0.1fr;
	grid-template-rows: 6em;
	align-items: center;
}
.nav__bar--inner {
	grid-column: 2;
	grid-row: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 10;
}
.branding {
	width: 8.5em;
}
.hamburger {
	width: 25px;
	height: 22px;
	position: relative;
	z-index: 99;
}
.hamburger button {
	cursor: pointer;
	
}
.menu {
	position: relative;
	display: inline-block;
	z-index: 4;
}
.nav__list {
	max-width: 300px;
	width: 90%;
	position: fixed;
	top: 6em;
	left: 50%;
	transform: translateX(-50%);
	background-color: var(--VaryLightGray);
	text-align: center;
	padding: 1em 0;
	border-radius: 10px;
	z-index: 4;
}
.nav__link {
	display: block;
	color: var(--DarkBlue);
	padding: 0.8em;
	font-weight: var(--fw-bold);
	transition: all 0.3s linear;
}
.nav__link:hover {
	color: var(--DarkGrayishBlue);
}

/* overlay */
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2;
}

.nav__list--main {
	display: flex;
}
@media (min-width: 930px) {
	.nav__bar {
		grid-template-columns: 0.11fr 1.78fr 0.11fr;
	}
	.nav__link {
		font-size: 0.9rem;
	}
}
@media (min-width: 1200px) {
	.nav__bar {
		grid-template-columns: 0.2fr 1.6fr 0.2fr;
	}
}
</style>
