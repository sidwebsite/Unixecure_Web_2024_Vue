<template>
    <!-- 關聯影片 -->
    <ServeVideo :videoData="videoData" :productName="productName" v-if="isVisibleBlock(videoData)"></ServeVideo>
    <!-- 相關案例 -->
    <ServeCases :casesData="casesData" v-if="isVisibleBlock(casesData)"></ServeCases>
    <!-- 相關新聞 -->
    <ServeNews :newsData="newsData" v-if="newsEventsisVisibleBlock()"></ServeNews>
    <!-- 相關新聞和活動 -->
    <ServeNewsEvents :newsData="newsData" :eventsData="eventsData" v-if="isVisibleBlock(eventsData)"></ServeNewsEvents>
</template>

<script>
    import ServeVideo from './ServeVideo.vue'
    import ServeCases from './ServeCases.vue'
    import ServeNews from './ServeNews.vue'
    import ServeNewsEvents from './ServeNewsEvents.vue'
    
    import { news } from '../assets/json/data.json'
    export default {
        data() {
            return {
                videoData: [],
                casesData: [],
                newsData: [],
                eventsData: [],
                isData: true,
                isVisible: false
            }
        },
        props: ['productName'],
        components: {
            ServeVideo,
            ServeCases,
            ServeNews,
            ServeNewsEvents
        },
        created() {
            const videoData = news.video
            const casesData = news.cases
            const newsData = news.news
            const eventsData = news.events

            this.isDataBlock(videoData, this.videoData)
            this.isDataBlock(casesData, this.casesData)
            this.isDataBlock(newsData, this.newsData)
            this.isDataBlock(eventsData, this.eventsData)
        },
        methods: {
            isVisibleBlock(data) {
                return data.length !== 0 ? this.isVisible = true : this.isVisible = false
            },
            newsEventsisVisibleBlock() {
                if(this.eventsData.length === 0 && this.newsData.length !== 0) {
                    return this.isVisible = true
                } else {
                    return this.isVisible = false
                }
            },
            isDataBlock(data, blockDock) {
                data.forEach(item => {
                    if(item.Tag === null) {
                        return false
                    } else {
                        item.Tag.some(tag => {
                            return tag === this.productName ? this.isData = true : this.isData = false
                        })
                        if(this.isData === true) {
                            blockDock.push(item)
                        }
                    }
                })
            } 
        }
    }
</script>