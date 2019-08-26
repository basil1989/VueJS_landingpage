<template>
    <footer>
        <div class="container">
            <div>
                <img :src="logoIcon" alt="Logo">
                <div class="contact">
                    <div>Call Us</div>
                    <div>42034-23953</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from '../../assets/images/logo.png';

    export default {
        name: "Footer",
        data() {
            return {
                logoIcon: Logo
            }
        }
    }
</script>

<style scoped>

</style>