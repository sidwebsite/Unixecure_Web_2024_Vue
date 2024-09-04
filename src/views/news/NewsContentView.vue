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
                    <a href="../contact.html" class="news-float-card-btn">預約諮詢 <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
                </div>
            </Vue3StickySidebar>
            
            <!--  -->
            <!-- title and breadcrumb start -->
            <div class="news-title-block mw-760 pt-4 pb-5">
                <nav class="h-auto">
                    <ul class="breadcrumb news-breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item">最新消息</li>
                        <li class="breadcrumb-item active"><router-link to="/newsLists">新聞中心</router-link></li>
                    </ul>
                </nav>
                <h1 class="text-center">{{ Name }}</h1>
            </div>
            <!-- title and breadcrumb end -->
            <!-- content start -->
            <section class="news-content-block pt-5">
                <div class="mw-760 mb-6">
                    <div class="d-md-flex align-items-center justify-content-between mb-6">
                        <span class="d-block text-center text-md-left mb-6 mb-md-0 fw-bolder">{{ DataTime }} ({{ getWeek(DataTime) }})</span>
                        <div class="d-flex justify-content-center" v-if="isVisible">
                            <NewsProduct :productName="Tag"></NewsProduct>
                        </div>
                    </div>
                </div>
                <div class="mw-760 pb-9">
                    <article class="news-body" v-html="description"></article>
                    <!-- share -->
                    <SocialSharing></SocialSharing>
                </div>
            </section>
            <!-- content end -->
        </div>
        <NewsContentLists :newsData="data"></NewsContentLists>
</template>

<script>
    import Vue3StickySidebar from "vue3-sticky-sidebar";
    import NewsProduct from "../../components/news/NewsProduct.vue";
    import NewsContentLists from '../../components/news/NewsContentLists.vue'
    import SocialSharing from '../../components/SocialSharing.vue'
    import { news } from '../../assets/json/data.json'
    export default {
        data() {
            return {
                data: [],
                DataTime:'',
                Name: '',
                description: '',
                Tag: null,
                isVisible: true
            }
        },
        name: "ServeDev",
        components: {
            Vue3StickySidebar,
            NewsProduct,
            NewsContentLists,
            SocialSharing
        },
        watch: {
            $route(to, from){
                if(to.params. newsId!== from.params.newsId){
                    this.$router.go(0)
                }
            }
        },
        created() {
            const id = this.$route.params.newsId
            const data = news.news
            data.forEach(item => {
                if(item.Id === id) {
                    this.DataTime = item.DataTime
                    this.Name = item.Name
                    this.Tag = item.Tag
                    this.description = item.description
                    item.Tag !== null ? this.isVisible = true : this.isVisible = false
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
        methods: {
            getWeek(date) {
                let result = ''
                let dateNum = new Date(date).getDay()
                switch (dateNum) {
                    case 0:
                        result = '日'
                        break;
                    case 1:
                        result = '一'
                        break;
                    case 2:
                        result = '二'
                        break;
                    case 3:
                        result = '三'
                        break;
                    case 4:
                        result = '四'
                        break;
                    case 5:
                        result = '五'
                        break;  
                    case 6:
                        result = '六'
                        break;       
                    default:
                        break;
                }
                return result
            }
        }
    }
</script>
