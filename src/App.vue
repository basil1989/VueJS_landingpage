<template>
  <div>
    <comp-header></comp-header>
    <div>
      <comp-featured />
      <comp-menu />
      <comp-call-us />
      <comp-newsletter />
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header';
import compFooter from './components/Header-footer/Footer';
import compFeatured from './components/Featured/index';
import compMenu from './components/Menu/index';
import compCallUs from './components/CallUs/index';
import compNewsletter from './components/Newsletter/index';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu,
    compCallUs,
    compNewsletter
  }
}
</script>

<style>
@import "./assets/style.css";
</style>
