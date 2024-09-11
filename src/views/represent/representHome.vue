<template>
    <section class="pb-9">
        <div class="container-absolute">
            <div class="container position-relative h-100">
                <!-- background images start -->
                <span class="represent_bg position-absolute">
                    <img src="../../assets/images/represent/represent_bg.svg" alt="">
                </span>
                <!-- background images end -->
            </div>
        </div>
        <div class="container">
            <div class="represent-index-title">
                <h1 class="mb-4">Cybersecurity 資安代理產品</h1>
                <p>全方位防護企業機敏資料，資安滴水不漏</p>
            </div>
            <div class="row row-gap-3 mt-6 justify-content-center">
                <div class="col-lg-4 col-md-6" v-for="item in Cybersecurity" :key="item.Id">
                    <RouterLink :to="`/${item.Name}`" :title="item.Name" class="represent-index-card backdrop-blur-60 bg-white-80 boder border-white p-4 d-flex justify-content-center align-items-center h-100">
                        <img :src="`./product/${item.Name}.png`" class="represent-index-img">
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                Cybersecurity: [
                    {
                        Id: '1',
                        Name: 'cellopoint'
                    },
                    {
                        Id: '2',
                        Name: 'eLock'
                    },
                    {
                        Id: '3',
                        Name: 'delinea'
                    },
                    {
                        Id: '4',
                        Name: 'illumio'
                    },
                    {
                        Id: '5',
                        Name: 'invicti'
                    },
                    {
                        Id: '6',
                        Name: 'entrust'
                    },
                    {
                        Id: '7',
                        Name: 'opswat'
                    },
                    {
                        Id: '8',
                        Name: 'neithnet'
                    },
                    {
                        Id: '9',
                        Name: 'Rapid7'
                    },
                    {
                        Id: '10',
                        Name: 'tufin'
                    },
                    {
                        Id: '11',
                        Name: 'claroty'
                    },
                ]
            }
        }
    }
</script>