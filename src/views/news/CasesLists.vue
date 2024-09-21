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
    <div class="container pb-9">
        <div class="row">
            <div class="col-12"><h1 class="page-title">成功案例</h1></div>
        </div>
        <!-- search start -->       
        <div class="row no-gutters select-group">
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>時間</label>
                    <v-select :options="dateOptions" placeholder="所有時間" v-model="dateTimeOption"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>產品</label>
                    <v-select :options="productOptions" placeholder="所有產品" v-model="productOption"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>產業別</label>
                    <v-select :options="industryOptions" placeholder="所有產業" v-model="industryOption"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
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
            <router-link :to="{ name: 'casesContent', params: { casesId: item.Id }}" v-for="item in displayData" :key="item.Id" :title="item.Name" class="strip-card card">
                <div class="row no-gutters flex-md-row-reverse">
                    <div class="col-md-6">
                        <div class="card-img">
                            <div class="bg-img">
                                <img :src="`./pic/cases/${item.picDownloadPath}`" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title limitLines-3">{{ item.Name }}</h5>
                            <p class="card-text limitLines-3">{{ item.Profile }}</p>
                            <div class="card-class">
                                <span>{{ item.Industry }}</span>
                                <ul class="card-group">
                                    <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                                </ul>
                            </div>
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
                dateTimeOption: '',
                industryOption: '',
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
                    const matchesName = item.Name.includes(this.searchWords) || item.Profile.includes(this.searchWords) || this.filterByData(this.searchWords, this.data)
                    const matchesDateTime = item.DataTime.includes(this.dateTimeOption) || this.filterByData(this.dateTimeOption, this.data)
                    const matchesTag = this.productOption === null ? this.data : item.Tag !== null ? item.Tag.join().includes(this.productOption) : false || this.filterByData(this.productOption, this.data)
                    const matchesIndustry = item.Industry.includes(this.industryOption) || this.filterByData(this.industryOption, this.data)
                    return matchesName && matchesDateTime && matchesTag && matchesIndustry
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
            },
            industryOptions() {
                const industry = []
                this.searching.forEach(item => {
                    if(industry.indexOf(item.Industry) === -1) {
                        industry.push(item.Industry)
                    }
                })
                return industry
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
                this.data = news.cases
            },
            getcurrPage(num) {
                this.pageInit = num
            }
        }
    }
</script>