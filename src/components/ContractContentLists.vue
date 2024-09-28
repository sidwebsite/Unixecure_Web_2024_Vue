<template>
    <section class="news-content-lists-block">
        <div class="container">
            <h3 class="text-primary-300 mb-6 text-center">更多契約</h3>
            <div class="row row-gap-4">
                <!-- item -->
                <div class="col-lg-4 col-md-6" v-for="item in contractData.slice(0,3)" :key="item.Id">
                    <router-link :to="{ name: 'contractContent', params: { contractId: item.Id }}" :title="item.Name" class="default-card card" @click="getId(item.Id)">
                        <div class="card-body flex-grow-1 d-flex flex-column">
                            <ul class="card-logo d-flex">
                                <li><img :src="`../product/${item.picDownloadPath}`" :alt="item.product"></li>
                            </ul>
                            <h5 class="card-title limitLines-2 flex-grow-1 d-flex align-items-center">{{ item.Name }}</h5>
                            <ul class="list-unstyled text-gray-400">
                                <li>契約編號：{{ item.number }}</li>
                                <li>契約期間：{{ item.startData }}-{{ item.endData }}</li>
                            </ul>
                        </div>
                        <div class="card-footer">
                            詳細內容 <i class="fa-sharp fa-solid fa-arrow-right"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['contractData'],
        methods: {
            getId(id) {
                this.$emit('emit-id', id)
            }
        }
    }
</script>