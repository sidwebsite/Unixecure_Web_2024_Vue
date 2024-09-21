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
    <div class="container pb-9">
        <div class="row">
            <div class="col-12">
                <h1 class="page-title">影音專區</h1>
            </div>
        </div>
        <!-- search start -->
        <div class="row no-gutters select-group">
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>時間</label>
                    <v-select :options="dateOptions" placeholder="所有時間" v-model="dateTimeOption"></v-select>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>產品</label>
                    <v-select :options="productOptions" placeholder="所有產品" v-model="productOption"></v-select>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="select d-flex align-items-center">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 px-0 bg-transparent" placeholder="請輸入關鍵字" v-model="searchWords">
                        <span type="button" class="btn input-group-text"><i class="fa-regular fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- search end -->
        <!-- lists start -->
        <div class="row row-gap-4">
            <!-- item -->
            <div class="col-lg-4 col-md-6 item" v-for="item in displayData" :key="item.Id">
                <router-link :to="{ name: 'videoContent', params: { videoId: item.Id }}" class="default-card card" :title="item.Name">
                    <div class="card-img video-img">
                        <img :src="`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                        <div class="card-date mb-0">{{ item.DataTime }}</div>
                        <div class="card-class">
                            <ul class="card-group">
                                <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                            </ul>
                        </div>
                    </div>
                </router-link>
            </div>
            <p class="text-alarm text-center" v-show="searching.length === 0">沒有符合的資料。</p>
        </div>
        <!-- lists end -->
        <!-- pagination start -->
        <div class="text-center">
            <div class="d-inline-block">
                <Pagepagination :total="total" :pageInit="pageInit" @emit-page="getcurrPage"></Pagepagination>
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
                paginationLimit: 6,
                pageInit: 1,
                pageCount: 0,
                dateTimeOption: '',
                productOption: '',
                searchWords: ''
            }
        },
        components: {
            Pagepagination
        },
        mounted() {
            this.getData()
        },
        computed: {
            searching() {
                return this.data.filter(item => {
                    const matchesName = item.Name.includes(this.searchWords) || this.filterByData(this.searchWords, this.data)
                    const matchesDateTime = item.DataTime.includes(this.dateTimeOption) || this.filterByData(this.dateTimeOption, this.data)
                    const matchesTag = this.productOption === null ? this.data : item.Tag !== null ? item.Tag.join().includes(this.productOption) : false || this.filterByData(this.productOption, this.data)
                    return matchesName && matchesDateTime && matchesTag
                })
            },
            displayData () {
                return this.searching.slice((this.pageInit - 1) * this.paginationLimit, this.paginationLimit * this.pageInit)
            },
            total() {
                const pageCount =  Math.ceil(this.searching.length / this.paginationLimit)
                return pageCount
            },
            dateOptions() {
                const dateTime = []
                this.searching.forEach(item => {
                    if(dateTime.indexOf(item.DataTime) === -1) {
                        dateTime.push(item.DataTime)
                    }
                })
                return dateTime
            },
            productOptions() {
                const product = []
                this.searching.forEach(item => {
                    if(item.Tag !== null) {
                        item.Tag.forEach(val => {
                            if(product.indexOf(val) === -1) {
                                product.push(val)
                            }
                        })
                    }
                })
                return product
            }
        },
        watch: {
            search() {
                this.pageInit = 1
            },
        },
        methods: {
            filterByData(keywords, dataEange) {
                if(keywords === '' || keywords === null) return dataEange
            },
            getData() {
                this.data = news.video
            },
            getcurrPage(num) {
                this.pageInit = num
            }
        }
    }
</script>