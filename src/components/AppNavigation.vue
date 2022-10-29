<template>
	<nav class="nav__bar">
    <section class="nav__bar--inner">
      <!-- branding -->
      <img src="@/assets/images/logo.svg" alt="logo" />
  
      <!-- menu btn -->
      <div class="hamburger" v-if="isMobile">
        <transition name="menuBtn" mode="out-in">
          <button type="button" v-if="!isMenuOpen" @click="openMenu">
            <img src="@/assets/images/icon-hamburger.svg" alt="" class="menu menu--open" />
          </button>
          <button type="button" v-else @click="openMenu">
            <img
              src="@/assets/images/icon-close.svg"
              alt=""
              class="menu menu--close"
            />
          </button>
        
        </transition>
      </div>
  
      <!-- menu mobile-->
      <ul class="nav__list" v-if="isMenuOpen">
        <li class="nav__item">
          <a href="#" class="nav__link">Pricing</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Product</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">About Us</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Careers</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Community</a>
        </li>
      </ul>
  
      <!-- overlay -->
      <transition name="overlay">
        <div class="overlay" v-if="isMenuOpen"></div>
      </transition>
  
       <!-- menu desktop-->
      <ul class="nav__list-main" v-if="!isMobile">
        <li class="nav__item-main">
          <a href="#" class="nav__link">Pricing</a>
        </li>
        <li class="nav__item-main">
          <a href="#" class="nav__link">Product</a>
        </li>
        <li class="nav__item-main">
          <a href="#" class="nav__link">About Us</a>
        </li>
        <li class="nav__item-main">
          <a href="#" class="nav__link">Careers</a>
        </li>
        <li class="nav__item-main">
          <a href="#" class="nav__link">Community</a>
        </li>
      </ul>
  
      <!-- cta -->
      <a href="#" class="cta" v-if="!isMobile">Get Started</a>

    </section>
	</nav>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      isMenuOpen: false,

      isMobile: null,
      windowWidth: null,
    }
  },
  created() {

    window.addEventListener('resize', this.checkScreen);

    this.checkScreen();
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
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

    }
  }
};
</script>

<style scoped>
.nav__bar {
  width: 100%;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: .1fr 1.8fr .1fr;
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
.hamburger {
	width: 25px;
	height: 22px;
	position: relative;
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
	/* position: absolute; */
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
  /* position: absolute; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

/* transition */
.menuBtn-enter-from,
.menuBtn-leave-to  {
  opacity: 0;
  transform: rotate(360deg);
}
.menuBtn-enter-active, .menuBtn-leave-active {
  transition: all .3s linear;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.overlay-enter-active, .overlay-leave-active {
  transition: all .3s linear;
}
.nav__list-main {
  display: flex;
}
@media (min-width: 930px) {
  .nav__bar {
  grid-template-columns: .11fr 1.78fr .11fr;
}
/* .nav__list {
		position: static;
		background-color: transparent;
		text-align: left;
		padding: 0;
		display: flex;
	} */
	.nav__link {
		font-size: 0.9rem;
	}
}
@media (min-width: 1200px){
  .nav__bar {
  grid-template-columns: .2fr 1.6fr .2fr;
}
}
</style>
