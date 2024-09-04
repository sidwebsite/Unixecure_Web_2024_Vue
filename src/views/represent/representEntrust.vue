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
        <div class="container pb-6">
            <nav class="h-auto">
                <ul class="breadcrumb news-breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
                    <li class="breadcrumb-item"><RouterLink to="/representHome">代理產品</RouterLink></li>
                    <li class="breadcrumb-item active"><RouterLink to="/entrust">Entrust</RouterLink></li>
                </ul>
            </nav>
            <figure class="figure py-5 text-center">
                <img src="../../assets/images//represent/entrust-logo.png" class="img-fluid" alt="entrust">
            </figure>
            <h4 class="text-center">Entrust keeps the world moving safely by enabling protected identities, payments, and data.</h4>
        </div>
        <!-- caption -->
        <section class="py-9 bg-white-80 border border-white">
            <div class="mw-760">
                <p class="text-center fs-6">我們致力於身份驗證、支付和資料保護，Entrust 讓全世界安全地運作。現今無論是跨境、購物、訪問 e 政府服務還是登入企業平台，用戶更需要有別以往的無縫接軌安全環境。這些所有交互的核心，Entrust 可提供強大的數位安全和信任憑證解決方案。我們擁有 2500 多名專業人才、全球網路合作夥伴和 150 多個國家的用戶，無庸置疑地，Entrust 是世界企業的首選。</p>
            </div>
        </section>
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
                productName: 'entrust',
                lists: [
                    {
                        Id: '1',
                        product: 'entrust',
                        Name: 'Entrust CodeSafe<br />程式碼簽章解決方案',
                        typeName: '核心資料安全',
                        link: '/entrustContent01'
                    },
                    {
                        Id: '2',
                        product: 'entrust',
                        Name: 'Entrust nShield Solo HSMs<br />加密金鑰服務',
                        typeName: '核心資料安全',
                        link: '/entrustContent02'
                    },
                    {
                        Id: '3',
                        product: 'entrust',
                        Name: 'Entrust PKI<br />自我管理解決方案',
                        typeName: '核心資料安全',
                        link: '/entrustContent03'
                    },
                    {
                        Id: '4',
                        product: 'entrust',
                        Name: 'Entrust BYOK<br />自帶金鑰協助加強雲端資料安全控管',
                        typeName: '雲端虛擬安全',
                        link: '/entrustContent04'
                    }
                ]
            }
        },
        components: {
            ProductInformation,
            RepresentLists
        }
    }
</script>