<template>
    <swiper 
    :slides-per-view="1.3"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
    }" 
    :loop="true"
    :modules="modules"
    class="albumSwiper">
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic1.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic2.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic3.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic4.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic5.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic6.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic7.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic8.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide><img src="../../assets/images/aboutUs/recruit_pic9.jpg" alt="" class="img-fluid"></swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay],
            };
        },
    }
</script>

<style>

</style>