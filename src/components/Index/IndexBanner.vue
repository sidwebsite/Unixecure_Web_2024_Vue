<template>
    <swiper :autoplay="{
        delay: 9000,
        disableOnInteraction: false,
    }" 
    :loop="true"
    :lazy="true"
    :modules="modules" 
    class="bannerSwiper">
        <swiper-slide v-for="item in bannerData" :key="item.Id">
            <div class="banner-item">
                <img :src="`./banner/${item.picDownloadPath}`" alt="" loading="lazy">
                <div class="container-absolute z-index-1 d-flex align-items-center">
                    <div class="banner-item-body">
                        <article>
                            <h1 v-html="item.title"></h1>
                            <p class="mb-4">{{ item.description }}</p>
                            <RouterLink to="/contact" class="btn-secondary">聯絡我們</RouterLink>
                        </article>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/scss';
    
    export default {
        props: ['bannerData'],
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay],
            };
        },
    };
</script>
