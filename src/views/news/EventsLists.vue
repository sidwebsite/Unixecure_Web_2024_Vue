<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="events-bg-left">
                <img src="../../assets/images/news/events-left.svg" alt="">
            </span>
            <span class="events-bg-right">
                <img src="../../assets/images/news/events-right.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container pb-9">
        <div class="row">
            <div class="col-12"><h1 class="page-title">行銷活動</h1></div>
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
                    <label>活動形式</label>
                    <v-select :options="locationOptions" placeholder="所有形式" v-model="locationOption"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
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
            <div class="col-lg-4 col-md-6" v-for="item in displayData" :key="item.Id">
                <router-link :to="{ name: 'eventsContent', params: { eventsId: item.Id }}" :title="item.Name" class="default-card card d-flex flex-column">
                    <div class="card-img">
                        <img :src="`./pic/events/${item.picDownloadPath}`" alt="">
                    </div>
                    <div class="card-body flex-grow-1 d-flex flex-column">
                        <ul class="card-logo d-flex">
                            <li v-for="organizer in item.organizer" :key="organizer"><img :src="`./product/${organizerPic(organizer)}.png`" :alt="organizer"></li>
                        </ul>
                        <h5 class="card-title limitLines-2 flex-grow-1 d-flex align-items-center">{{ item.Name }}</h5>
                        <div class="d-flex align-items-center">
                            <div class="card-date flex-grow-1 mb-0">{{ item.DataTime }} ({{ getWeek(item.DataTime) }})</div>
                            <ul class="card-group">
                                <li v-for="Location in item.Location" :key="Location">{{ Location }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer" v-if="isButtom(item.DataTime)">
                        我要報名 <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </div>
                </router-link>
                <p class="text-alarm text-center" v-show="searching.length === 0">沒有符合的資料。</p>
            </div>
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
    import Pagepagination from '../../components/PagePagination.vue'
    import { news } from '../../assets/json/data.json'
    export default {
        data() {
            return {
                data: [],
                paginatedData: null,
                paginationLimit: 6,
                pageInit: 1,
                pageCount: 0,
                todayData: new Date().getTime(),
                isVisible: null,
                dateTimeOption: '',
                productOption: '',
                locationOption: '',
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
                    const matchesLocation = item.Location.join().includes(this.locationOption) || this.filterByData(this.locationOption, this.data)
                    const matchesTag = this.productOption === null ? this.data : item.Tag !== null ? item.Tag.join().includes(this.productOption) : false || this.filterByData(this.productOption, this.data)
                    return matchesName && matchesDateTime && matchesLocation && matchesTag
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
                    const year = new Date(item.DataTime).getFullYear()
                    if(dateTime.indexOf(year) === -1) {
                        dateTime.push(year)
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
            locationOptions() {
                const location = []
                this.searching.forEach(item => {
                    if(item.Location !== null) {
                        item.Location.forEach(val => {
                            if(location.indexOf(val) === -1) {
                                location.push(val)
                            }
                        })
                    }
                })
                return location
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
                this.data = news.events
            },
            organizerPic(str) {
                let pic = ''
                switch (str) {
                    case 'uniXecure':
                        pic = 'uniXecure'
                        break;
                    case 'microsoft':
                        pic = 'microsoft'
                        break;    
                    case 'systexSoftware':
                        pic = 'systexSoftware'
                        break;        
                    default:
                        pic = `${str}_small`
                        break;
                }
                return pic
            },
            getcurrPage(num) {
                this.pageInit = num
            },
            isButtom(dateTime) {
                let isVisible = false
                let itemDate = new Date(dateTime).getTime()
                itemDate >= this.todayData ? isVisible = true : isVisible = false
                return isVisible
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