<script>
    export default {
        data() {
            return {
                year: new Date().getFullYear(),
                CompanyTaxID: '90254779'
            }
        }
    }
</script>

<template>
<p>智慧資安科技股份有限公司 © <span>{{ year }}</span>｜統編：{{ CompanyTaxID }}</p>
</template>