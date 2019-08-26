<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay: 200, scale: 2}">
                <h1>Hungry ?</h1>
            </div>
            <div
                class="second"
                v-scroll-reveal.reset="{delay: 300, afterReveal: () => {
                    secondAnim = true
                }}"
            >
                <template v-if="secondAnim">
                    <comp-anim />
                </template>
            </div>
            <div class="third" v-scroll-reveal.reset="{delay: 400, scale: 2}">
                <span>Give us a call</span> <span> 6666-3399</span>
            </div>
        </div>
    </div>
</template>

<script>
    import compAnim from './anim';

    export default {
        name: "anim",
        data() {
            return {
                secondAnim: false
            }
        },
        components: {
            compAnim
        }
    }
</script>

<style scoped>

</style>