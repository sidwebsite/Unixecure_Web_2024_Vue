<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="statements-bg d-none d-lg-block">
                <img src="../../assets/images/news/statements_bg.svg" alt="">
            </span>
            <span class="statements-bg statements-bg-ipad d-block d-lg-none">
                <img src="../../assets/images/news/statements_bg_ipad.svg" alt="">
            </span>
            <span class="statements-bg statements-bg-phone d-block d-md-none">
                <img src="../../assets/images/news/statements_bg_phone.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container news-container position-relative">
        <Vue3StickySidebar class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>
            <div class="news-float-card p-3 d-none d-lg-block">
                <h5 class="text-center mb-3">精彩報告書內容</h5>
                <RouterLink to="/contact" class="news-float-card-btn">立即索取 <i class="fa-sharp fa-solid fa-arrow-right"></i></RouterLink>
            </div>
        </Vue3StickySidebar>
        
        <!--  -->
        <!-- title and breadcrumb start -->
        <div class="news-title-block mw-760 pt-4 pb-5">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                    <li class="breadcrumb-item">最新消息</li>
                    <li class="breadcrumb-item active"><router-link to="/statementsLists">報告書專區</router-link></li>
                </ul>
            </nav>
        </div>
        <!-- title and breadcrumb end -->
        <!-- content start -->
        <section class="news-content-block bg-white-50 border border-white pt-5">
            <div class="mw-760 pb-9">
                <article class="news-body">
                    <div class="d-md-flex align-items-center mb-6">
                        <div class="pr-md-6 mb-6 mb-md-0">
                            <p class="fw-bolder mb-6 mb-md-3">{{ Issue }}</p>
                            <h1 class="mb-6 mb-md-3">{{ Name }}</h1>
                            <p>{{ Profile }}</p>
                        </div>
                        <div>
                            <figure class="statements-img text-center">
                                <img :src="`pic/statements/${picDownloadPath}`" alt="">
                            </figure>
                        </div>
                    </div>
                    <section v-html="description"></section>
                </article>
                <!-- form start -->
                <StatementsForm></StatementsForm>
                <!-- form end -->
                <!-- share -->
                <div class="share">
                    <SocialSharing></SocialSharing>
                </div>
            </div>
        </section>
        <!-- content end -->
    </div>
</template>

<script>
    import Vue3StickySidebar from "vue3-sticky-sidebar";
    import { news } from '../../assets/json/data.json'
    import StatementsForm from '../../components/news/StatementsForm.vue'
    import SocialSharing from '../../components/SocialSharing.vue'
    export default {
        data() {
            return {
                DataTime:'',
                Issue: '',
                Name: '',
                Profile: '',
                description: '',
                picDownloadPath: '',
            }
        },
        name: "ServeDev",
        components: {
            Vue3StickySidebar,
            StatementsForm,
            SocialSharing
        },
        created() {
            const id = this.$route.params.statementsId
            const data = news.statements
            data.forEach(item => {
                if(item.Id === id) {
                    this.DataTime = item.DataTime
                    this.Issue = item.Issue
                    this.Name = item.Name
                    this.Profile = item.Profile
                    this.picDownloadPath = item.picDownloadPath
                    this.description = item.description
                }
            })
        }
    }
</script>