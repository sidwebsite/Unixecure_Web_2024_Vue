<script>
    export default {
        props: ['videoData']
    }
</script>

<template>
    <div class="row">
        <div class="col-12">
            <h3 class="text-white text-center mb-5">{{ videoData.Name }}</h3>
            <div class="ratio ratio-16x9 mb-6">
                <iframe :src="'https://www.youtube.com/embed/' + videoData.youtubeId" :title="videoData.Name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>