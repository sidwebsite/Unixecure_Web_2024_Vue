<template>
    <section>
        <div class="container position-relative">
            <span class="copyright_left position-absolute">
                <img src="../assets/images/copyright/copyright_left.svg" alt="">
            </span>
            <span class="copyright_right position-absolute">
                <img src="../assets/images/copyright/copyright_right.svg" alt="">
            </span>
            <div class="row position-relative">
                <div class="col-12">
                    <article class="text-center page_404">
                        <figure class="mb-6">
                            <img src="../assets/images/404.svg" class="img-fluid" alt="">
                        </figure>
                        <h3 class="mb-6">頁面不存在 Page Not Found</h3>
                        <p>您正在尋找的頁面可能已被刪除、移動，或者您輸入了錯誤的網址。</p>
                        <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <div class="mt-6">
                            <RouterLink to="/contact" class="btn-secondary mr-4">聯絡我們</RouterLink>
                            <RouterLink to="/" class="btn-contact fs-4">返回首頁</RouterLink>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.page_404 {
    padding: 160px 0;
}
</style>