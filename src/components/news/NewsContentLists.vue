<template>
    <section class="news-content-lists-block">
        <div class="container">
            <h3 class="text-primary-300 mb-6 text-center">更多新聞</h3>
            <div class="row news-content-lists">
                <div class="col-lg-4 col-md-6 list" v-for="item in newsData.slice(0, 3)" :key="item.Id">
                    <router-link :to="{ name: 'newsContent', params: { newsId: item.Id }}" :title="item.Name" class="default-card card">
                        <div class="card-img">
                            <img :src="`../pic/news/${item.picDownloadPath}`" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                            <span class="card-date">{{ item.DataTime }} ({{ getWeek(item.DataTime) }})</span>
                            <div class="card-class">
                                <ul class="card-group">
                                    <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                                </ul>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['newsData'],
        methods: {
            getId(id) {
                this.$emit('emit-id', id)
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
