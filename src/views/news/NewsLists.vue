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
            <div class="col-12"><h1 class="page-title">新聞中心</h1></div>
        </div>
        <!-- search start -->
        <div class="row no-gutters select-group">
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>時間</label>
                    <v-select :options="dateOptions" placeholder="請選擇時間" v-model="dateTimeOption" :clearable="false"></v-select>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>產品</label>
                    <v-select :options="productOptions" placeholder="請選擇產品" v-model="productOption" :clearable="false"></v-select>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="select d-flex align-items-center">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 px-0 bg-transparent" placeholder="請輸入關鍵字" v-model="searchWords">
                        <span type="button" class="btn input-group-text" id=""><i class="fa-regular fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- search end -->
        <!-- lists start -->
        <div class="news-lists">
            <!-- item -->
            <router-link :to="{ name: 'newsContent', params: { newsId: item.Id }}" v-for="item in displayData" :key="item.Id" :title="item.Name" class="strip-card card">
                <div class="row no-gutters flex-md-row-reverse">
                    <div class="col-md-6">
                        <div class="card-img">
                            <div class="bg-img">
                                <img :src="`./pic/news/${item.picDownloadPath}`" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                            <div class="card-date">{{ item.DataTime }} ({{ getWeek(item.DataTime) }})</div>
                            <p class="card-text limitLines-3">{{ item.Profile }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
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
                paginationLimit: 5,
                pageInit: 1,
                pageCount: 0,
                dateTimeOption: '所有時間',
                productOption: '所有產品',
                selectInit: {
                    dateTimeValue: '所有時間',
                    productValue: '所有產品'
                },
                searchWords: '',
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
                    const matchesName = item.Name.includes(this.searchWords) || item.Profile.includes(this.searchWords) || this.filterByData(this.searchWords, this.data)
                    const matchesDateTime = item.DataTime.includes(this.dateTimeOption) || this.filterByData(this.dateTimeOption, this.selectInit.dateTimeValue, this.data)
                    const matchesTag = this.productOption === this.selectInit.productValue ? this.data : item.Tag !== null ? item.Tag.join().includes(this.productOption) : false || this.filterByData(this.productOption, this.selectInit.productValue, this.data)
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
                dateTime.push(this.selectInit.dateTimeValue)
                this.searching.forEach(item => {
                    const year = new Date(item.DataTime).getFullYear()
                    if(dateTime.indexOf(year) === -1) {
                        dateTime.push(year)
                    }
                })
                return dateTime
            },
            productOptions() {
                const product = []
                product.push(this.selectInit.productValue)
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
            filterByData(keywords, allValue='' || null, dataEange) {
                if(keywords === allValue) return dataEange
            },
            getData() {
                this.data = news.news
            },
            getcurrPage(num) {
                this.pageInit = num
            },
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