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
    <div class="container pb-9">
        <div class="row">
            <div class="col-12"><h1 class="page-title">報告書專區</h1></div>
        </div>
        <!-- lists start -->
        <div class="row row-gap-4 justify-content-center">
            <!-- item -->
            <div class="col-lg-4 col-md-6 pt-9" v-for="item in displayData" :key="item.Id">
                <router-link :to="{ name: 'statementsContent', params: { statementsId: item.Id }}" :title="item.Name" class="statements-card card d-flex flex-column">
                    <div class="card-img">
                        <img :src="`./pic/statements/${item.picDownloadPath}`" alt="">
                    </div>
                    <div class="card-body flex-grow-1 d-flex flex-column">
                        <h5 class="card-title limitLines-3 text-center">{{ item.Name }}</h5>
                        <div class="card-date">{{ item.DataTime }}</div>
                    </div>
                    <div class="card-footer">
                        前往了解 <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- lists end -->
        <!-- pagination start -->
        <div class="text-center">
            <div class="d-inline-block">
                <Pagepagination :pages="pages" @emit-page="getcurrPage"></Pagepagination>
            </div>                                
        </div>
        <!-- pagination end -->
    </div>
</template>
<script>
    import { news } from '../../assets/json/data.json'
    import Pagepagination from '../../components/PagePagination.vue'
    export default {
        data() {
            return {
                data: [],
                paginatedData: null,
                pages: {
                    paginationLimit: 6,
                    pageInit: 1,
                    pageCount: 0
                }
            }
        },
        components: {
            Pagepagination
        },
        mounted() {
            this.getData()
        },
        computed: {
            displayData () {
                return this.data.slice((this.pages.pageInit - 1) * this.pages.paginationLimit, this.pages.paginationLimit * this.pages.pageInit)
            }
        },
        methods: {
            getData() {
                this.data = news.statements
                this.pages.pageCount = Math.ceil(this.data.length / this.pages.paginationLimit)
            },
            getcurrPage(num) {
                this.pages.pageInit = num
            }
        }
    }
</script>