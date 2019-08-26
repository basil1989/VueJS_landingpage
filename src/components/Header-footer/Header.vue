<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon" alt="logo">
            </div>
            <div class="nav">
                <img
                    :src="menuIcon"
                    alt="menu-icon"
                    @click="showSidePanel = !showSidePanel"
                >
            </div>

            <md-drawer
                :md-active.sync="showSidePanel"
                :md-right="true"
                class="side-drawer"
            />

        </div>
    </header>
</template>

<script>
    import Logo from '../../assets/images/logo.png';
    import Menu from '../../assets/images/menu.png';

    export default {
        name: "Header",
        data() {
            return {
                logoIcon: Logo,
                menuIcon: Menu,
                showSidePanel: false
            }
        }
    }
</script>

<style scoped>
</style>