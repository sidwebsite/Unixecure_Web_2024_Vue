<template>
    <section class="pb-9">
        <!-- background images start -->
        <div class="container-fixed">
            <div class="container position-relative h-100">
                <span class="contract_bg position-absolute">
                    <img src="../../assets/images/contract/contract_bg.svg" alt="">
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="container news-container">
            <div class="news-title-block mw-760 pt-4 pb-5">
                <nav class="h-auto">
                    <ul class="breadcrumb news-breadcrumb">
                        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                        <li class="breadcrumb-item"><RouterLink to="/contractLists">共同供應契約</RouterLink></li>
                        <li class="breadcrumb-item active">{{ Name }}</li>
                    </ul>
                </nav>
                <h1 class="text-center">{{ Name }}</h1>
            </div>
            <div class="bg-gray-50-50 border border-white px-3 py-2 contract-content">
                <div class="tr">
                    <div class="th">契約編號</div>
                    <div class="td">{{ number }}</div>
                </div>
                <div class="tr">
                    <div class="th">契約起始日期</div>
                    <div class="td">{{ startData }}</div>
                    <div class="th border-bottom-0">契約終止日期</div>
                    <div class="td border-bottom-0">{{ endData }}</div>
                </div>
            </div>
            <div class="table-responsive bg-gray-50-50 border border-white px-3 py-2">
                <table class="table contract-table">
                    <thead>
                        <tr>
                            <th>組別</th>
                            <th>項次</th>
                            <th>廠牌</th>
                            <th>品項</th>
                            <th>級距</th>
                            <th>決標價</th>
                        </tr>
                    </thead>
                    <tbody v-html="description"></tbody>
                </table>
            </div>
            <div class="contract-download">
                <a :href="fileDownload" download class="btn-contact">檔案下載</a>
            </div>
        </div>
    </section>
    <Lists :contractData="data" @emid-id="getcurrId"></Lists>
</template>
<script>
    import { contract } from '../../assets/json/data.json'
    import Lists from '../../components/ContractContentLists.vue'
    export default {
        data() {
            return {
                data: [],
                Id: '',
                product: '',
                Name: '',
                number: '',
                description: '',
                startData: '',
                endData: '',
                fileDownload: ''
            }
        },
        props: ['id'],
        components: {
            Lists
        },
        watch: {
            $route(to, from){
                if(to.params.contractId !== from.params.contractId){
                    this.$router.go(0)
                }
            }
        },
        created() {
            const seed = this.id;
            const data = contract
            data.forEach((item) => {
                if(item.Id === seed) {
                    this.Id = item.Id
                    this.product = item.product
                    this.Name = item.Name
                    this.number = item.number
                    this.description = item.description
                    this.startData = item.startData
                    this.endData = item.endData
                    this.fileDownload = item.fileDownload
                }
            })
            // lists
            for (let i = 0; i < 4; i++) {
                const element = data[i];
                if(element.Id === seed) {
                    continue
                } else {
                    this.data.push(element);
                }
            }
        },
        methods: {
            getcurrId(idName) {
                this.Id = idName
                console.log(idName);
            },
        }
    }
</script>
