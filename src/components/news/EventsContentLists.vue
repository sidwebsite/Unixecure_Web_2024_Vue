<template>
    <section class="news-content-lists-block">
        <div class="container">
            <h3 class="text-primary-300 mb-6 text-center">更多活動</h3>
            <div class="row news-content-lists">
                <div class="col-lg-4 col-md-6 list" v-for="item in eventsData.slice(0, 3)" :key="item.Id">
                    <router-link :to="{ name: 'eventsContent', params: { eventsId: item.Id }}" :title="item.Name" class="default-card card d-flex flex-column">
                        <div class="card-img">
                            <img :src="`../pic/events/${item.picDownloadPath}`" alt="">
                        </div>
                        <div class="card-body flex-grow-1 d-flex flex-column">
                            <ul class="card-logo d-flex">
                                <li v-for="organizer in item.organizer" :key="organizer"><img :src="`../product/${organizerPic(organizer)}.png`" :alt="organizer"></li>
                            </ul>
                            <h5 class="card-title limitLines-2 flex-grow-1 d-flex align-items-center">{{ item.Name }}</h5>
                            <div class="d-flex align-items-center">
                                <div class="card-date flex-grow-1 mb-0">{{ item.DataTime }}（{{ getWeek(item.DataTime) }}）</div>
                                <ul class="card-group">
                                    <li v-for="Location in item.Location" :key="Location">{{ Location }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer" v-if="isButtom(item.DataTime)">
                            我要報名 <i class="fa-sharp fa-solid fa-arrow-right"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                todayData: new Date().getTime(),
                isVisible: null
            }
        },
        props: ['eventsData'],
        methods: {
            getId(id) {
                this.$emit('emit-id', id)
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

<style>

</style>