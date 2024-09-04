<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="cases-bg-rightTo">
                <img src="../../assets/images/news/deco-right-top.svg" alt="">
            </span>
            <span class="cases-bg-rightBotton">
                <img src="../../assets/images/news/deco-right-botton.svg" alt="">
            </span>
            <span class="cases-bg-left">
                <img src="../../assets/images/news/deco-left.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container news-container position-relative">
        <Vue3StickySidebar class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>
            <div class="news-float-card p-3 d-none d-lg-block">
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
                    <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                    <li class="breadcrumb-item">最新消息</li>
                    <li class="breadcrumb-item active"><router-link to="/casesLists">成功案例</router-link></li>
                </ul>
            </nav>
            <h1 class="text-center">{{ Name }}</h1>
        </div>
        <!-- title and breadcrumb end -->
        <!-- content start -->
        <section class="news-content-block pt-5">
            <div class="mw-760 mb-6">
                <div class="d-md-flex align-items-center justify-content-between mb-6">
                    <span class="d-block text-center text-md-left mb-6 mb-md-0 fw-bolder"></span>
                    <div class="d-flex justify-content-center">
                        <span class="profession">{{ Industry }}</span>
                        <NewsProduct :productName="Tag"></NewsProduct>
                    </div>
                </div>                            
            </div>
            <div class="mw-760 pb-9">
                <article class="news-body" v-html="Description"></article>
                <!-- share -->
                <SocialSharing></SocialSharing>
            </div>
        </section>
        <!-- content end -->
    </div>
    <CasesContentLists :casesData="data"></CasesContentLists>
</template>

<script>
    import Vue3StickySidebar from "vue3-sticky-sidebar";
    import { news } from '../../assets/json/data.json'
    import NewsProduct from "../../components/news/NewsProduct.vue";
    import CasesContentLists from "../../components/news/CasesContentLists.vue";
    import SocialSharing from '../../components/SocialSharing.vue'
    export default {
        data() {
            return {
                data: [],
                Industry:'',
                Name: '',
                Description: '',
                Tag: []
            }
        },
        name: "ServeDev",
        components: {
            Vue3StickySidebar,
            NewsProduct,
            CasesContentLists,
            SocialSharing
        },
        watch: {
            $route(to, from){
                if(to.params.casesId !== from.params.casesId){
                    this.$router.go(0)
                }
            }
        },
        created() {
            const id = this.$route.params.casesId
            const data = news.cases
            data.forEach(item => {
                if(item.Id === id) {
                    this.Industry = item.Industry
                    this.Name = item.Name
                    this.Tag = item.Tag
                    this.Description = item.Description
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