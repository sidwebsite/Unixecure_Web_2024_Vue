<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="news-bg">
                <img src="../../assets/images/news/news_bg.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container news-container position-relative">
        <Vue3StickySidebar class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>
            <div class="news-float-card p-3 d-none d-lg-block" data-sticky data-margin-top="113">
                <h5>聯繫專員服務</h5>
                <div class="mb-3 news-float-list">
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-phone"></i></li>
                        <li>04-24523928 分機 300、301、302</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-envelope"></i></li>
                        <li><a href="mailto:servicedesk@unixecure.com.tw">servicedesk@unixecure.com.tw</a></li>
                    </ul>
                </div>
                <RouterLink to="/contact" class="news-float-card-btn">產品諮詢 <i class="fa-sharp fa-solid fa-arrow-right"></i></RouterLink>
            </div>
        </Vue3StickySidebar>
        
        <!--  -->
        <!-- title and breadcrumb start -->
        <div class="news-title-block mw-760 pt-4 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item">最新消息</li>
                    <li class="breadcrumb-item active"><RouterLink to="/videoList">影音專區</RouterLink></li>
                </ul>
            </nav>
            <h1 class="text-center">{{ Name }}</h1>
        </div>
        <!-- title and breadcrumb end -->
        <!-- content start -->
        <section class="news-content-block pt-5">
            <div class="mw-760 mb-6">
                <div class="d-md-flex align-items-center justify-content-between mb-6">
                    <span class="d-block text-center text-md-left mb-6 mb-md-0 fw-bolder">{{ DataTime }}</span>
                    <div class="d-flex justify-content-center">
                        <NewsProduct :productName="Tag"></NewsProduct>
                    </div>
                </div>
            </div>
            <div class="mw-760 pb-9">
                <article class="news-body">
                    <div class="ratio ratio-16x9 mb-6">
                        <iframe :src="`https://www.youtube.com/embed/${youtubeId}`" :title="Name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </article>
                <!-- share -->
                <SocialSharing></SocialSharing>
            </div>
        </section>
        <!-- content end -->
    </div>
    <VideoContentLists :videoData="data"></VideoContentLists>
</template>

<script>
    import Vue3StickySidebar from "vue3-sticky-sidebar";
    import NewsProduct from "../../components/news/NewsProduct.vue";
    import VideoContentLists from "../../components/news/VideoContentLists.vue";
    import SocialSharing from '../../components/SocialSharing.vue'
    import { news } from '../../assets/json/data.json'
    export default {
        data() {
            return {
                data: [],
                Id:'',
                DataTime: '',
                Name: '',
                description: '',
                Tag: [],
                youtubeId: ''
            }
        },
        name: "ServeDev",
        components: {
            Vue3StickySidebar,
            NewsProduct,
            VideoContentLists,
            SocialSharing
        },
        watch: {
            $route(to, from){
                if(to.params.videoId !== from.params.videoId){
                    this.$router.go(0)
                }
            }
        },
        created() {
            const id = this.$route.params.videoId
            const data = news.video
            data.forEach(item => {
                if(item.Id === id) {
                    this.DataTime = item.DataTime
                    this.Name = item.Name
                    this.Tag = item.Tag
                    this.youtubeId = item.youtubeId
                }
            })
            // lists
            for (let i = 0; i < 4; i++) {
                const element = data[i];
                if(element.Id === id) {
                    continue
                } else {
                    this.data.push(element);
                }
            }
        },
    }
</script>