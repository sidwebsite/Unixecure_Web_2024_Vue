<template>
    <section class="pb-9 pt-4">
        <div class="container-absolute">
            <div class="container position-relative h-100">
                <!-- background images start -->
                <span class="represent_bg position-absolute">
                    <img src="../../assets/images//represent/represent_bg.svg" alt="">
                </span>
                <!-- background images end -->
            </div>
        </div>
        <div class="mw-760 pb-6">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item"><RouterLink to="/representHome">代理產品</RouterLink></li>
                    <li class="breadcrumb-item active"><RouterLink to="/Rapid7">Rapid7</RouterLink></li>
                </ul>
            </nav>
            <figure class="figure py-5 text-center">
                <img src="../../assets/images/represent/rapid7-logo.png" class="img-fluid" alt="">
            </figure>
            <h4 class="text-center">The world’s only practitioner-first security solutions are here.</h4>
        </div>
        <!--  -->
        <div class="mw-760 pt-6">
            <RepresentLists :listData="lists"></RepresentLists>
        </div>
    </section>    
    <ProductInformation :productName="productName"></ProductInformation>
</template>

<script>
    import ProductInformation from '../../components/ProductInformation.vue';
    import RepresentLists from '../../components/representLists.vue'
    export default {
        data() {
            return {
                productName: 'Rapid7',
                lists: [
                    {
                        Id: '1',
                        product: 'Rapid7',
                        Name: 'Rapid7 insightAppSec<br />網站應用程式安全測試',
                        typeName: 'Cybersecurity+ 護雲',
                        link: '/Rapid7Content01'
                    },
                    {
                        Id: '2',
                        product: 'Rapid7',
                        Name: 'Rapid7 insightCloudSec<br />雲端虛擬安全',
                        typeName: '雲端虛擬安全',
                        link: '/Rapid7Content02'
                    },
                    {
                        Id: '3',
                        product: 'Rapid7',
                        Name: 'Rapid7 insightIDR <br />XDR+SIEM解決方案',
                        typeName: 'Cybersecurity+ 護雲',
                        link: '/Rapid7Content03'
                    },
                    {
                        Id: '4',
                        product: 'Rapid7',
                        Name: 'Rapid7 Threat Command<br />外部威脅情報解決方案',
                        typeName: '核心資料安全',
                        link: '/Rapid7Content04'
                    },
                    {
                        Id: '5',
                        product: 'Rapid7',
                        Name: 'Rapid7 Metasploit Pro<br />滲透測試工具',
                        typeName: 'Cybersecurity+ 護雲',
                        link: '/Rapid7Content05'
                    },
                    {
                        Id: '6',
                        product: 'Rapid7',
                        Name: 'Rapid7 Nexpose<br />弱點掃描與管理系統',
                        typeName: 'Cybersecurity+ 護雲',
                        link: '/Rapid7Content06'
                    },
                ]
            }
        },
        components: {
            ProductInformation,
            RepresentLists
        }
    }
</script>

<style>

</style>